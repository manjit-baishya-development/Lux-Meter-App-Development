const { app, BrowserWindow } = require('electron');
const path = require('path');

// Check if the app is running on Mac
const isMac = process.platform === 'darwin';

// Describe the window
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'LUX Meter',
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'renderer/preload.js'), // Preload script to expose Node.js and Electron APIs
            contextIsolation: true, // Protect against prototype pollution
            enableRemoteModule: false, // Turn off remote module
        }
    });

    // Load the HTML file
    mainWindow.loadFile(path.join(__dirname, 'renderer/index.html'));

    // Ensure the menu bar is hidden
    mainWindow.setMenuBarVisibility(false);4
}

// Launch the app when it is ready
app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
});

// Close the app even when it is on Mac
app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit();
    }
});
