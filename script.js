// When the user clicks the Save button on the form...
document.getElementById("userform").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page from reloading

    // Get what the user typed in the name and age fields
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    // Store the name and age in an object
    let user = {
        name: name,
        age: age
    };

    // Save the user data to the browser's memory
    localStorage.setItem("user", JSON.stringify(user));

    // Show the user's personalized content
    displayUser();
});

// This function shows the user's greeting, age, and message
function displayUser() {
    // Get the saved user data from the browser's memory
    let savedUser = JSON.parse(localStorage.getItem("user"));

    // Stop if no data was saved
    if (!savedUser) return;

    // Show a greeting with the user's name
    document.getElementById("greeting").innerHTML =
        `<h2>Hello, ${savedUser.name}</h2>`;

    // Turn age into months and display it
    let months = calculateMonths(savedUser.age);
    document.getElementById("agemonths").innerHTML =
        `<p>Your age in months is: ${months}</p>`;

    // Create variables for the message
    let message;
    let ageGroup;

    // Choose a message based on the user's age
    if (savedUser.age < 12) {
        message = "You're a child! Enjoy your youth and learn every day.";
        ageGroup = "child";
    } else if (savedUser.age < 18) {
        message = "You're a teenager! Stay curious and chase your dreams, don't forget to read.";
        ageGroup = "teen";
    } else if (savedUser.age < 60) {
        message = "You're an adult! Keep achieving and inspiring others.";
        ageGroup = "adult";
    } else {
        message = "You're a senior! Your wisdom is a treasure.";
        ageGroup = "senior";
    }

    // Show the message
    document.getElementById("accessMessage").innerHTML =
        `<p>${message}</p>`;

    // Create the motivational quote
    let quoteText = "Success is not final, failure is not fatal: It is the courage to continue that counts.";
    let quotesHTML = "";

    // Repeat the quote 5 times
    for (let i = 0; i < 5; i++) {
        quotesHTML += `<p>${quoteText}</p>`;
    }

    // Show the quotes on the page
    document.getElementById("quotes").innerHTML = quotesHTML;
}

// Function to convert years to months
function calculateMonths(age) {
    return age * 12; 
}

// Show user data when the page loads
window.onload = displayUser;
// Without this line, the saved data would only show up after the user fills out the form
    
