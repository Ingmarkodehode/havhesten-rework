
function navBar(navItems) {
  var navItems = document.getElementById("nav-items");
  if(navItems.style.display=="none") {
      navItems.style.display = "flex";
  } else {
      navItems.style.display = "none";
  }
}
