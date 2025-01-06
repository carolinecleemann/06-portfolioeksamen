//burger menu og links hentet// 
const burger = document.querySelector(".burger")
const menulinks = document.querySelector (".menulinks")

//når man klikker på burgermenuen// 
burger.addEventListener("click", () => {
    burger.classList.toggle("active"); 
    menulinks.classList.toggle("active");
}
)
