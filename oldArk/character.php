<?php

if(isset($_SESSION['character'])) {
	header('Location: http://localhost/Ark3/viewcharacter.php');
} else {
	header('Location: http://localhost/Ark3/createcharacter.php');
}

?>