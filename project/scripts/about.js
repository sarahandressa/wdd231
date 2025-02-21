

document.addEventListener("DOMContentLoaded", function (){

    const images = document.querySelectorAll(".hero img, .history img, .journey img");
    const fadeOptions = { threshold: 0.2 };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, fadeOptions);

    images.forEach(img => fadeObserver.observe(img));

    const titles = document.querySelectorAll("h2");
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in");
            }
        });
    }, {threshold: 0.3});

    titles.forEach(title => titleObserver.observe(title));

});
  