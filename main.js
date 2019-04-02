const {
  app,
  BrowserWindow
} = require("electron")

// Browser Window Object being Render Process
// Define as global object, because process will finish When object terminated.
let win

function createWindow(){
  // construct BrowserWindow
  win = new BrowserWindow({
    width: 800,
    height: 600
  })
  // load index.html
  win.loadFile("index.html")
  // activate "--debug" option if it's called with
  if (process.argv.find((arg) => arg === "--debug")) {
    win.webcontents.openDevTools()
  }
  // Evnet handler of Browser closing
  win.on("closed", ()=> {
    win = null
  })
}

// this method will be called when Electron finishes its initialization
// and ready to create browser window.
// Some API can be used after this Event
app.on("ready", createWindow)

// Event handler for closing whole window object
app.on("window-all-closed", () => {
  // In MacOS, main process would never quit without cmd+Q
  if (process.platform !== "darwin") {
    app.quit()
  }
});

app.on("activate", () => {
  // for MacOS
  // ReConstruct window
  if(win === null) {
    createWindow()
  }
})
