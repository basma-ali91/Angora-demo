window.addEventListener("scroll",function(){
let navbar= document.getElementById("nav");
let homeScroll =document.getElementById("home");
let homeHeight = homeScroll.scrollHeight;
let scrollNav=window.scrollY;



if(scrollNav >= homeHeight){
    // console.log("hi")
    // navbar.style.backgroundColor="#000";
    
    navbar.classList.add("navbar-light");
    navbar.classList.add("bg-dark")

}

else{
    navbar.classList.add("navbar-dark");
    navbar.classList.remove("navbar-light");
    navbar.classList.remove("bg-dark")

}

})