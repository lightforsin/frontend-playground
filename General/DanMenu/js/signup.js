$(document).ready(function () {
  $('.signup-form').hide();
  $('.triangle-signup').hide();
   $("#menu-signup").click(function () {
     if($('.login-form').is(':visible') && $(".triangle-login").is(':visible') ){
       $(".login-form").hide();
       $(".triangle-login").hide();
     }
        $(".signup-form").stop(true).slideToggle("slow");
        $(".triangle-signup").stop(true).slideToggle("slow");
   });
});

$('#submit').on("click", function (){
    //Email form validation
  function ValidateEmail(email) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(email);
    };
  var ok = true;
  //Fields validation not empty
  if($("#signup-login").val()==''){
    $("#signup-login").css('border', '2px solid red');
    $("#signup-login").focus();
    ok=false;
    $("#message").text('Please introduce your login');
  }else{
    $("#signup-login").css('border', '1px solid #ccc');
    if($("#signup-email").val()==''){
      $("#signup-email").css('border', '2px solid red');
      $("#signup-email").focus();
      $("#message").text('Please introduce your email');
      ok=false;
    }else{
      if (!ValidateEmail($("#signup-email").val())) {
        $("#signup-email").css('border', '2px solid red');
        $("#signup-email").focus();
        $("#message").text('Invalid email');
         ok=false
      }else{
        $("#signup-email").css('border', '1px solid #ccc');
        if($("#signup-password").val()==''){
          $("#signup-password").css('border', '2px solid red');
          $("#signup-password").focus();
          $("#message").text('Please introduce your password');
          ok=false;
      }else{
        $("#signup-password").css('border', '1px solid #ccc');
        if($("#signup-password2").val()==''){
          $("#signup-password2").css('border', '2px solid red');
          $("#signup-password2").focus();
          $("#message").text('Please confirm your password');
          ok=false;
        }else{
          $("#signup-password2").css('border', '1px solid #ccc');
          if ($("#signup-password").val()!= $("#signup-password2").val()) {
              $("#message").text('Passwords do not match');
              $("#signup-password").css('border', '2px solid red');
              $("#signup-password2").css('border', '2px solid red');
              $("#signup-password2").focus();
              ok = false;
          }
        }
      }
    }
  }
}
  var link = 'http://localhost:3000/users?email='+$("#signup-email").val();
  $.ajax({
    url: link,
    type: "GET",
    cache: false,
    success: function(users){
      if(ok===true){
        $("#message").remove();
        if(users.length!=0){
          alert('This email is taken already');
          $("#signup-email").css('border', '2px solid red');
          $("#signup-email").focus();
          ok=false;
      }else{
        $("#signup-email").css('border', '2px solid #ccc');
        if(ok===true){
          var users = 'Login='+  $("#signup-login").val() + '&email=' +  $("#signup-email").val() + '&password=' +  $("#signup-password").val();
          //alert (dataString);return false;
          $.ajax({
            type: "POST",
            url: "http://localhost:3000/users",
            data: users
          });
          alert('Your registration succeded!');
          $("#signup-login").val(''); $("#signup-email").val(''); $("#signup-password").val(''); $("#signup-password2").val('');
          $("#signup-password").css('border', '1px solid #ccc');
          $("#signup-password2").css('border', '1px solid #ccc');
          $("#message").remove();
        }
      }
    }
  }
  });
});
