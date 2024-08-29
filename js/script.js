//*********************** global variables

//main nav container
var navContainer = document.getElementById("myNavtoggle");

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

//Minimizes the main menu, but stickies it in the corner, for desktop.
addEventListener("scroll", menuScroll);
  
function menuScroll() {
    if (window.scrollY !== 0) {
      navContainer.classList.add("scrolled");
      //set the position
      absolutePosition();
    } 
    if (window.scrollY === 0) {
      navContainer.classList.remove("scrolled");
      
      //after transitions are done, set the position
      setTimeout(absolutePosition, 200);
      
      //and if there's jumplinks, minimize them to smooth transition
      if (jumpLink !== null) {
        jumpLink.classList.add("minimized");
        setTimeout(remove, 300);
      }
    }
  }

//Reopens and closes the menu on hover
navContainer.addEventListener("mouseenter", menuOpen);
navContainer.addEventListener("mouseleave", menuClose);

function menuOpen() {
  if (window.scrollY !== 0) {
    navContainer.classList.remove("scrolled");
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
  if (window.scrollY !== 0) {
    navContainer.classList.add("scrolled"); 
    //set the position
    absolutePosition();
  } else {
    return
  }
}

//For the hover animation to be clean, the positioning needs to be done *after* the animation, so it's done here
function absolutePosition() {
  if (navContainer.classList.contains("scrolled")) {
    navContainer.style.position = "absolute";
  } else {
    navContainer.style.position = "relative";
  }
}

//remove class on jumplink to finish transition
function remove() {
  jumpLink.classList.remove("minimized")
}

//*********************** /Main Menu Code for Desktop
