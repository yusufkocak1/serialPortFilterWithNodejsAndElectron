const { BrowserWindow } = require('electron').remote;


var win = BrowserWindow.getFocusedWindow();
var minimize = document.querySelector("#minimize");
var maximize = document.querySelector("#maximize");
var quit = document.querySelector("#quit");

minimize.addEventListener("click", () => {
  console.log("minimize");;
  win.minimize();
});

maximize.addEventListener("click", () => {
  //win.setFullScreen(!win.isFullScreen());
});

quit.addEventListener("click", () => {
  win.close();
});
