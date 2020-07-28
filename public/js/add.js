

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // make a newCharacter obj
    var newStudent = {
      // Firstname from firstName input
      firstname: $("#first-name").val().trim(),
      // last name from lastName input
      lastname: $("#last-name").val().trim(),
      //  parent name from parentName input
      parentName: $("#parent-name").val().trim(),
      // email address from emailAddress input
      emailaddress: $("#email-address").val().trim(),
      // class level frol classLevel input
      classLevel: $("#class-level").val().trim(),
        // enroll status from enrollStatus input
      enrollStatus: $("#enroll-status").val().trim(),
        // enroll year form enrollYear input
      enrollYear: $("#enroll-year").val().trim(),
        // phone number from phoneNumber input
      phoneNumber: $("#phone-number").val().trim(),      
    //   address from address input
     address: $("#address").val().trim()

    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/student", newStudent)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Adding Student...");
        window.location.href ="/adminUpdate.html?id="+data.StudentId
      });
  
    // empty each input box by replacing the value with an empty string
    $("#first-name").val("");
    $("#last-name").val("");
    $("#parent-name").val("");    
    $("#email-address").val("");
    $("#class-level").val("");
    $("#enroll-status").val("");
    $("#enroll-year").val("");
    $("#phone-number").val("");    
    $("#address").val("");
  
  });

  