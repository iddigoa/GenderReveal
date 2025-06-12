// Gender Reveal Invitation Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initCountdown();
    initRSVPForm();
    initPredictionButtons();
    initScrollAnimations();
    initSmoothScrolling();
});

// Smooth scrolling functionality
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function initSmoothScrolling() {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Countdown Timer
function initCountdown() {
    const eventDate = new Date('July 15, 2025 14:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance < 0) {
            // Event has passed
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Add animation class for number changes
        const elements = ['days', 'hours', 'minutes', 'seconds'];
        const values = [days, hours, minutes, seconds];
        
        elements.forEach((elementId, index) => {
            const element = document.getElementById(elementId);
            const newValue = values[index].toString().padStart(2, '0');
            
            if (element.textContent !== newValue) {
                element.style.transform = 'scale(1.1)';
                element.style.transition = 'transform 0.3s ease';
                
                setTimeout(() => {
                    element.textContent = newValue;
                    element.style.transform = 'scale(1)';
                }, 150);
            }
        });
    }
    
    // Update countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// RSVP Form handling
function initRSVPForm() {
    const form = document.getElementById('rsvpForm');
    const successMessage = document.getElementById('rsvpSuccess');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            guestName: document.getElementById('guestName').value.trim(),
            attendees: document.getElementById('attendees').value,
            email: document.getElementById('email').value.trim(),
            prediction: getSelectedPrediction(),
            message: document.getElementById('message').value.trim()
        };
        
        // Validate form
        if (!validateForm(formData)) {
            return;
        }
        
        // Simulate form submission
        submitRSVP(formData);
    });
}

function validateForm(data) {
    let isValid = true;
    const errors = [];
    
    // Reset previous error states
    document.querySelectorAll('.form-control').forEach(input => {
        input.classList.remove('error');
    });
    
    // Validate required fields
    if (!data.guestName) {
        errors.push('Guest name is required');
        document.getElementById('guestName').classList.add('error');
        isValid = false;
    }
    
    if (!data.attendees) {
        errors.push('Number of attendees is required');
        document.getElementById('attendees').classList.add('error');
        isValid = false;
    }
    
    if (!data.email) {
        errors.push('Email address is required');
        document.getElementById('email').classList.add('error');
        isValid = false;
    } else if (!isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
        document.getElementById('email').classList.add('error');
        isValid = false;
    }
    
    if (!data.prediction) {
        errors.push('Please make your prediction: Boy or Girl?');
        isValid = false;
    }
    
    // Display errors if any
    if (!isValid) {
        showFormErrors(errors);
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormErrors(errors) {
    // Remove existing error messages
    const existingErrors = document.querySelectorAll('.form-error');
    existingErrors.forEach(error => error.remove());
    
    // Create and show error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.style.cssText = `
        background-color: rgba(192, 21, 47, 0.1);
        border: 1px solid rgba(192, 21, 47, 0.3);
        color: #C0152F;
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 14px;
    `;
    
    errorDiv.innerHTML = `
        <strong>Please correct the following errors:</strong>
        <ul style="margin: 8px 0 0 0; padding-left: 20px;">
            ${errors.map(error => `<li>${error}</li>`).join('')}
        </ul>
    `;
    
    const form = document.getElementById('rsvpForm');
    form.insertBefore(errorDiv, form.firstChild);
    
    // Scroll to error message
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function submitRSVP(data) {
    const form = document.getElementById('rsvpForm');
    const successMessage = document.getElementById('rsvpSuccess');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Show loading state
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending RSVP...';
    submitButton.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Hide form and show success message
        form.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Add fade-in animation to success message
        successMessage.style.opacity = '0';
        successMessage.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            successMessage.style.transition = 'all 0.5s ease';
            successMessage.style.opacity = '1';
            successMessage.style.transform = 'translateY(0)';
        }, 100);
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Log form data (in real app, this would be sent to server)
        console.log('RSVP Submitted:', data);
        
        // Reset button state (in case user wants to submit another RSVP)
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
        
    }, 1500);
}

// Prediction buttons functionality
function initPredictionButtons() {
    const predictionButtons = document.querySelectorAll('.prediction-btn');
    
    predictionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            predictionButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Add a little animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

function getSelectedPrediction() {
    const activeButton = document.querySelector('.prediction-btn.active');
    return activeButton ? activeButton.dataset.prediction : null;
}

// Scroll animations
function initScrollAnimations() {
    // Add fade-in class to elements that should animate
    const animateElements = document.querySelectorAll('.section-title, .event-detail, .gallery__item, .announcement__content, .countdown__timer');
    
    animateElements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // Create intersection observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}

// Add some interactive enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Add click effect to hero CTA button
    const ctaButton = document.querySelector('.hero__cta');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .form-control.error {
            border-color: #C0152F;
            box-shadow: 0 0 0 3px rgba(192, 21, 47, 0.1);
        }
        
        .prediction-btn {
            position: relative;
            overflow: hidden;
        }
        
        .prediction-btn::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.3s, height 0.3s;
        }
        
        .prediction-btn:active::after {
            width: 300px;
            height: 300px;
        }
    `;
    document.head.appendChild(style);
});

// Add some fun Easter eggs
let clickCount = 0;
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('decoration')) {
        clickCount++;
        
        // Add a little bounce animation
        e.target.style.animation = 'none';
        setTimeout(() => {
            e.target.style.animation = '';
        }, 10);
        
        // After 5 clicks on decorations, show a fun message
        if (clickCount === 5) {
            const message = document.createElement('div');
            message.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #F4C2C2, #B8D4E3);
                color: white;
                padding: 16px 20px;
                border-radius: 25px;
                font-family: 'Dancing Script', cursive;
                font-size: 18px;
                z-index: 1000;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                animation: slideInRight 0.5s ease-out;
            `;
            message.textContent = "You found the hidden decorations! 🎉";
            
            document.body.appendChild(message);
            
            setTimeout(() => {
                message.remove();
            }, 3000);
            
            clickCount = 0; // Reset counter
        }
    }
});

// Add slide-in animation for the Easter egg
const slideInStyle = document.createElement('style');
slideInStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(slideInSt
