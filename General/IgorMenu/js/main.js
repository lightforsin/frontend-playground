//SUBMENU
function myFunction() {
  var x = document.getElementById('nav_menu');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}


// INCLUDE HEADER / FOOTER
jQuery(document).ready(function($) {
  $(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
  });
});
