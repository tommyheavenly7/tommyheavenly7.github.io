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
    $("#avatar-1").css('background-image','url('+ TH7.getThumbnail(50) +')');
})(jQuery)
