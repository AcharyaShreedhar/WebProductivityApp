/*  Author:Shree Dhar Acharya
    Date:2023/03/28
    Student ID:8899288
    Application:Carousel Application
*/
const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const data = { name, email, message };
  emailjs
    .send(
      "service_a701tti",
      "template_kiafs64",
      data,
      "user_71grJDF4CU0kQQdZsnnxM"
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thank you for contacting me!. I will get back to you soon");
        form.reset();
      },
      (error) => {
        console.error("FAILED...", error);
        alert("An error occurred. Please try again later.");
      }
    );
});
