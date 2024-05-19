// to get the feature of path
const path = require('path');

// to render the window
const{ app, BrowserWindow} = require('electron');

// check if app is rumnning on MAC
const isMac = process.platform === 'darwin';

// describing the window
function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'Image Resizer',
        width: 500, 
        height:800
    });

    // linking the main.js file
    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

// launch the app when it is ready
app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createMainWindow();
        }
    })
})

// close the app even when it is on mac
app.on('window-all-closed', () => {
    if (!isMac) {
      app.quit()
    }
});