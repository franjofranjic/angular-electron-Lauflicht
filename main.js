const { app, BrowserWindow } = require('electron')

//Schmeisst Fehler!

// var electron = require('electron');
// var SerialPort = require('SerialPort');
// var port = new SerialPort("COM7", {
//   baudRate: 9600
// });
//
// var ipc = electron.ipcMain;
// ipc.on('configData', (event, messages) => {
//   port.write(messages);
// });

function createWindow () {
  // Erstelle das Browser-Fenster.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // and load the index.html of the app.
  win.loadFile('dist/Lauflicht/index.html')

  // Öffnen der DevTools.
  win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Einige APIs können nur nach dem Auftreten dieses Events genutzt werden.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // Unter macOS ist es üblich, für Apps und ihre Menu Bar
  // aktiv zu bleiben, bis der Nutzer explizit mit Cmd + Q die App beendet.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // Unter macOS ist es üblich ein neues Fenster der App zu erstellen, wenn
  // das Dock Icon angeklickt wird und keine anderen Fenster offen sind.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
