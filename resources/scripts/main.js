// console object care
if (!window.console) console = {log:function(){},error:function(){}};

//classes
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

    //eventlisteners
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

    //avatar
    if ($("#avatar-1").length>0) {
        $("#avatar-1").css('background-image','url('+ TH7.getThumbnail(50) +')');
    }

    $(document).ready(function(){
        //pagebox
        var hc = $(window)[0].scrollHeight;
        var hw = $(window).height();
        var h = (hc>hw)? hc : hw ;
        $('.pagebox').css('min-height',h);
    });

    $(window).load(function(){
        //thumbnails
        var t_heights = [];
        t_heights.getMaxHeight = function(){
            return Math.max.apply(null, this);
        }
        $("#projects .thumbnail").each(function(){
            t_heights.push($(this).height());
        });
        t_heights.max = t_heights.getMaxHeight();
        $("#projects .thumbnail").css('height',t_heights.max);
    });

})(jQuery)
