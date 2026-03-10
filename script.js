(function() {
    emailjs.init("a0huUIkxjcm77ZbA3");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {

    event.preventDefault();

    emailjs.sendForm(
        "service_5z62wte",
        "template_hnu9luv",
        this
    )

    .then(function() {
            document.getElementById("status").innerHTML = "Message Sent Successfully!";
        },
        function(error) {
            document.getElementById("status").innerHTML = "Failed to Send Message";
        });

});