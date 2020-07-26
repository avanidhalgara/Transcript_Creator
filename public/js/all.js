$(document).ready(function(){



    $.get('/api/student').then(response => {
      console.log(response)
      for (let i = 0; i < response.length; i++) {
        const { firstName, lastName, parentName,emailaddress,classLevel,enrollStatus,enrollYear,phoneNumber,address } = response[i];
        // const bookDetailLink = $(`<a href=/bookDetail/${id}>`) 
        const card = $('<div class="card">').addClass('card');
        const cardBody = $('<div>').addClass('card-body');
        // const bookTitle = $('<h4 class="card-title text-center">').text(title);
        const student = $('<h4 class="card-title text-center">').text(`Student: ${firstName} ${lastName} ${parentName} ${emailaddress} ${classLevel} ${enrollStatus} ${enrollYear} ${phoneNumber} ${address} `);
  
        // bookTitle.append(student)
        // bookDetailLink.append(bookCover)
        cardBody.append(student)
        card.append(cardBody);
        $('#student-view').append(card)
      } 
    })
  })

    // // Now add all of our character data to the well we just placed on the page

    // // make the name an h2,
    // $("#first-name" + i).append("<h1>First Name:" + data[i].firstname + "</h1>");
    // // the role an h3,
    // $("#last-name" + i).append("<h1>Last Name: " + data[i].lastname + "</h1>");

    // $("#parent-name" + i).append("<h1>Parent Name: " + data[i].parentName + "</h1>");

    
    // $("#character-well-" + i).append("<h1>Email-Address: " + data[i].emailaddress + "</h1>");
    // // and the forcepoints an h3.
    // $("#character-well-" + i).append("<h1>Class-Level: " + data[i].classLevel + "</h1>");

    // $("#character-well-" + i).append("<h1>Enroll-Status: " + data[i].enrollStatus + "</h1>");

    // $("#character-well-" + i).append("<h1>Enroll-Year: " + data[i].enrollYear + "</h1>");

    // $("#character-well-" + i).append("<h1>Phone-Number: " + data[i].phoneNumber + "</h1>");

    // $("#character-well-" + i).append("<h1>Address: " + data[i].address + "</h1>");

    