const preloader = document.getElementById("preloader");

window.addEventListener("load", () => {
    preloader.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
});
