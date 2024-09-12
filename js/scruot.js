const menuIcon = document.querySelector(".menu-icon");
const menuClose = document.querySelector(".menu-close-icon");
const showMenu = document.querySelector(".mobile-menu-bg");


menuIcon.addEventListener("click" , () =>{
    showMenu.classList.remove("active-menu-close");
    menuClose.classList.remove("menu-close-icon-rotate");
    showMenu.classList.add("active-menu");
    showMenu.style.display = "block";
})

menuClose.addEventListener("click" , () => {
    showMenu.classList.remove("active-menu");
    showMenu.classList.add("active-menu-close");
    menuClose.classList.add("menu-close-icon-rotate")
})

const menu = document.querySelector(".head-bg");
window.addEventListener("scroll" , () => {
    if(window.pageYOffset > 55){
        menu.style.position = "fixed";
    }else{
        menu.style.position = "static";
    }
})


const scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll" , () =>{
    if(window.pageYOffset > 300){
        scrollToTop.style.display = "block";
    }else{
        scrollToTop.style.display = "none";
    }
})
scrollToTop.addEventListener("click" , () => {
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
})


