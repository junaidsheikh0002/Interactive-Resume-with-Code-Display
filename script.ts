// script.ts

// Get the toggle button and skills section, ensuring TypeScript knows their types
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement | null;
const skillsSection = document.getElementById('skills') as HTMLElement | null;

// Check if elements exist before adding event listeners
if (toggleSkillsBtn && skillsSection) {
    toggleSkillsBtn.addEventListener('click', () => {
        // Toggle visibility of the skills section
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    });
} else {
    console.error("Toggle button or skills section not found.");
}
