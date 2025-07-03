let isClicking = false;
let timeoutId = null; // To store the timeout ID

// Function to detect which section is in view
function updateActiveLink() {
    if (isClicking) {
        return; // Skip the logic if we're manually clicking a link
    }

    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.mid_navbar .navbar-nav .nav-item');

    let currentSection = "";

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Check if the section is in the middle of the viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id;
        }
    });

    // Remove active class from all nav items
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to the nav item corresponding to the current section
    if (currentSection) {
        const activeItem = document.querySelector('.mid_navbar .navbar-nav .nav-item a[href="#' + currentSection + '"]').parentElement;
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }
}

// Listen to scroll events to detect the active section
window.addEventListener('scroll', updateActiveLink);

// Run on page load to set initial active link
updateActiveLink();

// Handle click events on navbar links
const navLinks = document.querySelectorAll('.mid_navbar .navbar-nav .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Disable the scroll-based active link logic
        isClicking = true;

        // Remove active class from all nav items
        document.querySelectorAll('.mid_navbar .navbar-nav .nav-item').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to the clicked nav item
        this.parentElement.classList.add('active');

        // Clear any previous timeout to prevent multiple timeouts overlapping
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Prevent the scroll event from causing issues immediately after click
        timeoutId = setTimeout(() => {
            isClicking = false;
        }, 800); // Short delay to make sure the click action completes before enabling scroll logic
    });
});
