// Welcome message
console.log("Welcome to Md. Saifur Rahman's Portfolio!");

// Personal details
const fullName = "Md. Saifur Rahman";
let currentYear = 2025;
console.log("Portfolio Owner: " + fullName + ", Year: " + currentYear);

// Calculate experience
const startYear = 2023;
let experienceYears = currentYear - startYear;
console.log("Years of Experience: " + experienceYears);

// Conditional check
if (experienceYears > 1) {
    console.log(fullName + " is an Experienced Developer!");
} else {
    console.log(fullName + " is a Junior Developer!");
}

// Array of skills
const skills = ["HTML5", "CSS3", "JavaScript", "React"];

// Object for contact
const contactInfo = {
    phone: "01619009577",
    email: "saifurrahmanratul19@gmail.com",
    linkedin: "https://www.linkedin.com/in/md-saifur-rahman-ratul-29bb49295/",
    facebook: "https://www.facebook.com/saifurrahman.ratul.7/",
    github: "https://github.com/SaifurRahmanRatul"
};

// Function to log skills from array
function logSkills() {
    for (let i = 0; i < skills.length; i++) {
        console.log("Skill " + (i + 1) + ": " + skills[i]);
    }
}

// Event listener for page load (calls function)
window.addEventListener('load', () => {
    logSkills();
    alert("Welcome to my portfolio! I'm " + fullName + " with " + experienceYears + " years in tech.");
});

// Event listener for button click (toggle contact)
document.getElementById('toggleContact').addEventListener('click', () => {
    let contactDiv = document.getElementById('contactDetails');
    if (contactDiv.style.display === 'none') {
        contactDiv.style.display = 'block';
    } else {
        contactDiv.style.display = 'none';
    }
});