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

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnavbar") {
        x.className += " responsive";
    } else {
        x.className = "topnavbar";
    }
}
