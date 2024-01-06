// Toggle (lose or appear) active class
const navbarNav = document.querySelector(".navbar-nav");

// when click hamburgermenu
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
