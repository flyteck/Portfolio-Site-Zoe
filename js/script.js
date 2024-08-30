//*********************** global variables

//main nav container
var navContainer = document.getElementById("myNavtoggle");
var navWrapper = document.getElementById("navigation");

//jumplink container
var jumpLink = document.getElementById("jump-menu");

//*********************** /global variables

//*********************** Mobile Menu Code

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

//*********************** /Mobile Menu Code

//*********************** Main Menu Code for Desktop

//** To-Do: Really, I should rewrite this to JUST add scrolled to #navigation, and update my CSS accordingly using #navigation and not .navtoggle for style.

//Minimizes the main menu, but stickies it in the corner, for desktop.
addEventListener("scroll", menuScroll);
  
function menuScroll() {
    //If the user is not at the top of the page
    if (window.scrollY !== 0) {
      navContainer.classList.add("scrolled");
      navWrapper.classList.add("scrolled");
      //set the position
      absolutePosition();
    } 
    //If the user is at the top of the page
    if (window.scrollY === 0) {
      navContainer.classList.remove("scrolled");
      navWrapper.classList.remove("scrolled");
      //after transitions are done, set the position
      setTimeout(absolutePosition, 200);
      
      //and if there's jumplinks, temporarily minimize them for a smooth transition
      if (jumpLink !== null) {
        jumpLink.classList.add("minimized");
        setTimeout(remove, 300);
      }
    }
  }

//Reopens and closes the menu on hover, listeners for hover, and click for touchscreens
navContainer.addEventListener("mouseenter", menuOpen);
navContainer.addEventListener("click", menuOpen);
navContainer.addEventListener("mouseleave", menuClose);

function menuOpen() {
  //If the user is not at the top of the page (since we only want this to run if the menu is currently minimized)
  if (window.scrollY !== 0) {
    navContainer.classList.remove("scrolled");
    navWrapper.classList.remove("scrolled");
    //after transitions are done, set the position
    setTimeout(absolutePosition, 200);
    
    //and if there's jumplinks, minimize them to smooth transition
    if (jumpLink !== null) {
      jumpLink.classList.add("minimized");
      setTimeout(remove, 300);
    }
  } else {
    return
  }
}

function menuClose() {
  //If the user is not at the top of the page
  if (window.scrollY !== 0) {
    navContainer.classList.add("scrolled"); 
    navWrapper.classList.add("scrolled");
    //set the position
    absolutePosition();
  } else {
    return
  }
}

//For the hover animation to be clean, the positioning needs to be done *after* the animation, so it's done here.
//This class also prevents clicks inside the menu while opening on touchscreens.
function absolutePosition() {
  if (navContainer.classList.contains("scrolled")) {
    navContainer.classList.add("absolute");
  } else {
    navContainer.classList.remove("absolute");
  }
}

//remove class on jumplink to finish transition
function remove() {
  jumpLink.classList.remove("minimized")
}

//*********************** /Main Menu Code for Desktop
