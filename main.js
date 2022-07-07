const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const { env } = require('process');

let mainWindow;
function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1500,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload/main.js'),
    },
  });

  require('./ipc/ipc.js')(mainWindow);

  if (env.TYPE == 'debug') {
    //デバッグ時のみデバッグメニューを表示
    mainWindow.setMenu(Menu.buildFromTemplate([
      {
        label: 'デバッグ',
        submenu: [
          { label: 'デベロッパーツール', role: 'toggleDevTools' },
          { label: '再読み込み', role: 'reload' }
        ]
      }
    ]));
  }
  else mainWindow.setMenu(null);

  mainWindow.loadFile('renderer/main/index.html');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createMainWindow);

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});
