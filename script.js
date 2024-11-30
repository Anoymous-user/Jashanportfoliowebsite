document.addEventListener('DOMContentLoaded', () => {
    // Add the "open" class to the body after a delay
    setTimeout(() => {
        document.body.classList.add('open');
        // Display the navbar after the curtain opens
        setTimeout(() => {
            document.querySelector('nav').classList.remove('navbar-hidden');
        }, 1000); // Adjust this delay based on your curtain animation timing
    }, 1000); // Delay before curtains open
});