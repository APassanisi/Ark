<?php
$dbc = new PDO( DB_HOST, DB_USER, DB_PASSWORD );
$dbc->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
?>