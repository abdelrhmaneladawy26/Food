let menu = document.getElementById("menu-bars");
let navBar = document.querySelector(".navbar");
menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navBar.classList.toggle('active')
}