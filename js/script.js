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

function jumpMenuOpen() {
  var jumpContainer = document.getElementById("jump-menu");
  //get the jump menu container

  //if container is open, remove open to close it
  if (jumpContainer.classList.contains("open")) {
        jumpContainer.classList.remove("open");
        jumpContainer.style.height = "";

  //else, open it, and set the container's height to the content scrollheight to ensure smooth animation with dynamic height
    } else {
        jumpContainer.classList.add("open");

        var containerHeight = jumpContainer.scrollHeight;
        var containerHeight = containerHeight + "px";
        //get the required height of the container, add "px" to it, and set the open container to that

        jumpContainer.style.height = containerHeight;

        //aaand as a fallback in case for some reason scrollheight returns null, set the container to auto so it still opens
        if (containerHeight === null) {
          jumpContainer.style.height = "auto";
        }
    }
}