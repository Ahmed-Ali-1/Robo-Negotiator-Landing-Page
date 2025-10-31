// let menuList = document.getElementById("menuList")
// menuList.style.maxHeight = "0px"

// function toggleMenu() {
//     if (menuList.style.maxHeight == "0px") {
//         menuList.style.maxHeight = "300px"
//     } else {
//         menuList.style.maxHeight = "0px"
//     }
// }

let menuList = document.getElementById("menuList");
let menuIcon = document.getElementById("menuIcon");
let icon = menuIcon.querySelector("i");

menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    menuList.style.maxHeight = "0px";
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
}