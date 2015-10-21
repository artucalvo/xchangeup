<?php 
/*
 * A Design by W3layouts
Author: W3layouts
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
 *
 */
include "app/config.php";
include "app/detect.php";

$lang = '';
if(isset($_GET['lang'])) { 
	$lang = "/?lang=".$_GET['lang'];
}

if ($page_name=='') {
	include $browser_t.'/index.html'.$lang;
	}
elseif ($page_name=='privacy.html') {
	include 'privacy.html'.$lang;
	}
elseif ($page_name=='terms.html') {
	include 'terms.html'.$lang;
	}
else
	{
		include $browser_t.'/index.html'.$lang;
	}

?>
