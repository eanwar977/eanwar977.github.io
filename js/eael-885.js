!function(e){var n={};function a(i){if(n[i])return n[i].exports;var t=n[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,n,i){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)a.d(i,t,function(n){return e[n]}.bind(null,t));return i},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a(a.s=25)}({25:function(e,n){var a=function(e,n){var a=n(".eael-simple-menu-container",e).data("indicator-class"),i=n(".eael-simple-menu-container",e).data("hamburger-icon"),t=n(".eael-simple-menu-container",e).data("indicator"),l=n(".eael-simple-menu-container",e).data("dropdown-indicator"),s=n(".eael-simple-menu-container",e).data("dropdown-indicator-class"),r=n(".eael-simple-menu",e).hasClass("eael-simple-menu-horizontal"),o=n(".eael-simple-menu-container",e).data("hamburger-breakpoints"),c=n(".eael-simple-menu-container",e).data("hamburger-device");void 0!==c&&""!==c&&null!==c||(c="tablet");var u=r?".eael-simple-menu-horizontal":".eael-simple-menu-vertical",p=f(o,c),d=(n(".eael-simple-menu--stretch"),[]);function m(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(window.matchMedia("(max-width: "+a+"px)").matches)if(n(".eael-simple-menu-container",e).addClass("eael-simple-menu-hamburger"),n(u,e).addClass("eael-simple-menu-responsive"),n(".eael-simple-menu-toggle-text",e).text(n(".eael-simple-menu-horizontal .current-menu-item a",e).eq(0).text()),n(".eael-simple-menu-container",e).closest(".elementor-widget-eael-simple-menu").removeClass("eael-hamburger--not-responsive").addClass("eael-hamburger--responsive"),n(".eael-simple-menu-container",e).hasClass("eael-simple-menu--stretch")){var i={};n(u,e).parent().hasClass("eael-nav-menu-wrapper")||n(u,e).wrap('<nav class="eael-nav-menu-wrapper"></nav>');var t=n(".eael-simple-menu-container nav",e);h(t),i.width=parseFloat(n(".elementor").width())+"px",i.left=-parseFloat(t.offset().left)+"px",i.position="absolute",t.css(i)}else{var l={};n(u,e).parent().hasClass("eael-nav-menu-wrapper")||n(u,e).wrap('<nav class="eael-nav-menu-wrapper"></nav>');var s=n(".eael-simple-menu-container nav",e);h(s),l.width="",l.left="",l.position="inherit",s.css(l)}else n(".eael-simple-menu-container",e).removeClass("eael-simple-menu-hamburger"),n(u,e).removeClass("eael-simple-menu-responsive"),n(u+", "+u+" ul",e).css("display",""),n(".eael-simple-menu-container nav",e).removeAttr("style"),n(".eael-simple-menu-container",e).closest(".elementor-widget-eael-simple-menu").removeClass("eael-hamburger--responsive").addClass("eael-hamburger--not-responsive")}function h(e){e.css({width:"",left:"",position:"inherit"})}function f(e,n){var a=0;if("none"===n||void 0===n||""===n||null===n)return a;for(var i in e)i==n&&(a=e[i]);return a.replace(/[^0-9]/g,"")}n(".eael-simple-menu li a",e).each((function(){var e,a=n(this),i=a.attr("href"),t=i,l=void 0!==t?t.split("#"):[];e=(i=void 0===i?"":i).startsWith("#"),"#"!==i&&l.length>1&&localize.page_permalink===l[0]&&l[1]&&d.push(l[1]),e||localize.page_permalink!==t||a.addClass("eael-item-active")})),n(window).on("load resize scroll",(function(){d.length>0&&n.each(d,(function(a,i){n("#"+i).isInViewport()?n('a[href="'+localize.page_permalink+"#"+i+'"]',e).addClass("eael-menu-"+i+" eael-item-active"):n(".eael-menu-"+i).removeClass("eael-menu-"+i+" eael-item-active")}))})),r&&("svg"==t?n(".eael-simple-menu > li.menu-item-has-children",e).each((function(){n("> a",n(this)).append('<span class="indicator-svg">'+a+"</span>")})):n(".eael-simple-menu > li.menu-item-has-children",e).each((function(){n("> a",n(this)).append('<span class="'+a+'"></span>')})),"svg"==l?n(".eael-simple-menu > li ul li.menu-item-has-children",e).each((function(){n("> a",n(this)).append('<span class="dropdown-indicator-svg">'+s+"</span>")})):n(".eael-simple-menu > li ul li.menu-item-has-children",e).each((function(){n("> a",n(this)).append('<span class="'+s+'"></span>')}))),n(u,e).before('<span class="eael-simple-menu-toggle-text"></span>').after('<button class="eael-simple-menu-toggle">'+i+'<span class="eael-simple-menu-toggle-text"></span></button>'),m(p),n(".eael-simple-menu-container",e).on("click",".eael-simple-menu-toggle",(function(e){e.preventDefault();var a=n(this).siblings("nav").children(u);"none"==a.css("display")?a.slideDown(300):a.slideUp(300)})),n(window).on("resize load",(function(){m(p)})),n(".eael-simple-menu > li.menu-item-has-children",e).each((function(){"svg"==t?(parseInt(n("a",this).css("line-height")),n(this).append('<span class="eael-simple-menu-indicator"> '+a+"</span>")):(parseInt(n("a",this).css("line-height")),n(this).append('<span class="eael-simple-menu-indicator '+a+'"></span>'))})),n(".eael-simple-menu > li ul li.menu-item-has-children",e).each((function(e){"svg"==l?(parseInt(n("a",this).css("line-height")),n(this).append('<span class="eael-simple-menu-indicator"> '+s+"</span>")):(parseInt(n("a",this).css("line-height")),n(this).append('<span class="eael-simple-menu-indicator '+s+'"></span>'))})),n(".eael-simple-menu-dropdown-align-left .eael-simple-menu-vertical li.menu-item-has-children").each((function(){var e=parseInt(n("a",n(this)).css("padding-left"));n("ul li a",this).css({"padding-left":e+20+"px"})})),n(".eael-simple-menu-dropdown-align-right .eael-simple-menu-vertical li.menu-item-has-children").each((function(){var e=parseInt(n("a",n(this)).css("padding-right"));n("ul li a",this).css({"padding-right":e+20+"px"})})),n(".eael-simple-menu",e).on("click",".eael-simple-menu-indicator",(function(e){e.preventDefault(),n(this).toggleClass("eael-simple-menu-indicator-open"),n(this).hasClass("eael-simple-menu-indicator-open")?n(this).siblings("ul").slideDown(300):n(this).siblings("ul").slideUp(300)})),n(".eael-simple-menu-container",e).on("click",".eael-simple-menu-responsive li a",(function(e){"#"!==n(this).attr("href")&&n(this).parents(u).slideUp(300)})),n(".eael-simple-menu",e).on("click",'a[href="#"]',(function(e){e.preventDefault(),n(this).siblings(".eael-simple-menu-indicator").click()})),elementorFrontend.isEditMode()&&elementor.channels.editor.on("change",(function(e){var n=e.elementSettingsModel.changed;if(n.eael_simple_menu_dropdown){var a=f(o,n.eael_simple_menu_dropdown);m(a),p=a}}))};jQuery(window).on("elementor/frontend/init",(function(){if(ea.elementStatusCheck("eaelSimpleMenu"))return!1;elementorFrontend.hooks.addAction("frontend/element_ready/eael-simple-menu.default",a)}))}}),function(e){var n={};function a(i){if(n[i])return n[i].exports;var t=n[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(e,n,i){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)a.d(i,t,function(n){return e[n]}.bind(null,t));return i},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a(a.s=0)}([function(e,n){ea.hooks.addAction("init","ea",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/eael-adv-accordion.default",(function(e,n){var a=window.location.hash.substr(1);a="safari"===a?"eael-safari":a;var i=!1,t=e.find(".eael-adv-accordion"),l=e.find(".eael-accordion-header"),s=t.data("accordion-type"),r=t.data("toogle-speed"),o=t.data("custom-id-offset");if(a&&l.each((function(){n(this).attr("id")==a&&(i=!0,n(this).addClass("show active"),n(this).next().slideDown(r))})),!1===i&&l.each((function(){n(this).hasClass("active-default")&&(n(this).addClass("show active"),n(this).next().slideDown(r))})),l.unbind("click"),l.click((function(e){e.preventDefault();var a=n(this);"accordion"===s?a.hasClass("show")?(a.removeClass("show active"),a.next().slideUp(r)):(a.parent().parent().find(".eael-accordion-header").removeClass("show active"),a.parent().parent().find(".eael-accordion-content").slideUp(r),a.toggleClass("show active"),a.next().slideToggle(r)):a.hasClass("show")?(a.removeClass("show active"),a.next().slideUp(r)):(a.addClass("show active"),a.next().slideDown(r)),ea.hooks.doAction("widgets.reinit",a.parent()),ea.hooks.doAction("ea-advanced-accordion-triggered",a.next())})),void 0!==a&&a&&!ea.elementStatusCheck("eaelAdvancedAccordionScroll")){var c=o?parseFloat(o):0;n("html, body").animate({scrollTop:n("#"+a).offset().top-c},300)}}))}))}]);