/* init */
// console object care
if (!window.console) console = {log:function(){},error:function(){}};

/* classes */
var Util = function(){};
Util.prototype.getThumbnail = function(w) {
    try {
        w = (!!!w || isNaN(w))? "20" : w ;
        var hash = CryptoJS.MD5("miamoto.tomonari@gmail.com");
        var imgSrc = "http://www.gravatar.com/avatar/%%hash%%?s=" + w;
        imgSrc = imgSrc.replace("%%hash%%",hash);
        return imgSrc;
    } catch(ex) {
        var errMsg = "Exception: " + ex;
        console.error(errMsg);
        return errMsg;
    }
}
var TH7 = new Util();

//jquery
(function($){
    $('#pageup').click(function(){
		$('html, body').animate({scrollTop:0},'fast');
        return false;
	});

    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[id=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 'fast');
                return false;
            }
        }
	});

    //pagebox
    var hc = $(window)[0].scrollHeight;
    var hw = $(window).height();
    var h = (hc>hw)? hc : hw ;
    $('.pagebox').css('min-height',h);

    //avatar
    $("#avatar-1").css('background-image','url('+ TH7.getThumbnail(50) +')');

    // background color
    /*
    var colors = new Array(
        [62,35,255],
        [60,255,60],
        [255,35,98],
        [45,175,230],
        [255,0,255],
        [255,128,0]
    );

    var step = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0,1,2,3];

    //transition speed
    var gradientSpeed = 0.0006;

    (function updateGradient() {
        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];

        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb("+r1+","+g1+","+b1+")";

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb("+r2+","+g2+","+b2+")";

        $('#container-wrapper').css({
            background: "linear-gradient(90deg,"+ color1 +","+ color2 +")"
        })

        step += gradientSpeed;
        if ( step >= 1 ) {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];

            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        }

        setTimeout(updateGradient,10)
    })();
    */

})(jQuery)
