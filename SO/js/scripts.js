"use strict";$((function(){const t='\n\t\t<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 492 492" xml:space="preserve">\n\t\t\t<g>\n\t\t\t\t<g>\n\t\t\t\t\t<path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124 c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844 L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412 c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008 c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788 C492,219.198,479.172,207.418,464.344,207.418z"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</svg>\n\t',e=function(t){let e="";const n=t.val(),s=t.val().length;let i=0;for(let t=0;t<s;t++){const s=n.substring(t,t+1);/[0-9]/.test(s)?e+=s:i||(i=1)}t.val(e),t.focus()},n=function(t,e,n,s){if(t.length&&n.length&&"number"==typeof e){const i=t.find("li").length;let l,a,o=1;if(i>e){n.show(),l=t.find("li").splice(e);const i=document.createElement("ul");if(i.append(...l),t.append(i),s){n.find("span").text(l.length)}}a=n.text(),n.click((function(){const e=t.find("ul");t.find("ul").slideToggle(),"block"==e.css("display")&&o?(n.text("Скрыть"),o=0):(n.text(a),o=1)}))}},s={list:$(".wrap-customer-data-bar .selected-products-list"),length:1,btn:$(".wrap-customer-data-bar .btn-view-all")},i=()=>{$(window).width()<575||$(window).width()>991?n(s.list,s.length,s.btn):(()=>{const t=$(".wrap-customer-data-bar .selected-products-list");t.length&&t.mCustomScrollbar({theme:"dark"})})()},l=()=>{const t=$(".mobile-menu .has-dropdown .submenu-dropdown-title");t.length&&t.click((function(){const e=$(this).next("ul");t.removeClass("submenu-dropdown-title_active"),$(this).addClass("submenu-dropdown-title_active").closest(".has-dropdown").siblings().find(".submenu-dropdown").slideUp(400),"none"!==e.css("display")?(e.slideUp(400),t.removeClass("submenu-dropdown-title_active")):e.slideDown(400)}))},a=()=>{!function(){const t=$(".mobile-menu");let e={extensions:["position-front"],navbar:{title:""}};if(t.length){t.mmenu(e);const n=t.data("mmenu"),s=$(".header-center-line .wrap-menu-btn .icon"),i=$(".mobile-menu .btn-close"),l=$(".mobile-menu_header a");s.click((function(){n.open(),s.toggleClass("is-active")})),i.click((function(){n.close(),s.toggleClass("is-active")})),l.click((function(){n.close(),s.toggleClass("is-active")}));const a=$(".mobile-menu .title-dropdown-menu"),o=$(".mobile-menu .mm-panels> .mm-panel:not(:first-child)");a.length&&o.each((function(){const t=a.clone(),e=i.clone();$(this).prepend(t).prepend(e)})),o.find(".btn-close").click((function(){n.close(),s.toggleClass("is-active")}))}}(),function(){const t=$(".mobile-menu .mm-panels > div:first-child ul li .mm-btn");t.length&&t.click((function(){$(this).parent().siblings().removeClass("active"),$(this).parent().addClass("active")}))}(),l()},o=()=>{const t=$(".list-brands ul li a"),e=$(".list-colors li a"),n=$(".list-sizes li a");function s(t){t.length&&t.click((function(t){t.preventDefault(),$(this).toggleClass("active")}))}const i=$(".aside .list-brands .wrap-checkbox input[type=checkbox]");i.length&&i.change((function(){$(this).prop("checked")?$(this).parent().next("ul").find("a").addClass("active"):$(this).parent().next("ul").find("a").removeClass("active")})),t.length&&t.click((function(t){t.preventDefault(),$(this).toggleClass("active");const e=$(this).closest("ul").prev("div").find("input[type=checkbox]"),n=$(this).closest("ul").find("a"),s=[];for(let t=0;t<n.length;t++)s[t]=n.eq(t).hasClass("active");s.every((function(t){return 1==t}))?e.prop("checked",!0):e.prop("checked",!1)})),s(e),s(n)},r=()=>{const t=$(".aside .wrap-range .range"),n=$(".aside .wrap-fields input"),s=$(".aside .wrap-range .field-min"),i=$(".aside .wrap-range .field-max"),l=$(".aside .wrap-range .range").attr("data-max-value");t.length&&t.slider({range:!0,min:0,max:l,values:[0,l],slide:function(t,e){const n=(""+e.values[0]).split(""),l=(""+e.values[1]).split("");n.length>3&&n.splice(-3,0," "),l.length>3&&l.splice(-3,0," "),s.val(n.join("")),i.val(l.join(""))}}),n.length&&n.on("keyup",(function(){const n=$(this),a=+n.val().replace(/\D+/g,"");e(n),t.slider("option","values",[s.val().replace(/\D+/g,""),i.val().replace(/\D+/g,"")]),n.hasClass("field-max")&&a>l?n.val(l):n.hasClass("field-min")&&a>l&&n.val(0)}))},c=()=>{o(),r(),(()=>{const t=$(".btn-show-filter"),e=$(".btn-hide-filter"),n=$(".wrap-aside");t.length&&e.length&&n.length&&(t.click((function(){$("html").addClass("fix-page"),n.addClass("aside-active")})),e.click((function(){$("html").removeClass("fix-page"),n.removeClass("aside-active")})))})()},d=()=>{const t=$(".product-card-images .thumbnails-images"),e=$(".product-card-images .main-image"),n=t.find(".wrap-img"),s=e.find(".wrap-img");n.length&&s.length&&n.click((function(){t.find("cur-image");const e=$(this).index();n.removeClass("cur-image").eq(e).addClass("cur-image"),s.removeClass("cur-image").eq(e).addClass("cur-image")}))},p=()=>{d(),(()=>{const e=$(".description-slider"),n={dots:!1,arrows:!0,appendArrows:$(".wrap-description-slider .wrap-slider-arrows"),appendDots:$(".wrap-description-slider .wrap-slider-dots"),speed:550,slidesToShow:4,prevArrow:`<span class="arrow-prev">${t}</span>`,nextArrow:`<span class="arrow-next">${t}</span>`,infinite:!1,variableWidth:!0,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:2,dots:!0,arrows:!1}}]};e.length&&e.slick(n)})(),(()=>{const t=$(".wrap-comments-count"),e=$(".testimonials-card");t.length&&e.length&&t.click((function(){const t=e.offset().top;$([document.documentElement,document.body]).animate({scrollTop:t},500)}))})()},h=()=>{const t=$(".wrap-aside .filter-group_head.btn-dropdown");t.length&&t.click((function(){const t=$(this),e=t.next("ul");t.find(".icon-dropdown").toggleClass("icon-dropdown-active"),e&&e.slideToggle(400)}))},u=()=>{const t=$(".wrap-aside .wrap-checkbox .btn-dropdown");t.length&&t.click((function(){const t=$(this),e=t.parent().next("ul");t.toggleClass("btn-dropdown-active"),e&&e.slideToggle(400)}))},w=()=>{const t=$(".section-tabs .tab-btn");t.length&&t.click((function(){if(!$(this).hasClass("cur-tab-btn")){const t=$(this).attr("data-tab-key");$(this).closest(".section-tabs").find(".tab-btn, .tab-content").removeClass("cur-tab-btn cur-tab-content"),$(this).addClass("cur-tab-btn").closest(".section-tabs").find(`div[data-tab-key=${t}]`).addClass("cur-tab-content")}}))},g=()=>{const t=$(".wrap-product-count .btn-counter-less"),e=$(".wrap-product-count .btn-counter-plus");$(".wrap-product-count input");function n(t,e){const n=t.parent().find("input");let s=n.val();"less"===e&&s>1?n.val(+s-1):"plus"===e&&n.val(+s+1)}t.length&&e.length&&(t.click((function(){n($(this),"less")})),e.click((function(){n($(this),"plus")})))},m=()=>{$(".field-cut-letters").on("keyup",(function(){e($(this))}))},f=()=>{let t=$('img[src$=".svg"]');t.length&&t.each((function(){let t=jQuery(this),e=t.attr("id"),n=t.attr("class"),s=t.attr("src");jQuery.get(s,(function(s){let i=jQuery(s).find("svg");void 0!==e&&(i=i.attr("id",e)),void 0!==n&&(i=i.attr("class",n+" replaced-svg")),(i=i.removeAttr("xmlns:a")).find("> g").removeAttr("clip-path"),t.replaceWith(i)}),"xml")}))},b=$("input[type=tel]");b.length&&b.mask("+375 00 000-00-00");const v=()=>{const t=$(".wrap-field-clear"),e=t.find(".btn-clear-field");t.length&&e.length&&e.click((function(){$(this).closest(".wrap-field-clear").find("input").val("")}))},x=()=>{const t=$("select");t.length&&t.each((function(){const t=$(this).attr("placeholder");$(this).select2({dropdownParent:$(this).parent(),placeholder:t})}))},k=()=>{const t=$("input");t.length&&t.each((function(){const t=$(this).attr("data-placeholder-mobile");t&&$(this).attr("placeholder",t)}))},C=()=>{v(),x(),$(".wrap-field-date input").datepicker({format:"dd.mm.yyyy",months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],days:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],daysShort:["Вск","Пнд","Втр","Срд","Чтв","Птн","Сбт"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]}),$(window).width()<575&&k()},y=()=>{const t=$(".form-validate");t.length&&t.each((function(){$(this).validate({rules:{firstname:"required",lastname:"required",country:"required",street:"required",message:"required",birthday:"required",noempty:"required",thememsg:"required",selectthememsg:"required",house:{required:!0,minlength:1,maxlength:15,number:!0},housing:{required:!0,minlength:1,maxlength:15,number:!0},apartment:{required:!0,minlength:1,maxlength:15,number:!0},username:{required:!0,minlength:2},password:{required:!0,minlength:5},confirm_password:{required:!0,minlength:5,equalTo:".password"},number:{required:!0,minlength:1,maxlength:15,number:!0},phone:{minlength:1},email:{email:!0,equalTo:"Неверный формат"},agree:"required"}})}))},q=()=>{const t=$(".posts-news-items .news-item-banner .shop-name");t.length&&t.each((function(){const t=$(this).text().split(" ");$(this).text(""),t.forEach(t=>{$(this).append(`<span>${t}</span>`)})}))},T=()=>{const t=$(".dropdown-btn-click");t.length&&t.click((function(){console.log("AWfsd0"),$(this).parent().find(".dropdown-label").toggleClass("el-show")}))},A=()=>{const t=$(".btn-close-dropdown");t.length&&t.click((function(){$(this).parent().removeClass("el-show")}))},S=()=>{const t=$(".wrap-personal-data .personal-data-history-orders .delivery-list");let e=5;$(window).width()>575&&$(window).width()<767?e=3:$(window).width()>767&&$(window).width()<991?e=2:$(window).width()>991&&$(window).width()<1199&&(e=4),t.length&&t.each((function(){const t=$(this).find("li"),n=t.length;if(n>e){const s=n-e;for(let s=e;s<n;s++)t.eq(s).addClass("hide-item");const i=t.eq(0).clone().empty().append(`<span class='other-product'>+ ${s}</span>`);$(this).append(i)}}));const n=$("\n\t\t\t.wrap-personal-data\n\t\t\t.personal-data-history-orders\n\t\t\t.delivery-list\n\t\t\t.other-product").parent();n.length&&n.click((function(){$(this).hide().parent().find("li").removeClass("hide-item")}))},D=()=>{const t=$(".wrap-personal-area-bar .wrap-dropdown-tabs .wrap-cur-tab"),e=t.next("div"),n=e.find(".tab-btn");t.length&&e.length&&(t.click((function(){$(this).toggleClass("wrap-cur-tab_active")})),n.click((function(){const e=$(this).text();t.removeClass("wrap-cur-tab_active").text(e)})))},_=()=>{const t=$(".wrap-icon-like");t.length&&t.click((function(){$(this).toggleClass("liked")}))};f(),(()=>{const e=$(".banner-slider"),n={dots:!0,arrows:!0,appendDots:$(".banner .wrap-slider-dots"),appendArrows:$(".banner .wrap-slider-arrows"),speed:900,prevArrow:`<span class="arrow-prev">${t}</span>`,nextArrow:`<span class="arrow-next">${t}</span>`,slidesToShow:1,autoplay:!0,autoplaySpeed:7e3};e.length&&e.slick(n)})(),(()=>{const t=$(".brand-slider"),e={dots:!0,arrows:!1,appendDots:$(".row-brands .wrap-slider-dots"),speed:900,slidesToShow:3};t.length&&$(window).width()<767&&t.slick(e)})(),(()=>{const t=$(".index-products-cards-slider .slider"),e={dots:!0,arrows:!1,appendDots:$(".index-products-cards-slider .wrap-slider-dots"),speed:600,slidesToShow:1,variableWidth:!0,centerMode:!0,infinite:!1};t.length&&$(window).width()<575&&t.slick(e)})(),$(window).width()<767&&a(),h(),u(),c(),p(),(()=>{const t={list:$(".wrap-all-testimonials .comments-list"),length:2,btn:$(".wrap-all-testimonials .btn-view-all")};n(t.list,t.length,t.btn,!0);const e={list:$(".wrap-aside .list-category"),length:6,btn:$(".wrap-aside .list-category").next(".btn-view-all")};n(e.list,e.length,e.btn,!0)})(),w(),C(),g(),m(),(()=>{const t=$(".dropdown-cart .selected-products-list");t.length&&t.mCustomScrollbar({theme:"dark"})})(),T(),A(),(()=>{const e=$(".wrap-article-slider .article-slider"),n={dots:!1,arrows:!0,appendArrows:$(".wrap-article-slider .wrap-slider-arrows"),speed:400,prevArrow:`<span class="arrow-prev">${t}</span>`,nextArrow:`<span class="arrow-next">${t}</span>`,slidesToShow:1,infinite:!1};e.length&&e.slick(n);const s=$(".wrap-article-slider .wrap-slider-numbers");let i=$(".wrap-article-slider .slider-item").length,l=$(".wrap-article-slider .slider-item.slick-current").index()+1;const a=$(".wrap-article-slider .slider-item-length"),o=$(".wrap-article-slider .cur-slider-pos");let r;s.length&&(i<10&&(i="0"+i),a.text(i),l<10&&(l="0"+l),o.text(l),e.on("beforeChange",(function(t,e,n,s){let i=s+1;i<10&&(i="0"+i),clearTimeout(r),r=setTimeout((function(){o.text(i)}),200)})))})(),S(),D(),_(),setTimeout((function(){(()=>{$(".window-modal").iziModal({transitionIn:"fadeIn",transitionOut:"fadeOut",bodyOverflow:!0,overlayClose:!1,onOpening:function(){$("html").addClass("fix-page"),$("body").addClass("page-scroll");const t=$(".modal-content");$(document).mouseup((function(e){t.is(e.target)||0!==t.has(e.target).length||($(".window-modal.isAttached").iziModal("close"),$("html").removeClass("fix-page"),$("body").removeClass("page-scroll"))}))}});const t=$(".window-modal .btn-close");t.length&&t.click((function(){$("html").removeClass("fix-page"),$("body").removeClass("page-scroll")}))})(),y()}),50),i(),function(){const t=$(".preloader");t.length&&$(document).ready((function(){setTimeout((function(){t.fadeOut(400)}),600)}))}(),q()}));