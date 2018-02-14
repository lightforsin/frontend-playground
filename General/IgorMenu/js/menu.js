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
          $('.item:nth-child(2) .sub-menu').append('<li class="item1"><a>'+ result[i].title +'</a></li>')
          $('#nav_menu .sub-menu').children('li:nth-child('+(i+1)+')').children('a').attr("href", result[i].link);
          }
        }
    });

});

$('#sign-up').on('click', function() {
  var test = "Username= " + $('#username').val( ) + "&Email= " + $('#email').val() + "&Password= " + $('#password').val();

  $.ajax({
    url: 'http://localhost:3000/user-data',
    dataType: 'json',
    type: 'post',
    data: test
  });
  window.location.replace("login.html");
});

$('#login').on('click', function() {
  $.ajax({
    url: 'http://localhost:3000/user-data',
    type: 'GET',
    dataType: 'json'
  })
});
