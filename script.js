"use strict";
// script.ts
// Get the toggle button and skills section, ensuring TypeScript knows their types
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
const skillsSection = document.getElementById('skills');
// Check if elements exist before adding event listeners
if (toggleSkillsBtn && skillsSection) {
    toggleSkillsBtn.addEventListener('click', () => {
        // Toggle visibility of the skills section
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
}
else {
    console.error("Toggle button or skills section not found.");
}
