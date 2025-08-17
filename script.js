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

// Conditional check with debug
console.log("Debug: Before if, experienceYears = " + experienceYears);
if (experienceYears > 1) {
    console.log("Condition true, experienceYears = " + experienceYears);
    console.log(fullName + " is an Experienced Developer!");
} else {
    console.log("Condition false, experienceYears = " + experienceYears);
    console.log(fullName + " is a Junior Developer!");
}

// Loop through skills with debug
const skills = ["HTML5", "CSS3", "JavaScript", "React"];
console.log("Debug: Skills array = " + skills);
console.log("Debug: Before loop, skills length = " + skills.length);
for (let i = 0; i < skills.length; i++) {
    console.log("Debug: Iteration " + i + ", skills[i] = " + skills[i]);
    console.log("Skill " + (i + 1) + ": " + skills[i]);
}
console.log("Debug: After loop");

// Show welcome alert on page load
window.addEventListener('load', () => {
    alert("Welcome to my portfolio! I'm " + fullName + " with " + experienceYears + " years in tech.");
});