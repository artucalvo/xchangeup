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

session_start();

$languages = array('es', 'en');

// handle language selection

if(isset($_GET['lang'])) { // Set session language is specified
  if(in_array($_GET['lang'], $languages)) {
    $_SESSION['lang'] = $_GET['lang'];
  }
  else { // Default language
    $_SESSION['lang'] = $languages[0];
  }
}

if ($page_name=='') {
	include $browser_t.'/index.html';
}
elseif ($page_name=='privacy.html') {
	include 'privacy.html';
}
elseif ($page_name=='terms.html') {
	include 'terms.html';
}
else {
	include $browser_t.'/index.html';
}

?>
