"use strict";

$(function () {
	// -- Common data BEGIN
	var breakpoints = {
		xl: 1200,
		lg: 992,
		mb: 768,
		sm: 576
	};
	var isIE = void 0;
	// -- Common data END


	// -- Check IE version BEGIN
	var checkIeVersion = function checkIeVersion() {
		if (navigator.appName == 'Microsoft Internet Explorer') {
			var userAgent = navigator.userAgent;
			var regV = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");

			if (regV.exec(userAgent) !== null) {
				isIE = parseFloat(RegExp.$1);
			}
		} else if (navigator.appName == "Netscape") {
			/// in IE 11 the navigator.appVersion says 'trident'
			/// in Edge the navigator.appVersion does not say trident
			if (navigator.appVersion.indexOf('Trident') === -1) isIE = false;else isIE = true;
		}

		if (isIE) {
			$("head").append("<link rel='stylesheet' href='css/styles-ie.min.css'>");
		}
	};
	// -- Check IE version END


	// -- Preloader BEGIN
	var preloader = function preloader() {
		var preloaderWrapper = $(".preloader");
		var preloaderLogo = $('.preloader__logo-img');
		var preloaderLogoAnimationEl = document.querySelector('.preloader__logo-img');

		var delayAfterAnimation = 1000;
		var animationDuration = 1700;

		var animationLogo = function animationLogo() {
			var animationProperty = {
				"ease": "easeLinear",
				"strokeWidth": 1,
				"strokeOpacity": 1,
				"strokeColor": "#fff",
				"strokeCap": "squserAgentre"
			};
			if ($(window).width() < breakpoints.sm) animationProperty.strokeWidth = 3;

			var preloaderLogoAnimation = new LazyLinePainter(preloaderLogoAnimationEl, animationProperty);
			preloaderLogoAnimation.paint();

			setTimeout(function () {
				preloaderLogo.addClass("svg-hide");
			}, animationDuration - 50);

			setTimeout(function () {
				preloaderWrapper.addClass("preloader_hide");
			}, animationDuration + delayAfterAnimation);
		};

		var animationLogoIe = function animationLogoIe() {
			setTimeout(function () {
				preloaderLogo.addClass("svg-ie_show");
			}, 500);

			setTimeout(function () {
				preloaderLogo.addClass("svg-ie_hide");
				preloaderWrapper.addClass("preloader_hide");
			}, 1600);
		};

		//Initialization BEGIN
		if (isIE) animationLogoIe();else animationLogo();
		//Initialization END
	};
	// -- Preloader END


	// -- Form elements BEGIN
	var formElements = function formElements() {
		//Set fields states BEGIN
		var setFieldsFocus = function setFieldsFocus() {
			var fields = $(".form__field");

			if (fields.length) {
				fields.focus(function () {
					$(this).addClass("active");
				});

				fields.blur(function () {
					if (!$(this).val()) $(this).removeClass("active");
				});
			}
		};
		//Set fields states END


		//Auto height textarea BEGIN
		var autoHeightTextarea = function autoHeightTextarea() {
			var textarea = $("textarea");

			if (textarea.length) {
				autosize(textarea);
			}
		};
		//Auto height textarea END


		//Initialization BEGIN
		setFieldsFocus();
		autoHeightTextarea();
		//Initialization END
	};
	// -- Form elements END


	//Popups BEGIN
	var popups = function popups() {
		var btnsShowPopups = $(".btn-popup");
		var btnsHidePopups = $(".popup__close");
		var popups = $(".popup");

		if (!!btnsShowPopups && !!popups) {
			btnsShowPopups.click(function (e) {
				e.preventDefault();

				var key = $(this).attr("data-popup-key");
				var popup = $(".popup[data-popup-key=" + key + "]");

				if (!!popup) {
					popups.removeClass("active");
					popup.addClass("active");
				}
			});
		}

		if (!!btnsHidePopups) {
			btnsHidePopups.click(function () {
				popups.removeClass("active");
			});
		}
	};
	//Popups END


	// -- Initialization work functions BEGIN
	var initializationFunctions = function initializationFunctions() {
		checkIeVersion();
		preloader();
		formElements();
		popups();
	};
	initializationFunctions();
	// -- Initialization work functions END
});