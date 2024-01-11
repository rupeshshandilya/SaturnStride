// let subscribe = document.getElementById("subscribe_text").value;

function sendEmail(event){
  event.preventDefault(); 
  console.log("clicked");
  const emailId = document.getElementById("email").value;
  console.log(`email id is ${emailId}`);
  Email.send({
SecureToken : "65c93064-4950-43e9-b620-5a66bf02c8c9",
To : emailId,
From : "connect@trivolo.in",
Subject : "This is the subject",
Body : "And this is the body"
}).then(
  document.getElementById("subscribe_text").innerHTML = "Subscribed",
  document.getElementById("subscribe_button").innerHTML = "Subscribed"
)
}