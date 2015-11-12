var useragent = require('express-useragent');

module.exports = {

    beforePhantomRequest: function(req, res, next) {
        source = req.headers['user-agent'];
        this.ua = useragent.parse(source);
        next();
    },

    onPhantomPageCreate: function(phantom, req, res, next) {
        var mobileViewPort = {
	    width: 375,
	    height: 677,
	}
  	var desktopViewPort = {
	    width: 1280,
	    height: 1024,
	}
        req.prerender.page.set('viewportSize',this.ua.isMobile ? mobileViewPort : desktopViewPort, function(){
            next();
	});
    }
}
