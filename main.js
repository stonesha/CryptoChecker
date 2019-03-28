const {BrowserWindow, app} = require('electron')
const path = require('path')
const glob = require('glob')

//if mac app store
if (process.mas) app.setName('cryptochecker')

let win

//creates main window
function createWindow()
{
    //makes it only a single instance
    makeSingleInstance()

    win = new BrowserWindow({width: 800, height: 600, resizable: false});

    win.loadFile('src/index.html')

    win.on('closed', () => {
        win = null 
    })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
app.on('activate', () => {
// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})

// Make this app a single instance app.
//
// The main window will be restored and focused instead of a second window
// opened when a person attempts to launch a second instance.
//
// Returns true if the current version of the app should quit instead of
// launching.
function makeSingleInstance () {
    if (process.mas) return
  
    app.requestSingleInstanceLock()
  
    app.on('second-instance', () => {
      if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore()
        mainWindow.focus()
      }
    })
  }
  
  function loadScript() 
  {
    const files = glob.sync(path.join(__dirname, 'scripts/**/*.js'))
    files.forEach((file) => { require(file) })
  }