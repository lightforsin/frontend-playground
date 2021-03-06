$(document).ready(function () {
  $('.login-form').hide();
  $('.triangle-login').hide();
   $("#menu-login").click(function () {
     if($(".signup-form").is(":visible") &&
     $(".triangle-signup").is(":visible")){
       $(".signup-form").hide();
       $(".triangle-signup").hide();
     }
        $(".login-form").stop(true).slideToggle("slow");
        $(".triangle-login").stop(true).slideToggle("slow");
   });
});

$('#login_btn').on("click", function (){
  let link='http://localhost:3000/users?username='+$("#login").val()+'&password='+$("#password").val();
  $.ajax({
    url: link,
    type: "GET",
    cache: false,
    success: function(users){
      if(users.length==0){
        alert('User or password is incorrect!');
      }else{
        // $('body').append("<p id='message'>User "+$("#login").val()+" is logged!</p>");
        // $('body p').append('<input id="logout" type="button" value="Log Out"></input>');
        // $('.form').hide();
        // $('#login_btn').hide();
        // $('#logout').on("click", function (){
        //   window.location.replace("Start.html");
        // });
        $.cookie("login", $('#login').val());
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
      }
      $("#login").val('');
      $("#password").val('');
    }
  });
});
