window.addEventListener("load", function() {
    // Retrieve menu optons
    const menuOptions = document.querySelectorAll('.menuOption')
    
    // Add event listeners to menu options
    menuOptions.forEach(function(button) {
        button.addEventListener('click', function() {

        // Reset background color of all buttons
        menuOptions.forEach(function(btn) {
            btn.style.backgroundColor = ''; // Reset to default
        });

        // Change background color of clicked button to 
        button.style.backgroundColor = "#ba8f6a";

        var option = (button.textContent);
        displayContent(option);
        });
    });
});

function displayContent(menuOption) {
    const menuOptionHeader = document.getElementById("selected_content");
    const text_placeholder = document.getElementById("optionPlaceholder");

    const bio = document.getElementById("short_bio_content");
    const contact_info = document.getElementById("contact_info_content");
    const skills_accomplishments = document.getElementById("skills_accomplishments_content");
    const job_experience = document.getElementById("job_exp_content");

    // hide all content initially
    bio.style.display = 'none';
    contact_info.style.display = 'none';
    skills_accomplishments.style.display = 'none';
    job_experience.style.display = 'none';

    if (menuOptionHeader && text_placeholder) {

        menuOptionHeader.textContent = menuOption;
        text_placeholder.textContent = 'Please click an option to learn more about me!'; 

        if (menuOptionHeader.textContent === 'About me'){
            text_placeholder.textContent = 'Nice to meet you!'; 
            bio.style.display = 'block';
        }
        if (menuOptionHeader.textContent === 'Where to Find Me'){
            text_placeholder.textContent = ''; 
            contact_info.style.display = 'block';
        }
        if (menuOptionHeader.textContent === 'Some cool things'){
            text_placeholder.textContent = ''; 
            skills_accomplishments.style.display = 'block';
        }
        if (menuOptionHeader.textContent === "What I've been up to"){
            text_placeholder.textContent = ''; 
            job_experience.style.display = 'block';
        }

    }

}