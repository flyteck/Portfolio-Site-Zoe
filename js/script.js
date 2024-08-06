function menuToggle() {
  var navContainer = document.getElementById('myNavtoggle');
  var navIcon = document.getElementById('navtoggle-icon');

  if (navContainer.className === 'navtoggle') {
    navContainer.className += ' responsive';
    navIcon.classList.remove("fa-bars");
    navIcon.classList.add("fa-xmark");
  } else {
    navContainer.className = 'navtoggle';
    navIcon.classList.add("fa-bars");
    navIcon.classList.remove("fa-xmark");
  }
}
