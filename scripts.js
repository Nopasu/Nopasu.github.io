/**
 * Class President Campaign Website
 * JavaScript functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Variables to store DOM elements
    const navLinks = document.querySelectorAll('.nav-links a');
    
    /**
     * Smooth scrolling for navigation links
     */
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section id from the href attribute
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });
    
    /**
     * Scroll event listener for header styling
     */
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Update copyright year to current year
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});