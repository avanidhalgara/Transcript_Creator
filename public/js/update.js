function runTableQuery() {
    var queryString = new Array();
var data;

    if (queryString.length == 0) {
        if (window.location.search.split('?').length > 1) {
            var params = window.location.search.split('?')[1].split('&');
            for (var i = 0; i < params.length; i++) {
                var key = params[i].split('=')[0];
                var value = decodeURIComponent(params[i].split('=')[1]);
                queryString[key] = value;
            }
        }
    }
    if (queryString["id"] != null) {
       
        // data += "<b>Name:</b> " + queryString["id"]
       data=queryString["id"];
       console.log(data);
        // $("#lblData").html(data);
    }

    // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
    $.ajax({ url: "/api/marks/"+data, method: "GET" })
      .then(function(marks) {

        // Here we then log the tableData to console, where it will show up as an object.
        console.log(marks[0].maths);
        $('#maths').val(marks[0].maths);
        $('#english').val(marks[0].english);
        $('#science').val(marks[0].science);
        $('#social').val(marks[0].social);
        $('#average').val(marks[0].average);
      

   
   
    
  });


$("#add-btn").on("click", function(event) {
    event.preventDefault();
    console.log("data here"+data)
    // make a newCharacter obj
    var newStudent = {
      // Firstname from firstName input
      English: $("#english").val().trim(),
      // last name from lastName input
      Maths: $("#maths").val().trim(),
      //  parent name from parentName input
      Science: $("#science").val().trim(),
      // email address from emailAddress input
      Social: $("#social").val().trim(),
      // class level frol classLevel input
    //   average: $("#average").val().trim()
        // enroll status from enrollStatus input
    

    }

   
  console.log(newStudent+"new student")
    // send an AJAX POST-request with jQuery
    $.post("/api/update/"+data, newStudent)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("update Student marks");
      });
    });

    }

  runTableQuery();
