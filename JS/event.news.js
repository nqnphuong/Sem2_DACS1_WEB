! function(e) {
    var n = {};

    function t(r) { if (n[r]) return n[r].exports; var o = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports }
    t.m = e, t.c = n, t.d = function(e, n, r) { t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r }) }, t.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e)
            for (var o in e) t.d(r, o, function(n) { return e[n] }.bind(null, o));
        return r
    }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, "a", n), n }, t.o = function(e, n) { return Object.prototype.hasOwnProperty.call(e, n) }, t.p = "https://qn.res.netease.com/pc/gw/20200824105157/", t(t.s = "Xvp9")
}({
    "3Npb": function(e, n, t) {
        "use strict";
        var r = t("tNfB");
        $(function() {
            nie.define("common-fur", function() {
                nie.require("nie.util.fur3"), fur3({
                    holder: "#f1",
                    product: "qn",
                    promark: "kRCHIrl",
                    host: "qn2.163.com/news/",
                    css: r,
                    cb: function(e) {
                        (e.indexOf("@163.com") > -1 || e.indexOf("@126.com") > -1 || e.indexOf("@yeah.net") > -1 || e.indexOf("@188.com") > -1 || !0 === /^[\d]+$/.test(e)) && (e = e.replace(/[^0-9a-zA-Z@_\-\.]/g, ""), $("body").append('<iframe  src="//gad.netease.com/gad/point?point_id=293&s=%2Bc9Z%2FxOn%2B7wFj2zH33AypSnngu4%3D&cache=' + Math.floor(1e4 * Math.random()) + "&urs=" + e + '" width="0" height="0" style="border:0px"></iframe>')), "undefined" != typeof reg_callback && reg_callback(e)
                    }
                })
            }), $(".qrcodes .navs a").hover(function() {
                if (!$(this).hasClass("active")) {
                    $(".qrcodes .navs a.active").removeClass("active"), $(this).addClass("active");
                    var e = $(this).index();
                    $(".qrcodes .codes div").hide().eq(e).show()
                }
            })
        })
    },
    AgQX: function(e, n, t) {},
    Xvp9: function(e, n, t) {
        "use strict";
        t("AgQX"), t("3Npb")
    },
    tNfB: function(e, n, t) { e.exports = t.p + "css/fur3__nowebp_3b1a1e62.css" }
});