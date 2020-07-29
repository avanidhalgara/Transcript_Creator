var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
//  require("./routes/api-routes.js")(app)=============================================================
require("./routes/htmlRoutes.js")(app);
require("./routes/api_routes.js")(app)
require("./routes/mark_api_routes.js")(app)
// Here we introduce HTML routing to serve different HTML files


// require("./routes/class_api_routes")(app)
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
})
.catch(function(err){
console.log(err)
})