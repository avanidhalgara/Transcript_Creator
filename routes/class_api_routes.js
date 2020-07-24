var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {



  // GET route for getting all student info
  app.get("/api/class", function(req, res) {
    db.Class.findAll({})
      .then(results=>res.json(results)) 
        .catch(err=>res.json(err))
      
  })
  // create student info with name, last name, first name etc.
  //Email address
  app.post("/api/class/", function(req, res) {
    // console.log(req.params.id);
   db.Class.create(req.body).then(function(response) {
       console.log(response);
        //res.send({response});
        res.json(response)
      }).catch(function(err){
        res.json(err)
        // console.log('Oops! something went wrong, : ', err);
      });
      
  })
  
}