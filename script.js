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

// Object for education
const education = {
    degree: "BSc in Computer Science",
    institution: "Daffodil International University",
    year: 2025
};

// Log the education object
console.log("Education Details: ", education);

// Function to display skills
function displaySkills() {
    const skills = ["HTML5", "CSS3", "JavaScript", "React"]; // Ensure this is here
    const skillList = document.getElementById("skillList");
    if (skillList) { // Debug: Check if element exists
        skillList.innerHTML = ""; // Clear existing content
        for (let i = 0; i < skills.length; i++) {
            const skillElement = document.createElement("div");
            skillElement.textContent = "Skill " + (i + 1) + ": " + skills[i];
            skillElement.className = "card";
            skillList.appendChild(skillElement);
        }
    } else {
        console.error("SkillList element not found!");
    }
}

// Function to log skills from array
function logSkills() {
    for (let i = 0; i < skills.length; i++) {
        console.log("Skill " + (i + 1) + ": " + skills[i]);
    }
}

// Event listener for page load
window.addEventListener('load', () => {
    displaySkills(); // Ensure this calls the function
    logSkills();    // Keep logging for console
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

// Event listener for mouseover on header
document.getElementById('header').addEventListener('mouseover', () => {
    console.log("Mouseover detected");
    document.getElementById('header').style.color = '#ff5733';
});

// Event listener for mouseout on header
document.getElementById('header').addEventListener('mouseout', () => {
    console.log("Mouseout detected");
    document.getElementById('header').style.color = '#fff';
});