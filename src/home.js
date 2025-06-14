// Menu bar 
 function changeIcon() {
        const menubar = document.getElementById('menubar');
        const icon = menubar.querySelector('i');
        const navbar = document.getElementById('navbar');

        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
        navbar.classList.toggle('hidden');
    }
    document.querySelectorAll('#navbar a').forEach(link => {
        link.addEventListener('click', () => {
            const menubar = document.getElementById('menubar');
            const icon = menubar.querySelector('i');
            const navbar = document.getElementById('navbar');

            if (!navbar.classList.contains('hidden')) {
                navbar.classList.add('hidden');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });

// Redirect button
document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("start-btn");
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
    

    // Init EmailJS
    emailjs.init("E2tR2S2lZBlXPkzOm");

    // Contact form submit
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            emailjs.sendForm('service_0ighv7r', 'template_480rfib', this)
                .then(function (response) {
                    alert('Email sent successfully!');
                    console.log('SUCCESS!', response.status, response.text);
                }, function (error) {
                    alert('FAILED to send email.');
                    console.log('FAILED...', error);
                });
        });
    }
});

