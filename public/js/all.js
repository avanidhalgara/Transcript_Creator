function runTableQuery() {
    // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
    $.ajax({ url: "/api/student", method: "GET" })
      .then(function(studentData) {

        // Here we then log the tableData to console, where it will show up as an object.
        console.log(studentData);
        console.log("------------------------------------");

        // Loop through and display each of the customers
        for (var i = 0; i < studentData.length; i++) {

          // Get a reference to the tableList element and populate it with tables
          var studentList = $("#studentList");

          // Then display the fields in the HTML (Section Name, Date, URL)
          var listItem = $("<li class='list-group-item mt-4'>");
          var student=studentData[i]
          

          listItem.append(
            $("<button class=btn btn-link collapsed >").text("View marks for ID-" + (studentData[i].id)).on("click",function(event){
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

//   function runWaitListQuery() {

//     // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
//     $.ajax({ url: "/api/waitlist", method: "GET" })
//       .then(function(waitData) {

//         // Here we then log the waitlistData to console, where it will show up as an object.
//         console.log(waitData);
//         console.log("------------------------------------");

//         // Loop through and display each of the customers
//         for (var i = 0; i < waitData.length; i++) {

//           // Get a reference to the waitList element and populate it with tables
//           var waitList = $("#waitList");

//           // Then display the fields in the HTML (Section Name, Date, URL)
//           var listItem = $("<li class='list-group-item mt-4'>");

//           listItem.append(
//             $("<h2>").text("Table #" + (i + 1)),
//             $("<hr>"),
//             $("<h2>").text("ID: " + waitData[i].customerID),
//             $("<h2>").text("Name: " + waitData[i].customerName),
//             $("<h2>").text("Email: " + waitData[i].customerEmail),
//             $("<h2>").text("Phone: " + waitData[i].phoneNumber)
//           );

//           waitList.append(listItem);
//         }
//       });
//   }

//   // This function resets all of the data in our tables. This is intended to let you restart a demo.
//   function clearTable() {
//     alert("Clearing...");

//     // Clear the tables on the server and then empty the elements on the client
//     $.ajax({ url: "/api/clear", method: "POST" }).then(function() {
//       $("#waitList").empty();
//       $("#tableList").empty();
//     });
//   }

//   $("#clear").on("click", clearTable);

  // Run Queries!
  // ==========================================
  runTableQuery();
//   runWaitListQuery();


