@echo off
chcp 65001 > nul
title EmojiWorld Server for Mobile
echo ===================================================
echo     Запуск сервера EmojiWorld для телефона...
echo ===================================================
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
