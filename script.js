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

// Function to display skills
function displaySkills() {
    const skills = ["HTML5", "CSS3", "JavaScript", "React"];
    const skillList = document.getElementById("skillList");
    for (let i = 0; i < skills.length; i++) {
        const skillElement = document.createElement("div");
        skillElement.textContent = "Skill " + (i + 1) + ": " + skills[i];
        skillElement.className = "card";
        skillList.appendChild(skillElement);
    }
}

// Call the function on page load
window.addEventListener('load', () => {
    displaySkills();
    alert("Welcome to my portfolio! I'm " + fullName + " with " + experienceYears + " years in tech.");
});