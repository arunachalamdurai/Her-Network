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

function showResister() {
    const regi = document.getElementById('regi');
    const log = document.getElementById('log');

        regi.style.display = 'block';        
        log.style.display = 'none';

}



document.getElementById("show-password").addEventListener("click", showPassword);

function showPassword() {
    const passField = document.getElementById("Upsw");
    
    // Toggle the type between "password" and "text"
    if (passField.type === "password") {
        passField.type = "name"; // Show password
    } else {
        passField.type = "password"; // Hide password
    }
}