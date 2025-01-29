
document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});