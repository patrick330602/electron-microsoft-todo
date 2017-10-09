(function () {
    // Retrieve remote BrowserWindow
    const {
      BrowserWindow
    } = require('electron').remote

    function init() {
      // Minimize task
      document.getElementById("min-btn").addEventListener("click", (e) => {
        var window = BrowserWindow.getFocusedWindow();
        window.minimize();
      });

      // Maximize window
      document.getElementById("max-btn").addEventListener("click", (e) => {
        var window = BrowserWindow.getFocusedWindow();
        if (window.isMaximized()) {
          window.unmaximize();
        } else {
          window.maximize();
        }
      });

      // Close app
      document.getElementById("close-btn").addEventListener("click", (e) => {
        var window = BrowserWindow.getFocusedWindow();
        window.close();
      });
    };

    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        init();
      }
    };
  })();