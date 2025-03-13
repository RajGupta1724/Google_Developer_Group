// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = form.querySelector("input[type='text']").value;
        const email = form.querySelector("input[type='email']").value;
        const message = form.querySelector("textarea").value;
        
        if (name && email && message) {
            alert(`Thank you, ${name}! We have received your message.`);
            form.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
