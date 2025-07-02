const burgerMenu = document.querySelector(".burger-menu");
const navbar = document.querySelector("#navbar");

burgerMenu.onclick = () => {
  navbar.classList.toggle("active-navbar");
};
