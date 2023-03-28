let mobileIcons = document.querySelector(".mobileIcons");
let navbar = document.querySelector(".navbar");

const toggleNavabr = () => {
  navbar.classList.toggle("active");
};

mobileIcons.addEventListener("click", () => {
  toggleNavabr();
});
