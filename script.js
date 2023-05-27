$(".multiple-items").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3
  });
  

// when the DOM is ready
document.addEventListener("DOMContentLoaded", function() { 
  // get the the span element
  const yrSpan = document.querySelector('.hack-year');
  // get the current year
  const currentYr = new Date().getFullYear();
  // set the year span element's text to the current year
  yrSpan.textContent = currentYr;
  console.log(currentYr);
});



function saveData() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Check if the required fields are filled
  if (name && email && password) {
    var userData = {
      name: name,
      email: email,
      password: password
    };

    // Convert the user data to JSON string
    var userDataJson = JSON.stringify(userData);

    // Save the data to local storage
    localStorage.setItem('userData', userDataJson);

    // Display a success message
    alert('Registration successful!');
    window.location.href = './fish.html';
  } else {
    // Display an error message
    alert('Please fill all the required fields.');
  }
}


function signIn() {
  var email = document.getElementById('signin-email').value;
  var password = document.getElementById('signin-password').value;

  // Retrieve the user data from local storage
  var userDataJson = localStorage.getItem('userData');

  // Check if user data exists
  if (userDataJson) {
    // Parse the user data from JSON string to object
    var userData = JSON.parse(userDataJson);

    // Check if the entered credentials match the stored user data
    if (email === userData.email && password === userData.password) {
      // Display a success message
      alert('Login successful! Redirecting to homepage...');
      
      // Redirect to the homepage or desired page
      window.location.href = './fish.html';
    } else {
      // Display an error message
      alert('Invalid email or password.');
    }
  } else {
    // Display an error message
    alert('No user registered. Please sign up first.');
  }
}