jQuery(document).ready(function(){
    var $hero=jQuery('#hero');
        $laser= $hero.find('.laser');
    $laser.removeClass('laser');
    function scan(){
        $hero.removeClass('idle').addClass('attack');
        $laser.addClass('laser');
        setTimeout(function(){
            $hero.removeClass('attack').addClass('idle');
            $laser.removeClass('laser');
        },3000);
    }
    setInterval(scan,5000);
});