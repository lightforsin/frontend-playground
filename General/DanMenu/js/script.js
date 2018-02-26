// (function($){
  $(document).ready(function () {
    $.ajax({
      url: "http://localhost:3000/posts",
      type: "GET",
      cache: false,
      success: function(data){
        for( var i=1; i<=data.length; i++){
          if($.cookie("login")!=null){
            $('.topnavbar').append('<a>Text</a>');
            $('.topnavbar a:nth-child('+(i+5)+')').text(data[i-1].name);
            $('.topnavbar a:nth-child('+(i+5)+')').attr("href", data[i-1].url);
            $('.topnavbar a:nth-child(8)').addClass('dropdown');
            $('.topnavbar a:nth-child(8)').append('<div class="dropdown-content"></div>');
          }else{
            $('.topnavbar').append('<a>Text</a>');
            $('.topnavbar a:nth-child('+(i+3)+')').text(data[i-1].name);
            $('.topnavbar a:nth-child('+(i+3)+')').attr("href", data[i-1].url);
            $('.topnavbar a:nth-child(6)').addClass('dropdown');
            $('.topnavbar a:nth-child(6)').append('<div class="dropdown-content"></div>');
          }
        }
      }
    });
  $.ajax({
    url: "http://localhost:3000/subposts",
    type: "GET",
    cache: false,
    success: function(time){
      console.log(time);
      for( var i=1; i<=time.length; i++){
        $('.dropdown-content').append('<p>'+time[i-1].name+'</p>');
      }
    }
  });
  if($.cookie("login")!=null){
    $('#menu-signup').hide();
    $('#menu-login').hide();
    $('.topnavbar').append('<button id="logout">Log Out</button>');
    $('.topnavbar').append('<p id="logout-text">'+$.cookie("login")+' , felicitari esti logat!</p>');
    $(".login-form").hide();
    $("#logout").on("click", function (){
      $.removeCookie("login");
      location.reload();
    });
  }
});

// })(jQuery);

$(document).ready(function () {
    $(document).click(function (e) {
      if (!$(e.target).closest('#menu-login, .login-form').length && !$(e.target).closest('#menu-signup, .signup-form').length) {
        $(".signup-form").stop(true).slideUp("slow");
        $(".triangle-signup").stop(true).slideUp("slow");
        $(".login-form").stop(true).slideUp("slow");
        $(".triangle-login").stop(true).slideUp("slow");
       }
    });
});

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnavbar") {
        x.className += " responsive";
    } else {
        x.className = "topnavbar";
    }
}
