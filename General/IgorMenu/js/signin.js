// $('#sign-up').on('click', function() {
//   alert('test')
//     //Username validation
//     if ($('#signin_username').val().length < 1 || $('#signin_username').val().length > 15) {
//       $('#signin_username').css('border', '1px solid red');
//       return;
//     } else {
//       $('#signin_username').css('border', '1px solid transparent');
//     }
//
//     //Email validation
//     if (!isValidEmail($('#email').val())) {
//       $('#email').css('border', '1px solid red');
//       return;
//     }else {
//       $('#email').css('border', '1px solid transparent');
//     }
//
//     //Password validation
//     if ($('#signin_password').val().length < 4 ) {
//       $('#signin_password').css('border', '1px solid red');
//       $('#signin_password1').css('border', '1px solid red');
//       return;
//     }
//     else if(!isValidPassword($('#password').val(),$('#signin_password1').val())){
//       $('#signin_password').css('border', '1px solid red');
//       $('#signin_password1').css('border', '1px solid red');
//       return;
//     }else {
//       $('#signin_password').css('border', '1px solid transparent');
//       $('#signin_signin_password1').css('border', '1px solid transparent');
//     }
//
//   var test = "Username=" + $('#signin_username').val() + "&Email=" + $('#email').val() + "&Password=" + $('#signin_password').val();
//
//   $.ajax({
//     url: 'http://localhost:3000/user-data',
//     dataType: 'json',
//     type: 'post',
//     data: test,
//     success: function() {
//       alert("Felicitari " + $('#signin_username').val() + " esti inregistrat!");
//       window.location.href = "index.html";
//
//     }
//   });
//
// });
