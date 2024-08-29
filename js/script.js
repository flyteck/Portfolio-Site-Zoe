//global variables

//main nav container
var navContainer = document.getElementById("myNavtoggle");

//toggles the menu open/close for mobile
function menuToggle() {
    var navContainer = document.getElementById("myNavtoggle");
    var navIcon = document.getElementById("navtoggle-icon");
    //get the container, and hamburger icon

    //if the menu is open, add open to the icon as well; else remove open from icon
    if (navContainer.className === "navtoggle") {
        navContainer.className += " responsive";
        navIcon.classList.add("open");
    } else {
        navContainer.className = "navtoggle";
        navIcon.classList.remove("open");
    }
}

//Minimizes the main menu, but stickies it in the corner, for desktop.
addEventListener("scroll", menuScroll);
  
function menuScroll() {
    if (window.scrollY !== 0) {
      navContainer.classList.add("scrolled");
    } 
    if (window.scrollY === 0) {
      navContainer.classList.remove("scrolled");
    }
  }


navContainer.addEventListener("mouseover", menuOpen);
navContainer.addEventListener("mouseleave", menuClose);



function menuOpen() {
  if (window.scrollY !== 0) {
    navContainer.classList.remove("scrolled");
  } else {
    return
  }

}

function menuClose() {
  if (window.scrollY !== 0) {
    navContainer.classList.add("scrolled"); 
  } else {
    return
  }
}