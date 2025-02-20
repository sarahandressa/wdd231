document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("active");
          navMenu.classList.toggle("active");
      });

      document.querySelectorAll(".nav-menu a").forEach(link => {
          link.addEventListener("click", () => {
              hamburger.classList.remove("active");
              navMenu.classList.remove("active");
          });
      });
  }
  const currentYearSpan = document.getElementById("currentyear");
  if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
  }

  
  const lastModifiedSpan = document.getElementById("lastModified");
  if (lastModifiedSpan) {
      const lastModifiedDate = new Date(document.lastModified);
      lastModifiedSpan.textContent = `Last modified: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
  }

  
  const greetingDiv = document.getElementById("greeting");
  if (greetingDiv) {
      const hour = new Date().getHours();
      let greetingMessage = "Good evening! Unwind with a captivating story.";
      if (hour < 12) {
          greetingMessage = "Good morning! Start your day with a good book.";
      } else if (hour < 18) {
          greetingMessage = "Good afternoon! A perfect time to read.";
      }
      greetingDiv.textContent = greetingMessage;
  }

  
  const form = document.querySelector("form");
  if (form) {
      form.addEventListener("submit", (event) => {
          const nameInput = document.getElementById("name");
          const emailInput = document.getElementById("email");

          if (!nameInput.value.trim() || !emailInput.value.trim()) {
              event.preventDefault();
              alert("Please fill in both your name and email to sign up for the newsletter.");
          } else {
              alert("Thank you for signing up! Check your email for the latest updates.");
          }
      });
  }

  const messageElement = document.getElementById("visit-message");
  if (messageElement) {
      const lastVisit = localStorage.getItem("lastVisit");
      const currentDate = Date.now();

      function getDaysBetween(date1, date2) {
          return Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
      }

      function getVisitMessage(lastVisitDate) {
          if (!lastVisitDate) {
              return "Welcome! Let us know if you have any questions.";
          }
          const daysBetween = getDaysBetween(Number(lastVisitDate), currentDate);
          if (daysBetween < 1) {
              return "Back so soon! Awesome!";
          } else if (daysBetween === 1) {
              return "You last visited 1 day ago.";
          } else {
              return `You last visited ${daysBetween} days ago.`;
          }
      }

      messageElement.textContent = getVisitMessage(lastVisit);
      localStorage.setItem("lastVisit", currentDate);
  }
});

