// (function($){
  $(document).ready(function () {
    $.ajax({
      url: "http://localhost:3000/posts",
      type: "GET",
      cache: false,
      success: function(data){
        for( var i=1; i<=data.length; i++){
          $('.topnavbar').append('<a>Text</a>');
          $('.topnavbar a:nth-child('+(i+1)+')').text(data[i-1].name);
          $('.topnavbar a:nth-child('+(i+1)+')').attr("href", data[i-1].url);
        }
        $('.topnavbar a:nth-child(3)').addClass('dropdown');
        $('.topnavbar a:nth-child(3)').append('<div class="dropdown-content"></div>');
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
});

// })(jQuery);
$('#submit').on("click", function (){
    //Email form validation
  function ValidateEmail(email) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(email);
    };
  var ok = true;
  //Fields validation not empty
  if($("#login").val()==''){
    $("#login").css('border', '2px solid red');
    ok=false;
    $("#message").text('Please introduce your login');
  }else{
    $("#login").css('border', '1px solid #ccc');
    if($("#email").val()==''){
      $("#email").css('border', '2px solid red');
      $("#message").text('Please introduce your email');
      ok=false;
    }else{
      if (!ValidateEmail($("#email").val())) {
         $("#message").text('Invalid email');
         ok=false
      }else{
        $("#email").css('border', '1px solid #ccc');
        if($("#password").val()==''){
          $("#password").css('border', '2px solid red');
          $("#message").text('Please introduce your password');
          ok=false;
      }else{
        $("#password").css('border', '1px solid #ccc');
        if($("#password2").val()==''){
          $("#password2").css('border', '2px solid red');
          $("#message").text('Please confirm your password');
          ok=false;
        }else{
          $("#password2").css('border', '1px solid #ccc');
          if ($("#password").val()!= $("#password2").val()) {
              $("#message").text('Passwords do not match');
              $("#password").css('border', '2px solid red');
              $("#password2").css('border', '2px solid red');
              ok = false;
          }
        }
      }
    }
  }
}
  var link = 'http://localhost:3000/users?email='+$("#email").val();
  $.ajax({
    url: link,
    type: "GET",
    cache: false,
    success: function(users){
      if(users.length!=0){
        alert('This email is taken already');
        ok=false;
      }else{
        if(ok===true){
          var users = 'Login='+  $("#login").val() + '&email=' +  $("#email").val() + '&password=' +  $("#password").val();
          //alert (dataString);return false;
          $.ajax({
            type: "POST",
            url: "http://localhost:3000/users",
            data: users
          });
          alert('Your registration succeded!');
          $("#login").val(''); $("#email").val(''); $("#password").val(''); $("#password2").val('');
          $("#password").css('border', '1px solid #ccc');
          $("#password2").css('border', '1px solid #ccc');
          $("#message").remove();
        }
      }
    }
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
        $('body').append("<p id='message'>User "+$("#login").val()+" is logged!</p>");
        $('body p').append('<input id="logout" type="button" value="Log Out"></input>');
        $('.form').hide();
        $('#login_btn').hide();
        $('#logout').on("click", function (){
          window.location.replace("Start.html");
        });
      }
      $("#login").val('');
      $("#password").val('');
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
