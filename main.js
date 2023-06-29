// 
window.addEventListener("scroll", function(){
    var navbar = document.querySelector("nav");
    var scrollY = window.scrollY;

    if(scrollY >= 30){
        navbar.classList.add("fixed");
        navbar.style.transition = "0.5s ease-out";
    } else{
        navbar.classList.remove("fixed");
        navbar.style.transition = "0.5s ease-out";
    }
});


// Toggle Light and Dark Mode
function changeMode() {
    var body = document.querySelector(".main_section");
    var toggleIcon = document.querySelector("#toggle-icon");

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        toggleIcon.style.backgroundImage = "url('./img/mode/moon.png')";
        toggleIcon.style.transition = "0.3s ease-out";
    } else {
        toggleIcon.style.backgroundImage = "url('./img/mode/sun.png')";
        toggleIcon.style.transition = "0.3s ease-out";
    }
}
  


// END