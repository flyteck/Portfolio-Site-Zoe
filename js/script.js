function menuToggle() {
    var navContainer = document.getElementById("myNavtoggle");
    var navIcon = document.getElementById("navtoggle-icon");
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

  if (jumpContainer.classList.contains("open")) {
        jumpContainer.classList.remove("open");
        jumpContainer.style.height = "";
    } else {
        jumpContainer.classList.add("open");

        var containerHeight = jumpContainer.scrollHeight;
        var containerHeight = containerHeight + "px";
        //get the required height of the container, add "px" to it, and set the open container to that

        jumpContainer.style.height = containerHeight;
    }
}