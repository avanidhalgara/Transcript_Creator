var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all student info
  app.get("/api/student/", function(req, res) {
    db.Student.findAll({})
      .then(results=>res.json(results)) 
        .catch(err=>res.json(err))
      
  })
  // create student info with name, last name, first name etc.
  //Email address
  app.post("/api/student", function(req, res) {
    console.log(req.body);
    
    db.Student.create(req.body)
        .then(results=>res.json(results)) 
        .catch(err=>res.json(err))
      
  }) 
   
  
}