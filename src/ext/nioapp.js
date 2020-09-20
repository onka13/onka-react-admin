/* eslint-disable no-unused-expressions */

import jQuery from "jquery";
import noUiSlider from "nouislider/distribute/nouislider";

var NioApp = (function (r, l) {
  var t = l(window),
    c = l("body"),
    a = "nio-theme";
  function d(t, a) {
    return (
      Object.keys(a).forEach(function (e) {
        t[e] = a[e];
      }),
      t
    );
  }
  return (
    (l.fn.exists = function () {
      return 0 < this.length;
    }),
    (l.fn.csskey = function (e, t) {
      for (var a = t ? t + "-" : "", o = e ? e.split(" ") : "", i = 0; i < o.length; i++) o[i] = a + o[i];
      return o.toString().replace(",", " ");
    }),
    (r.BS = {}),
    (r.TGL = {}),
    (r.Ani = {}),
    (r.Addons = {}),
    (r.Slider = {}),
    (r.Picker = {}),
    (r.Win = { height: t.height(), width: t.outerWidth() }),
    (r.Break = {
      mb: 420,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1540,
      any: 1 / 0,
    }),
    (r.Host = {
      name: window.location.hostname,
      locat: a.slice(-5) + a.slice(0, 3),
    }),
    (r.State = {
      isRTL: !(!c.hasClass("has-rtl") && "rtl" !== c.attr("dir")),
      isTouch: "ontouchstart" in document.documentElement,
      isMobile: !!navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|/i),
      asMobile: r.Win.width < r.Break.md,
      asServe: r.Host.name.split(".").indexOf(r.Host.locat),
    }),
    (r.hexRGB = function (e, t) {
      var a,
        o,
        i = t || 1;
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))
        return (
          3 === (a = e.substring(1).split("")).length && (a = [a[0], a[0], a[1], a[1], a[2], a[2]]),
          (o = [((a = "0x" + a.join("")) >> 16) & 255, (a >> 8) & 255, 255 & a].join(",")),
          1 <= i ? "rgba(" + o + ")" : "rgba(" + o + "," + i + ")"
        );
      throw new Error("bad hex");
    }),
    (r.StateUpdate = function () {
      r.Win = { height: t.height(), width: t.outerWidth() };
      r.State.asMobile = r.Win.width < r.Break.md;
    }),
    (r.ClassInit = function () {
      var e = function () {
        !0 === r.State.asMobile ? c.addClass("as-mobile") : c.removeClass("as-mobile");
      };
      !0 === r.State.isTouch ? c.addClass("has-touch") : c.addClass("no-touch");
      e();
      !0 === r.State.isRTL && c.addClass("has-rtl");
      c.addClass("nk-" + a);
      t.on("resize", e);
    }),
    (r.ColorBG = function () {
      var e = function (e, t) {
        var a = l(e),
          o = t || "bg",
          i = a.data(o);
        "" !== i &&
          ("bg-color" === o ? a.css("background-color", i) : "bg-image" === o ? a.css("background-image", 'url("' + i + '")') : a.css("background", i));
      };
      l("[data-bg]").each(function () {
        e(this, "bg");
      });
      l("[data-bg-color]").each(function () {
        e(this, "bg-color");
      });
      l("[data-bg-image]").each(function () {
        e(this, "bg-image");
      });
    }),
    (r.ColorTXT = function () {
      l("[data-color]").each(function () {
        var e, t, a, o;
        e = "color";
        t = l(this);
        a = e || "color";
        "" !== (o = t.data(a)) && t.css("color", o);
      });
    }),
    (r.BreakClass = function (e, t, a) {
      var o = e || ".header-menu",
        i = t || r.Break.md,
        n = { timeOut: 1e3, classAdd: "mobile-menu" },
        s = a ? d(n, a) : n,
        c = !!s.ignore && s.ignore;
      if (c && l(o).hasClass(c)) return !1;
      r.Win.width < i
        ? setTimeout(function () {
            r.Win.width < i && l(o).addClass(s.classAdd);
          }, s.timeOut)
        : l(o).removeClass(s.classAdd);
    }),
    (r.Passcode = function (e, t) {
      var a = { showClass: "is-shown", hideClass: "is-hidden" },
        i = t ? d(a, t) : a;
      l(e).exists() &&
        l(e).on("click", function (e) {
          var t = l(this),
            a = t.data("target"),
            o = l("#" + a);
          e.preventDefault();
          o.hasClass(i.showClass)
            ? t.add(o).addClass(i.hideClass).removeClass(i.showClass) & o.attr("type", "password")
            : t.add(o).addClass(i.showClass).removeClass(i.hideClass) & o.attr("type", "text");
        });
    }),
    (r.LinkOff = function (e) {
      l(e).on("click", function (e) {
        e.preventDefault();
      });
    }),
    (r.SetHW = function (e, t) {
      var t = "height" == t || "h" == t ? "height" : "width",
        a = e || "[data-" + t + "]";
      l(a).exists() &&
        l(a).each(function () {
          l(this).css(t, l(this).data(t));
        });
    }),
    (r.AddInBody = function (e, t) {
      var a = { prefix: "nk-", class: "", has: "has" },
        o = t ? d(a, t) : a,
        i = e.replace(".", "").replace(o.prefix, ""),
        n = i;
      o.prefix = !1 !== o.prefix ? o.prefix : "";
      o.has = "" !== o.has ? o.has + "-" : "";
      n = "" !== o.class ? o.class : o.has + n;
      l("." + o.prefix + i).exists() && !c.hasClass(n) && c.addClass(n);
    }),
    (r.Toggle = {
      trigger: function (e, t) {
        var a = {
            self: e,
            active: "active",
            content: "expanded",
            data: "content",
            olay: "toggle-overlay",
            speed: 400,
          },
          o = t ? d(a, t) : a,
          i = l("[data-target=" + e + "]"),
          n = l("[data-" + o.data + "=" + e + "]"),
          s = n.data("toggle-body");
        n.data("toggle-overlay") && (o.overlay = o.olay);
        s && (o.body = "toggle-shown");
        n.hasClass(o.content)
          ? (i.removeClass(o.active), 1 == o.toggle ? n.slideUp(o.speed).removeClass(o.content) : n.removeClass(o.content))
          : (i.addClass(o.active), 1 == o.toggle ? n.slideDown(o.speed).addClass(o.content) : n.addClass(o.content));
        o.body && c.toggleClass(o.body);
        o.overlay && this.overlay(n, o.overlay, o);
      },
      removed: function (e, t) {
        var a = {
            self: e,
            active: "active",
            content: "expanded",
            body: "",
            data: "content",
            olay: "toggle-overlay",
          },
          o = t ? d(a, t) : a,
          i = l("[data-target=" + e + "]"),
          n = l("[data-" + o.data + "=" + e + "]"),
          s = n.data("toggle-body");
        n.data("toggle-overlay") && (o.overlay = o.olay);
        s && (o.body = "toggle-shown");
        (i.hasClass(o.active) || n.hasClass(o.content)) && (i.removeClass(o.active), n.removeClass(o.content), !0 === o.toggle && n.slideUp(o.speed));
        o.body && c.hasClass(o.body) && c.removeClass(o.body);
        o.close && (!0 === o.close.profile && this.closeProfile(n), !0 === o.close.menu && this.closeMenu(n));
        o.overlay && this.overlayRemove(o.overlay);
      },
      overlay: function (e, t, a) {
        var o;
        !0 === a.break && ((o = l(e).data("toggle-screen")), (a.break = r.Break[o]));
        l(e).hasClass(a.content) && r.Win.width < a.break ? l(e).after('<div class="' + t + '" data-target="' + a.self + '"></div>') : this.overlayRemove(t);
      },
      overlayRemove: function (e) {
        l("." + e)
          .fadeOut(300)
          .remove();
      },
      dropMenu: function (e, t) {
        var a = {
            active: "active",
            self: "link-toggle",
            child: "menu-sub",
            speed: 400,
          },
          o = t ? d(a, t) : a,
          i = l(e).parent(),
          n = i.children("." + o.child);
        o.speed = 5 < n.children().length ? o.speed + 20 * n.children().length : o.speed;
        n.slideToggle(o.speed)
          .find("." + o.child)
          .slideUp(o.speed);
        i.toggleClass(o.active)
          .siblings()
          .removeClass(o.active)
          .find("." + o.child)
          .slideUp(o.speed);
      },
      closeProfile: function (e) {
        var t = l(e).find(".nk-profile-toggle.active"),
          a = l(e).find(".nk-profile-content.expanded");
        t.exists() && (t.removeClass("active"), a.slideUp().removeClass("expanded"));
      },
      closeMenu: function (e) {
        var t = l(e).find(".nk-menu-item.active");
        t.exists() && t.removeClass("active").find(".nk-menu-sub").slideUp();
      },
    }),
    (r.BS.tooltip = function (e, t) {
      var a = { boundary: "window", trigger: "hover" },
        o = t ? d(a, t) : a;
      l(e).exists() && "function" == typeof l.fn.tooltip && l(e).tooltip(o);
    }),
    (r.BS.menutip = function (e) {
      r.BS.tooltip(e, { boundary: "window", placement: "right" });
    }),
    (r.BS.popover = function (e) {
      l(e).exists() && "function" == typeof l.fn.popover && l(e).popover();
    }),
    (r.BS.progress = function (e) {
      l(e).exists() &&
        l(e).each(function () {
          l(this).css("width", l(this).data("progress") + "%");
        });
    }),
    (r.BS.modalfix = function (e) {
      var t = e || ".modal";
      l(t).exists() &&
        "function" == typeof l.fn.modal &&
        l(t).on("shown.bs.modal", function () {
          c.hasClass("modal-open") || c.addClass("modal-open");
        });
    }),
    (r.BS.fileinput = function (e) {
      l(e).exists() &&
        l(e).each(function () {
          var t = l(this).next().text(),
            a = [];
          l(this).on("change", function () {
            for (var e = 0; e < this.files.length; e++) a[e] = this.files[e].name;
            (t = a ? a.join(", ") : t), l(this).next().html(t);
          });
        });
    }),
    (r.Picker.date = function (e, o) {
      l(e).exists() &&
        "function" == typeof l.fn.datepicker &&
        l(e).each(function () {
          var e = l(this).data("date-format"),
            t = {
              format: "" !== e ? e : "mm/dd/yyyy",
              maxViewMode: 2,
              clearBtn: !0,
              autoclose: !0,
              todayHighlight: !0,
            },
            a = o ? d(t, o) : t;
          l(this).datepicker(a);
        });
    }),
    (r.Picker.dob = function (e, t) {
      var a = { startView: 2, todayHighlight: !1 },
        o = t ? d(a, t) : a;
      r.Picker.date(e, o);
    }),
    (r.Picker.time = function (e, i) {
      l(e).exists() &&
        "function" == typeof l.fn.timepicker &&
        l(e).each(function () {
          l(this).parent().addClass("has-timepicker");
          var e = l(this).data("time-format"),
            t = l(this).data("time-interval"),
            a = {
              timeFormat: "" !== e ? e : "HH:mm",
              interval: "" !== t ? t : 15,
            },
            o = i ? d(a, i) : a;
          l(this).timepicker(o);
        });
    }),
    (r.Slick = function (e, a) {
      l(e).exists() &&
        "function" == typeof l.fn.slick &&
        l(e).each(function () {
          var e = {
              prevArrow: '<div class="slick-arrow-prev"><a href="javascript:void(0);" class="slick-prev"><em class="icon ni ni-chevron-left"></em></a></div>',
              nextArrow: '<div class="slick-arrow-next"><a href="javascript:void(0);" class="slick-next"><em class="icon ni ni-chevron-right"></em></a></div>',
            },
            t = a ? d(e, a) : e;
          l(this).slick(t);
        });
    }),
    (r.Knob = function (e, t) {
      var a, o;
      l(e).exists() &&
        "function" == typeof l.fn.knob &&
        ((a = { min: 0 }),
        (o = t ? d(a, t) : a),
        l(e).each(function () {
          l(this).knob(o);
        }));
    }),
    (r.Range = function (e, i) {
      l(e).exists() &&
        "undefined" != typeof noUiSlider &&
        l(e).each(function () {
          var e = l(this).attr("id"),
            t = document.getElementById(e),
            a = { start: [25], connect: "lower", range: { min: 0, max: 100 } },
            o = i ? d(a, i) : a;
          noUiSlider.create(t, o);
        });
    }),
    (r.Select2 = function (e, i) {
      l(e).exists() &&
        "function" == typeof l.fn.select2 &&
        l(e).each(function () {
          var e = l(this),
            t = {
              placeholder: e.data("placeholder"),
              clear: e.data("clear"),
              search: e.data("search"),
              width: e.data("width"),
              theme: e.data("theme"),
              ui: e.data("ui"),
            };
          t.ui = t.ui ? " " + e.csskey(t.ui, "select2") : "";
          var a = {
              theme: t.theme ? t.theme + " " + t.ui : "default" + t.ui,
              allowClear: !!t.clear && t.clear,
              placeholder: t.placeholder ? t.placeholder : "",
              dropdownAutoWidth: !(!t.width || "auto" !== t.width),
              minimumResultsForSearch: t.search && "on" === t.search ? 1 : -1,
            },
            o = i ? d(a, i) : a;
          l(this).select2(o);
        });
    }),
    (r.coreInit = function () {
      r.coms.onResize.push(r.StateUpdate), r.coms.docReady.push(r.ClassInit);
    }),
    r.coreInit(),
    r
  );
})(
  (NioApp = (function (e, t, a) {
    "use strict";
    var o = {
        AppInfo: { name: "NioApp", version: "1.0.4", author: "Softnio" },
        Package: { name: "DashLite", version: "1.8.0" },
      },
      i = {
        docReady: [],
        docReadyDefer: [],
        winLoad: [],
        winLoadDefer: [],
        onResize: [],
        onResizeDefer: [],
      };
    function n(t) {
      (t = void 0 === t ? e : t),
        i.docReady.concat(i.docReadyDefer).forEach(function (e) {
          null != e && e(t);
        });
    }
    function s(t) {
      (t = "object" == typeof t ? e : t),
        i.winLoad.concat(i.winLoadDefer).forEach(function (e) {
          null != e && e(t);
        });
    }
    function c(t) {
      (t = "object" == typeof t ? e : t),
        i.onResize.concat(i.onResizeDefer).forEach(function (e) {
          null != e && e(t);
        });
    }
    return e(a).ready(n), e(t).on("load", s), e(t).on("resize", c), (o.coms = i), (o.docReady = n), (o.winLoad = s), (o.onResize = c), o;
  })(jQuery, window, document)),
  jQuery
);

window["NioApp"] = NioApp;

export default NioApp;
