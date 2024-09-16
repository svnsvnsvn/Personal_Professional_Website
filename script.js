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

        // Change background color of clicked button to green
        button.style.backgroundColor = 'rgb(106, 79, 106)';


            var option = (button.textContent);
            showContent(option);
        });
    })
});