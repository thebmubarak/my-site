/*Acys bamif script.js 08.02.2023*/

function jsAnimate(h2s, inview, animate) {
	"use strict";
	
// define variables
	
// check if an element is in viewport
// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}
	
//initialize the default look with js so that it does not affect the look when script is disabled
	for (var i = 0; i < h2s.length; i++) {
		h2s[i].classList.add(animate);
	}
		
//call back function codes
	function callbackFunc() {
		for (var i = 0; i < h2s.length; i++) {
			if (isElementInViewport(h2s[i])) {
				h2s[i].classList.add(inview);
			}
		}
	}
	
	// listen for events
	window.addEventListener("load", callbackFunc);
	window.addEventListener("resize", callbackFunc);
	window.addEventListener("scroll", callbackFunc);
};

jsAnimate(document.querySelectorAll(".header-inner>p"), 'h2-inview', 'animate-h2');
jsAnimate(document.querySelectorAll(".sub-head"), 'h2-inview', 'animate-h2');
jsAnimate(document.querySelectorAll("#portfolio img"), 'p-card-inview', 'animate-p-card');
jsAnimate(document.querySelectorAll("#testimonial>div>div"), 't-card-inview', 'animate-t-card');
jsAnimate(document.querySelectorAll("#service>div>div"), 't-card-inview', 'animate-t-card');
jsAnimate(document.querySelectorAll("#process>div>div"), 't-card-inview', 'animate-t-card');
jsAnimate(document.querySelectorAll("#cta>div"), 't-card-inview', 'animate-t-card');
