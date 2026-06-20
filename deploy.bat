@echo off
echo 🚀 Starting Financer Deployment...
echo.

REM Step 1: Build Frontend
echo 📦 Step 1/3: Building frontend...
cd client
call npm install
if errorlevel 1 (
    echo ❌ Frontend dependencies installation failed!
    exit /b 1
)

call npm run build
if errorlevel 1 (
    echo ❌ Frontend build failed!
    exit /b 1
)
echo ✅ Frontend built successfully!
echo.

REM Step 2: Copy build into server/public
echo 📦 Step 2/4: Copying frontend into server/public...
node ..\scripts\copy-client-build.js
if errorlevel 1 (
    echo ❌ Failed to copy frontend build!
    exit /b 1
)
echo ✅ Frontend copied to server/public!
echo.

REM Step 3: Install Backend Dependencies
echo 📦 Step 3/4: Installing backend dependencies...
cd ..\server
call npm install
if errorlevel 1 (
    echo ❌ Backend dependencies installation failed!
    exit /b 1
)
echo ✅ Backend dependencies installed!
echo.

REM Step 4: Start Server
echo 🚀 Step 4/4: Starting server...
echo.
echo ✅ Deployment complete!
echo 🌐 Server will start on http://localhost:5000
echo 📝 Make sure your .env file is configured correctly
echo.

call npm start
