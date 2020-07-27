// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // cms route loads cms.html
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/adminAdd.html"));
  });

  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/adminView.html"));
  });
  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/adminUpdate.html"));
  });

//   // blog route loads blog.html
//   app.get("/adminUpdate", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/update.html"));
//   });

//   // authors route loads author-manager.html
//   app.get("/authors", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
//   });

}