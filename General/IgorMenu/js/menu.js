//NAV MENU
$(document).ready(function() {
    $.ajax({
      url: 'http://localhost:3000/menu',
      type: 'GET',
      cache : false,
      success : function(result) {
        for (var i = 0; i < result.length; i++) {
          $('.menu').append('<li class="item"><a>'+ result[i].title +'</a></li>');
          $('#nav_menu .menu').children('li:nth-child('+(i+1)+')').children('a').attr("href", result[i].link);
          $('.item').append('<ul class="sub-menu"></ul>')
          }
        }
    });
    $.ajax({
      url: 'http://localhost:3000/sub-menu',
      type: 'GET',
      cache : false,
      success : function(result) {
        for (var i = 0; i < result.length; i++) {
          $('.item:nth-child(4) .sub-menu').append('<li class="item1"><a>'+ result[i].title +'</a></li>')
          $('#nav_menu .sub-menu').children('li:nth-child('+(i+1)+')').children('a').attr("href", result[i].link);
          }
        }
    });

});

$('#sign-up').on('click', function() {
    alert("test");
    //Username validation
    if ($('#username').val().length < 1 || $('#username').val().length > 15) {
      $('#username').css('border', '1px solid red');
      return;
    } else {
      $('#username').css('border', '1px solid transparent');
    }

    //Email validation
    if (!isValidEmail($('#email').val())) {
      $('#email').css('border', '1px solid red');
      return;
    }else {
      $('#email').css('border', '1px solid transparent');
    }

    //Password validation
    if ($('#password').val().length < 4 ) {
      $('#password').css('border', '1px solid red');
      $('#password1').css('border', '1px solid red');
      return;
    }
    else if(!isValidPassword($('#password').val(),$('#password1').val())){
      $('#password').css('border', '1px solid red');
      $('#password1').css('border', '1px solid red');
      return;
    }else {
      $('#password').css('border', '1px solid transparent');
      $('#password1').css('border', '1px solid transparent');
    }

  var test = "Username=" + $('#username').val() + "&Email=" + $('#email').val() + "&Password=" + $('#password').val();

  $.ajax({
    url: 'http://localhost:3000/user-data',
    dataType: 'json',
    type: 'post',
    data: test,
    success: function() {
      // alert("Felicitari " + $('#username').val() + " esti inregistrat!");
      window.location.href = "index.html";
    }
  });

});

$('#login').on('click', function() {
  alert("test");
  $.ajax({
    url: 'http://localhost:3000/user-data?Username=' + $('#login_username').val() + '&Password=' + $('#login_password').val() ,
    type: 'GET',
    success: function(data) {
      if( data.length != 0) {
        $(".test123").append("<p>Felicitari " + $('#login_username').val() + " esti logat!</p>");
        $(".login-form").css('display', 'none');
      } else {
        alert("Nu exista asa User, mai incearca!");
      }
    }
  })
});


// EMAIL validation
function isValidEmail(email){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var isValidEmail = re.test(String(email).toLowerCase());
  return isValidEmail
}

//Password validation
function isValidPassword(password,password1){
  if(password != password1){
    return false
  }else{
    return true
  }
}
