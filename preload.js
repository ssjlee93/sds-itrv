const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  createFolder: (folderPath) => ipcRenderer.invoke('create-folder', folderPath),
  createFile: (filePath, content) => ipcRenderer.invoke('create-file', filePath, content),
});