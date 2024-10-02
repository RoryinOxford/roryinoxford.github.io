// script.js
document.getElementById('privateform').addEventListener('submit', function(event) {
    event.preventDefault();
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const paxnumber = document.getElementById('pax-number').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const privateunicity = document.getElementById('private-uni-city').value;
    const harrypotter = document.getElementById('harry-potter').value;
    const lewistolkien = document.getElementById('lewis-tolkien').value;
    const christianhistory = document.getElementById('christian-history').value;
    const prospectivestudent = document.getElementById('prospective-student').value;
    const custom = document.getElementById('custom').value;
    const extra = document.getElementById('extra').value;
  
    // Use SMTPJS to send email
    Email.send({
        Host: "smtp.gmail.com",
        Username: "mittoadoxoniam@gmail.com",
        Password: "RFWrN.D.>7vw2~)",
        To: "roryinoxford@gmail.com",
        From: "mittoadoxoniam@gmail.com",
        Subject: `New Private Tour Enquiry ${name}`,
        Body: `Name: ${name}<br>Email: ${email}<br>Number of people: ${paxnumber}<br>Date: ${date}<br>Time: ${time}<br>Selected: ${privateunicity}<br>${harrypotter}<br>${lewistolkien}<br>${christianhistory}<br>${prospectivestudent}<br>${custom}<br><br>Additional Information: ${extra}`
    }).then(response => {
        if (response === 'OK') {
            alert('Your message has been sent successfully.');
        } else {
            alert('There was an error sending your message.');
        }
    })
})
