document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;


document.addEventListener("DOMContentLoaded", () => {
    const hamButton = document.querySelector("#menu");
    const navigation = document.querySelector("nav");
    hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.classList.toggle("open");
    });
})