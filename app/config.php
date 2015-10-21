<?php
/*
 * A Design by W3layouts
Author: W3layouts
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
 *
 */
$current_page_uri = $_SERVER['REQUEST_URI']; // Full URL
$part_url = explode("/", $current_page_uri); // Discard what is before the /
$part_page_name = explode("?", end($part_url)); // Discard the parameters
$page_name = $part_page_name[0]; // Page name
$email_id = "info@xtegos.com";
?>