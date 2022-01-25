let header = document.querySelector(".header");
let dropdown = document.querySelector("#hamburger");
let overlay = document.querySelector(".overlay");
let headerMenu = document.querySelector(".header-menu");
let body = document.querySelector("body");

// Apply fade in and fade out animations to two elements at a time
function applyFade(w, x, y){
    x.classList.add(w);
    y.classList.add(w);
}
function removeFade(w, x, y){
    x.classList.remove(w);
    y.classList.remove(w);
}

// Toggle button action when clicked
dropdown.addEventListener("click", function(){
    header.classList.toggle("open");

    if(header.classList.contains("open")){
        body.classList.add("no-scroll");
        removeFade("fade-out", headerMenu ,overlay);
        applyFade("fade-in", headerMenu, overlay);
    }
    else{
        body.classList.remove("no-scroll");
        removeFade("fade-in", headerMenu, overlay);
        applyFade("fade-out", headerMenu, overlay);
    }
});
