// console.log('Hello from Electron 👋')
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
const fs = require('node:fs')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    if (process.env.NODE_ENV === 'development') {
        win.loadURL('http://localhost:3000')
    } else {
        win.loadFile('build/index.html')
    }

    win.webContents.openDevTools()

}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

ipcMain.handle('create-folder', async (event, folderPath) => {
    try {
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        return { success: true };
      } else {
        return { success: false, message: 'Folder already exists' };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
});

ipcMain.handle('create-file', async (event, filePath, content) => {
    try {
      fs.writeFileSync(filePath, content);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  });