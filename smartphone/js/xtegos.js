/* Scroll */
	jQuery(document).ready(function($) {
		$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
		});
	});
	
	$(document).ready(function() {
		$().UItoTop({ easingType: 'easeOutQuart' });
	});
	
	addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); }

	//	The menu on the left
	$(function() {
		$('nav#menu-left').mmenu();
	});
	
	
/* Google Analytics */
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-68684866-1', 'auto');
	ga('send', 'pageview');

	
/* Cookies warning */
	function controlcookies() {
		localStorage.controlcookie = (localStorage.controlcookie || 0);
		localStorage.controlcookie++; // incrementamos cuenta de la cookie
		cookie1.style.display='none'; // Esconde la política de cookies
	}

	
	/* Play audio with text-to-speech */
          function playSound(el, link) {
				  el.mp3 = new Audio(link);
				  el.mp3.play();
          }
	
/* Internationalization */
	var _ = function (string) {
		return string.toLocaleString();
	};
	function localizeHTMLTag(tagId) {
		tag = document.getElementById(tagId);
		tag.innerHTML = _(tag.innerHTML);
	}
	function getParameterValue(parameter) {
		parameter = parameter.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
		var regexS = "[\\?&]" + parameter + "=([^&#]*)";
		var regex = new RegExp(regexS);
		var results = regex.exec(window.location.href);
		if(results == null)
			return "";
		else
			return results[1];
	}
	function loaded() {
		var lang = getParameterValue("lang");
		if (lang != "") String.locale = lang;
		else {
		  var langCode = (window.navigator.userLanguage || window.navigator.language);
		  if (lang != "") lang = langCode.substring(0, 2);
		}
		document.title = _(document.title);
		localizeHTMLTag("cookieText");
		localizeHTMLTag("cookie2");
		localizeHTMLTag("item1");
		localizeHTMLTag("item2");
		localizeHTMLTag("item3");
		localizeHTMLTag("item4");
		localizeHTMLTag("subtitle");
		localizeHTMLTag("description");
		localizeHTMLTag("iosLink");
		localizeHTMLTag("androidLink");
		localizeHTMLTag("windowsLink");
		localizeHTMLTag("pic");
		localizeHTMLTag("feature1title");
		localizeHTMLTag("feature1description");
		localizeHTMLTag("feature2title");
		localizeHTMLTag("feature2description");
		localizeHTMLTag("feature3title");
		localizeHTMLTag("feature3description");
		localizeHTMLTag("samples");
		localizeHTMLTag("uksample");
		localizeHTMLTag("frsample");
		localizeHTMLTag("desample");
		localizeHTMLTag("pgsample");
		localizeHTMLTag("itsample");
		localizeHTMLTag("rusample");
		localizeHTMLTag("essample");
		localizeHTMLTag("husample");
		localizeHTMLTag("jpsample");
		localizeHTMLTag("footerText");
	}