function runStudentQuery() {
    // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
    $.ajax({ url: "/api/student", method: "GET" })
      .then(function(studentData) {

        // Here we then log the tableData to console, where it will show up as an object.
        console.log(studentData);
        console.log("------------------------------------");

        // Loop through and display each of the data
        for (var i = 0; i < studentData.length; i++) {

          // Get a reference to the studentList element and populate it with students
          var studentList = $("#studentList");

          // Then display the fields in the HTML (Section Name, Date, URL)
          var listItem = $("<li class='list-group-item mt-4'>").addClass("fontBack-style");
          var student=studentData[i]
          

          listItem.append(
            $("<button class=btn btn-link collapsed >").addClass("btn-color").text("View marks for ID-" + (studentData[i].id)).on("click",function(event){
                event.preventDefault();
                console.log(student)
                console.log("working")
               // var url="/adminUpdate.html?id=" + encodeURIComponent(studentData[i].id)
              // var id=studentData[i].id;
               
               
                window.location.href = "/adminUpdate.html?id="+student.id

            }),
            
            // $("<hr>"),
            // $("<h2>").text("ID: " + studentData[i].studentId),
            $("<h1>").text("First Name: " + studentData[i].firstname),
            $("<h1>").text("Last Name: " + studentData[i].lastname),
            $("<h1>").text("Parent Name: " + studentData[i].parentName),
            $("<h1>").text("Email Address: " + studentData[i].emailaddress),
            $("<h1>").text("Class Level: " + studentData[i].classLevel),
            $("<h1>").text("Enroll Status: " + studentData[i].enrollStatus),
            $("<h1>").text("Enroll Year: " + studentData[i].enrollYear),
            $("<h1>").text("Phone Number: " + studentData[i].phoneNumber),
            $("<h1>").text("Address: " + studentData[i].address)
          );

          studentList.append(listItem);
        }
      });
  }


  runStudentQuery();



