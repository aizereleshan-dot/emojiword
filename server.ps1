# =========================================================
# EmojiWorld — Локальный веб-сервер для телефона и ПК
# Не требует сторонних программ, Node.js или прав администратора
# =========================================================

$port = 8080

# Получаем локальный IPv4 адрес в Wi-Fi/LAN сети
$localIP = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object { 
    $_.InterfaceAlias -notmatch 'Loopback' -and $_.IPAddress -notmatch '^169\.254\.' 
} | Select-Object -First 1).IPAddress

if (-not $localIP) {
    $localIP = "127.0.0.1"
}

# Функция MIME-типов
function Get-ContentType($path) {
    $ext = [System.IO.Path]::GetExtension($path).ToLower()
    switch ($ext) {
        ".html" { return "text/html; charset=utf-8" }
        ".htm"  { return "text/html; charset=utf-8" }
        ".css"  { return "text/css; charset=utf-8" }
        ".js"   { return "application/javascript; charset=utf-8" }
        ".json" { return "application/json; charset=utf-8" }
        ".png"  { return "image/png" }
        ".jpg"  { return "image/jpeg" }
        ".svg"  { return "image/svg+xml" }
        ".ico"  { return "image/x-icon" }
        default { return "application/octet-stream" }
    }
}

$root = $PSScriptRoot
if (-not $root) { $root = Get-Location }

# Пробуем запустить сокет
$listener = $null
while ($true) {
    try {
        $listener = New-Object System.Net.Sockets.TcpListener([System.Net.IPAddress]::Any, $port)
        $listener.Start()
        break
    } catch {
        $port++
        if ($port -gt 8090) {
            Write-Host "Не удалось занять порт. Проверьте сетевые подключения." -ForegroundColor Red
            exit 1
        }
    }
}

Clear-Host
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "         EmojiWorld — Веб-сервер для телефона и ПК          " -ForegroundColor Yellow
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host " 💻 На этом компьютере откройте:" -ForegroundColor White
Write-Host "    👉 http://localhost:$port/" -ForegroundColor Green
Write-Host ""
Write-Host " 📱 На телефоне (в той же Wi-Fi сети) откройте в браузере:" -ForegroundColor White
Write-Host "    👉 http://${localIP}:${port}/" -ForegroundColor Green
Write-Host ""
Write-Host " ⚠️ ВАЖНО:" -ForegroundColor Yellow
Write-Host " 1. Телефон и компьютер должны быть подключены к ОДНОЙ Wi-Fi сети."
Write-Host " 2. Это окно консоли должно оставаться ОТКРЫТЫМ, пока вы играете."
Write-Host " 3. Ссылка работает только внутри вашего дома/офиса (не через интернет)."
Write-Host " 4. Если на телефоне страница не открывается, разрешите входящие"
Write-Host "    подключения для PowerShell во всплывающем окне Брандмауэра Windows."
Write-Host ""
Write-Host " Для остановки сервера нажмите Ctrl + C в этом окне." -ForegroundColor DarkGray
Write-Host "============================================================" -ForegroundColor Cyan

# Автоматически открываем в браузере на ПК
Start-Process "http://localhost:$port/"

try {
    while ($true) {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
        
        $requestLine = $reader.ReadLine()
        if (-not $requestLine) {
            $client.Close()
            continue
        }

        $parts = $requestLine.Split(" ")
        $urlPath = "/"
        if ($parts.Length -gt 1) {
            $urlPath = $parts[1].Split("?")[0]
        }
        if ($urlPath -eq "/" -or $urlPath -eq "") {
            $urlPath = "/index.html"
        }

        # Безопасное сопоставление с локальным файлом
        $safeRelative = $urlPath.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar)
        $filePath = [System.IO.Path]::Combine($root, $safeRelative)

        if ([System.IO.File]::Exists($filePath)) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $contentType = Get-ContentType $filePath
            $header = "HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nContent-Length: $($bytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
            $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)

            $stream.Write($headerBytes, 0, $headerBytes.Length)
            $stream.Write($bytes, 0, $bytes.Length)
        } else {
            $notFound = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: 9`r`nConnection: close`r`n`r`nNot Found"
            $notFoundBytes = [System.Text.Encoding]::UTF8.GetBytes($notFound)
            $stream.Write($notFoundBytes, 0, $notFoundBytes.Length)
        }

        $stream.Flush()
        $client.Close()
    }
} finally {
    if ($listener) {
        $listener.Stop()
    }
}
