// 
function runTableQuery() {
  // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
  $.ajax({ url: "/api/marks/:id", method: "GET" })
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
        listItem.append(
          $("<button class=btn btn-link collapsed >").text("View marks for ID-" + (studentData[i].id)).on("click",function(event){
              event.preventDefault();
             // var url="/adminUpdate.html?id=" + encodeURIComponent(studentData[i].id)
            // var id=studentData[i].id;
              // window.location.href = "/adminUpdate.html?id="+1
          }),
          
          $("<h1>").text ("firstname" + studentData[0].firstname),
          $("<h1>").text("lastname" + studentData[0].lastname),
          
          $("<h1>").text("classlevel" + studentData[0].classLevel),
          
          $("<h1>").text("enrollyear" + studentData[0].enrollYear),

          
          $("<h1>").text("maths" + studentData[0].Maths),
          $("<h1>").text("english" + studentData[i].English),
          $("<h1>").text("science" + studentData[i].Science),
          $("<h1>").text("social" + studentData[i].Social),

        );
       
      }
    });
}
//   
runTableQuery();
//   runWaitListQuery();


// function runTableQuery1() {
//   var queryString = new Array();
// var data;

//   if (queryString.length == 0) {
//       if (window.location.search.split('?').length > 1) {
//           var params = window.location.search.split('?')[1].split('&');
//           for (var i = 0; i < params.length; i++) {
//               var key = params[i].split('=')[0];
//               var value = decodeURIComponent(params[i].split('=')[1]);
//               queryString[key] = value;
//           }
//       }
//   }
//   if (queryString["id"] != null) {

//       // data += "<b>Name:</b> " + queryString["id"]
//      data=queryString["id"];
//      console.log(data);
//       // $("#lblData").html(data);
//   }

//   // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
//   $.ajax({ url: "/api/marks/"+data, method: "GET" })
//     .then(function(marks) {

//       // Here we then log the tableData to console, where it will show up as an object.
//       console.log(marks[0].maths);
//       $('#maths').val(marks[0].maths);
//       $('#english').val(marks[0].english);
//       $('#science').val(marks[0].science);
//       $('#social').val(marks[0].social);
//       $('#average').val(marks[0].average);

//       );
       
//     }
//   });
// }
// //   
// runTableQuery1();


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
        listItem.append(
          $("<button class=btn btn-link collapsed >").text("View marks for ID-" + (studentData[i].id)).on("click",function(event){
              event.preventDefault();
             // var url="/adminUpdate.html?id=" + encodeURIComponent(studentData[i].id)
            // var id=studentData[i].id;
              window.location.href = "/adminUpdate.html?id="+1
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
