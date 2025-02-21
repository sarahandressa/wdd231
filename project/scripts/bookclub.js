



document.addEventListener("DOMContentLoaded", function() {

    const whatsappbutton = document.querySelector(".whatsapp-button");
    setInterval(() => {
        whatsappbutton.classList.toggle("pulse");
        }, 1500);
    
    const images = document.querySelectorAll(".book-club img, .whatsapp img");
    const options = { threshold: 0.2 };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        })
    }, options);

    
    images.forEach(img => fadeInObserver.observe(img));

    const whatsappDiv = document.querySelector(".whatsapp");

    const countdownContainer = document.createElement("div");
    countdownContainer.classList.add("countdown-container");

    const meetingInfo = document.createElement("p");
    meetingInfo.innerHTML = `<strong>📅 Next meeting:</strong> February 28th, at 8pm (Google Meets)`;

    const countdownElement = document.createElement("p");
    countdownElement.id = "countdown";

    countdownContainer.appendChild(meetingInfo);
    countdownContainer.appendChild(countdownElement);
    whatsappDiv.appendChild(countdownContainer);

    function updateCountdown() {
        const eventDate = new Date("February 28, 2025 20:00:00").getTime();
        const now = new Date().getTime();
        const difference = eventDate - now;

        if (difference <= 0){
            countdownElement.textContent = "🟢 The meeting is happening now!";
        }

        const days = Math.floor(difference / (1000 * 60 * 60 *24));
        const hours = Math.floor((difference % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        countdownElement.innerHTML = `<strong>⏳ Time left:</strong> ${days} days, ${hours} hours, ${minutes} minutes`;
    }

    updateCountdown();
    setInterval(updateCountdown, 60000);

});



