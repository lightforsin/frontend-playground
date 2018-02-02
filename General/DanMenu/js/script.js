(function($){

  function myFunction() {
      var x = document.getElementById("navbar");
      if (x.className === "topnavbar") {
          x.className += " responsive";
      } else {
          x.className = "topnavbar";
      }
  }

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
      }
    });
  });

})(jQuery);
