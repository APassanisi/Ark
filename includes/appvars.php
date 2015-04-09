<?php
  // Define application constants
  define('ARK3_UPLOADPATH', 'img/');
  define('ARK3_MAXFILESIZE', 32768);      // 32 KB
  define('ARK3_MAXIMGWIDTH', 120);        // 120 pixels
  define('ARK3_MAXIMGHEIGHT', 120);       // 120 pixels

  if (!isset($_SESSION)) {
  session_start();
  }

?>