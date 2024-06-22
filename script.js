/* ============== toggle icon navbar =================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

/* ============== Read More Text =================*/
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');

    readMoreBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const container = this.closest('.read-more-container');
            const moreText = container.querySelector('.read-more-text');

            // Toggle the display of the hidden text
            if (moreText.style.display === 'none' || moreText.style.display === '') {
                moreText.style.display = 'block'; // Show the hidden text
                this.textContent = 'Read Less';
            } else {
                moreText.style.display = 'none'; // Hide the hidden text
                this.textContent = 'Read More';
            }
        });
    });
});


/* ============== Scroll section active Link =================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* ============== Strickly navbar =================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* ============== remove toggle icon and navbar when click navbar link(scroll) =================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active')
};

/* ============== Scroll reveal =================*/
ScrollReveal({ 
    //reset: true ,
    distance:'80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, services-container, project-box, contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .skills-content .left, .contact-content .left', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content,.skills-content .right,.contact-content .right', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .experience-container,.skills-content .right,.contact-content .right', { origin: 'left' });

/* ============== Typed js =================*/
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','UI/UX Developer','MERN Stack Developer'],
    typeSpeed:100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* ============== Formjs =================*/
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Perform form validation if needed

        // Send the form data to Formspree
        fetch(this.action, {
            method: this.method,
            body: new FormData(this),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Show success message or redirect to a thank you page
                alert("Thank you for your message. I'll get back to you soon!");
                this.reset(); // Reset the form fields
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert("Oops! There was a problem submitting your form");
                    }
                })
            }
        }).catch(error => {
            alert("Oops! There was a problem submitting your form");
        });
    });
