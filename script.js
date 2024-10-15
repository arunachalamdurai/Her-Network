function showSkillsInput() {
    const roleSelect = document.getElementById('role');
    const skillsContainer = document.getElementById('skillsContainer');

    // Show skills input if "Working Woman" is selected
    if (roleSelect.value === "Housewife") {
        skillsContainer.style.display = 'block';
    } else {
        skillsContainer.style.display = 'none';
    }
}