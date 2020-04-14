const header = document.querySelector("header");

window.onscroll = function () {
    var top = window.scrollY;

    if (top > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
        header.classList.add("animation");
    }
};
