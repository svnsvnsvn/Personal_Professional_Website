window.addEventListener("load", function () {
    // Retrieve menu optons
    const menuOptions = document.querySelectorAll('.menuOption')

    // Add event listeners to menu options
    menuOptions.forEach(function (button) {
        button.addEventListener('click', function () {

            // Reset background color of all buttons
            menuOptions.forEach(function (btn) {
                btn.style.backgroundColor = ''; // Reset to default
            });

            // Change background color of clicked button to 
            button.style.backgroundColor = "#ba8f6a";

            var option = (button.textContent);
            displayContent(option);
        });
    });

    const submitButton = document.getElementById('submitButton');
    const text_field = document.getElementById('connectWithMe');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Get the value entered in the text field
        const userInput = text_field.value;

        // Check if the user has entered something
        if (userInput.trim() !== "") {
            // Change the button and display a thank you message
            submitButton.style.backgroundColor = '#A9DFF7';
            submitButton.textContent = "Submitted!";
            text_field.value = "Thank you for reaching out. We'll be in touch soon.";
        } else {
            // If nothing was entered, prompt the user
            alert("Please enter a message before submitting.");
        }
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

        if (menuOptionHeader.textContent === 'About Me') {
            text_placeholder.textContent = 'Nice to meet you!';
            bio.style.display = 'block';
        }
        if (menuOptionHeader.textContent === 'Where to Find Me') {
            text_placeholder.textContent = '';
            contact_info.style.display = 'block';
        }
        if (menuOptionHeader.textContent === 'Some Cool Things') {
            text_placeholder.textContent = '';
            skills_accomplishments.style.display = 'block';
        }
        if (menuOptionHeader.textContent === "What I've Been Up To") {
            text_placeholder.textContent = '';
            job_experience.style.display = 'block';
        }
    }
}