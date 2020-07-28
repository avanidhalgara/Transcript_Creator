var newStudent;
$("#btn-create").on("click", function(event) {
  event.preventDefault();
 
  // make a newCharacter obj
  
   newStudent={
     StudentId:$("#student-id").val()
   }

console.log(newStudent.StudentId)


display()
 
  });

  function display()
  {
    $.ajax({ url: "/api/marks/"+newStudent.StudentId, method: "GET" })
.then(function(result) {
  console.log(result)

  console.log(result[0].Student.firstname);
  $('#firstname').val(result[0].Student.firstname);
  $('#lastname').val(result[0].Student.lastname);

  $('#classlevel').val(result[0].Student.classLevel);

  $('#enrollyear').val(result[0].Student.enrollYear);
  $('#maths').val(result[0].maths);
  $('#english').val(result[0].english);
  $('#science').val(result[0].science);
  $('#social').val(result[0].social);

    $('#average').val(result[0].average);


});
  }


















