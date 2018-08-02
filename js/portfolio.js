! function(a) {
    "use strict";
    a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        var offsetVal = 54;

        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var o = a(this.hash);

            if (this.hash === "#skills") {
                offsetVal = 360;
            }
            if ((o = o.length ? o : a("[name=" + this.hash.slice(1) + "]")).length) return a("html, body").animate({
                scrollTop: o.offset().top - offsetVal
            }, 1e3, "easeInOutExpo"), !1
        }
    }), a(".js-scroll-trigger").click(function() {
        a(".navbar-collapse").collapse("hide")
    }), a("body").scrollspy({
        target: "#mainNav",
        offset: 56
    });
}(jQuery);