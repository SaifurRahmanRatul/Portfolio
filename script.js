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

// Array of skills (global scope)
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
    const skillList = document.getElementById("skillList");
    if (skillList) {
        skillList.innerHTML = ""; // Clear existing content
        skills.forEach((skill, index) => {
            const skillElement = document.createElement("div");
            skillElement.textContent = `Skill ${index + 1}: ${skill}`;
            skillElement.className = "card";
            skillList.appendChild(skillElement);
        });
    } else {
        console.error("SkillList element not found in DOM!");
    }
}

// Function to log skills from array
function logSkills() {
    skills.forEach((skill, index) => {
        console.log(`Skill ${index + 1}: ${skill}`);
    });
}

// Event listener for page load
window.addEventListener('load', () => {
    displaySkills();
    logSkills();
    alert("Welcome to my portfolio! I'm " + fullName + " with " + experienceYears + " years in tech.");
});

// Event listener for button click (toggle contact)
document.getElementById('toggleContact').addEventListener('click', () => {
    const contactDiv = document.getElementById('contactDetails');
    if (contactDiv) {
        contactDiv.style.display = contactDiv.style.display === 'none' ? 'block' : 'none';
    } else {
        console.error("ContactDetails element not found!");
    }
});

// Event listener for mouseover on header
document.getElementById('header').addEventListener('mouseover', () => {
    console.log("Mouseover detected");
    document.getElementById('header').style.setProperty('color', '#ff5733', 'important'); // Override CSS
});

// Event listener for mouseout on header
document.getElementById('header').addEventListener('mouseout', () => {
    console.log("Mouseout detected");
    document.getElementById('header').style.setProperty('color', '#fff', 'important');
});