var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // display marks for perticular student
  app.get("/api/marks/:id", function(req, res) {
    // console.log(req.params.id);
   db.Marks.findAll({
     
    where: {
       StudentId: req.params.id
      },
    include: [db.Student]
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
//   display all marks with associate students
  app.get("/api/marks/", function(req, res) {
    db.Marks.findAll({
     
         include: [{
         model: db.Student
     }]}).then(function(response) {
        //  console.log(response);
         res.send({response});
       }).catch(function(err){
        //  console.log('Oops! something went wrong, : ', err);
       });
       
   })
//    insert marks into database
  app.post("/api/marks", function(req, res) {
    console.log(req.body)
    db.Marks.create(req.body)
        .then(results=>res.json(results)) 
        .catch(err=>res.json(err))
      
  }) 
  // uodating marks for students. crete api update route for grades
  app.put('/api/update/:id', function (req, res) {
   
    db.Marks.update({
        english: req.body.English,
        maths:req.body.Maths,
        science:req.body.Science,
        social:req.body.Social        
    }, {
        where: {
            StudentId: req.params.id
        },
        include:[{
          model: db.Student
        }]
    }).then(function (result) {
        res.json(result);
    });
});
     
}