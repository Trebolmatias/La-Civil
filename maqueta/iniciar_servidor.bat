@echo off
cd /d "%~dp0"
echo ============================================
echo   Maqueta la Civil - servidor local
echo   Abri en el navegador: http://localhost:8000
echo   (Para apagarlo: cerra esta ventana)
echo ============================================
python serve.py
pause
