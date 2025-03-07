
document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});


document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});