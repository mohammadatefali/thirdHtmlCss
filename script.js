const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));

    this.classList.add("active");
  });
});

let toggle3p = document.querySelector("header nav .toggle-menu");
let toggle = document.querySelector("header nav ul");
console.log(toggle);
toggle3p.onclick = function () {
  toggle.style.display = toggle.style.display === "flex" ? "none" : "flex";
  toggle.style.flexDirection =
    toggle.style.flexDirection === "column" ? "row" : "column";
  toggle.style.position =
    toggle.style.position === "absolute" ? "initial" : "absolute";
  toggle.style.top = toggle.style.top === "100%" ? "initial" : "100%";
  toggle.style.left = toggle.style.left === "0" ? "initial" : "0";
  toggle.style.width = toggle.style.width === "100%" ? "initial" : "100%";
  toggle.style.textAlign = "center";
};
// toggle3p.onmouseover=function(){
//     toggle3p.style.cursor="pointer";
//     toggle.style.display="flex";
//     toggle.style.flexDirection="column";
//     toggle.style.position="absolute";
//     toggle.style.top="100%";
//     toggle.style.left="0";
//     toggle.style.width="100%";
//     toggle.style.textAlign="center";
// }
////////////////////in landing////////////////
let loops = document.querySelectorAll(".landing ul li");
loops.forEach(function (loop) {
  loop.addEventListener("click", function () {
    loops.forEach((loop2) => {
      loop2.classList.remove("active");
    });
    loop.classList.add("active");
  });
});
///////////////////////in portfolio//////////////////////////
let circles = document.querySelectorAll(".portfolio ul li");
circles.forEach((circle) => {
  circle.addEventListener("click", function () {
    circles.forEach((circle) => {
      circle.classList.remove("active");
    });
    circle.classList.add("active");
  });
});
//////////////////////in our-skills////////////////////////
let elements = document.querySelectorAll(".our-skills .bullets li");
elements.forEach((element) => {
  element.addEventListener("click", function () {
    elements.forEach((element) => {
      element.classList.remove("active");
    });
    element.classList.add("active");
  });
});
//////////////////////////////////////
