/* Scroll */
	jQuery(document).ready(function($) {
		$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
		});
	});
	
	
/* Google Analytics */
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-91130067-1', 'auto');
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
	
	
    function loaded() {
	
		/* Social buttons */
		$('#socialTwitter').mouseenter(function() {
		  $('#socialTwitter').attr("src","images/twitterO.jpg");
		}).mouseleave(function() {	
		  $('#socialTwitter').attr("src","images/twitter.jpg");
		});
		
		$('#socialFacebook').mouseenter(function() {
		  $('#socialFacebook').attr("src","images/facebookO.jpg");
		}).mouseleave(function() {	
		  $('#socialFacebook').attr("src","images/facebook.jpg");
		});
		
	}