const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600,icon:__dirname + '/icon.jpg', frame: true})

  // and load the index.html of the app.
  mainWindow.loadURL("https://todo.microsoft.com/?app")
  
  // Open the DevTools.
  //mainWindow.webContents.openDevTools()
  mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.webContents.insertCSS('.o365sx-appName, #ShellAboutMe, #ShellSettings, #O365_HeaderLeftRegion, #todoWhatsNewBtn{ display: none !important;}')
  });
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}
app.on('browser-window-created',function(e,window) {
  window.setMenu(null);
});
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})


