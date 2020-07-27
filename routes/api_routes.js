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
  
  
  // TODO SEARCH STUDENT BY NAME

  app.get("/api/student/:firstname/:lastname", function(req, res) {
    // console.log(req.params.id);
   db.Student.findOne({
     
    where: {
       firstname: req.params.firstname,
       lastname: req.params.lastname

      },
    include: [db.Marks]
  }).then(function(response) {
       console.log(response);
        //res.send({response});

        //do calculation for av and grade
        res.json(response)
      }).catch(function(err){
        res.error(err)
        // console.log('Oops! something went wrong, : ', err);
      });
      
  })

  
   
  
}