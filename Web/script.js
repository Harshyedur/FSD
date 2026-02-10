document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // These IDs must match your EmailJS dashboard exactly
    const serviceID = 'service_yf94i3n';
    const templateID = 'template_8qsvx3r';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Your message has been sent successfully!');
            this.reset();
        }, (err) => {
            console.error('FAILED...', err);
            alert('Failed to send message. Error: ' + JSON.stringify(err));
        });
});