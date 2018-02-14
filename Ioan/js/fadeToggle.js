$(function() {  
   
    $('#contact').click(function() {
      $('#contactForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
      var container = $("#contactForm");
  
      if (!container.is(e.target)
          && container.has(e.target).length === 0) 
      {
          container.fadeOut();
      }
    });
    
  });

  $(function() {  
    
    $('#login').click(function() {
      $('#loginForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
      var container = $("#loginForm");
  
      if (!container.is(e.target) 
          && container.has(e.target).length === 0) 
      {
          container.fadeOut();
      }
    });
    
  });

 