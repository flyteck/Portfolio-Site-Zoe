//opens/closes the jump menu on mobile to save space
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

        //get the required height of the container, add "px" to it,
        var containerHeight = jumpContainer.scrollHeight;
        var containerHeight = containerHeight + "px";

        //and set the open container to that
        jumpContainer.style.height = containerHeight;

        //aaand as a fallback in case for some reason scrollheight returns null, set the container to auto so it still opens
        if (containerHeight === null) {
          jumpContainer.style.height = "auto";
        }

        //after this code completes, re-set the scroll height above IDs to accomodate for it being open
        setTimeout(setAreaHeight, 300);
    }
}

//sets the scroll-margin-top for all categories on the project page, to accomodate for the header being sticky
function setAreaHeight() {
  //get all categories
  var pageIDs = document.querySelectorAll(".area-header-link");

  //get the sticky nav's height
  var navHeight = document.getElementById("navigation").scrollHeight;

  //add extra padding
  var combined = parseInt(navHeight) + 20;

  //and add px to it
  var paddingBuffer = combined + "px";

  //then, for all pageIDs, set the scrollMargin
  for (i = 0; i < pageIDs.length; i++) {
    pageIDs[i].style.scrollMarginTop = paddingBuffer;
  }
}

window.addEventListener("load", function () {
  setAreaHeight()
});

window.addEventListener("resize", function () {
  setAreaHeight()
});
