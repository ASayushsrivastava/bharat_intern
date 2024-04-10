// Get all read-more buttons
const readMoreButtons = document.querySelectorAll('.read-more');

// Loop through each button
readMoreButtons.forEach(button => {
    // Add click event listener
    button.addEventListener('click', () => {
        // Get the project element
        const project = button.parentElement;
        
        // Toggle the visibility of the description
        const description = project.querySelector('.description');
        if (description.style.display === 'none') {
            description.style.display = 'block';
            button.textContent = 'Read Less';
        } else {
            description.style.display = 'none';
            button.textContent = 'Read More';
        }
    });
});
