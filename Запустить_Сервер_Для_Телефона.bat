@echo off
chcp 65001 > nul
title EmojiWord Server for Mobile
echo ===================================================
echo     Запуск сервера EmojiWord для телефона...
echo ===================================================
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
