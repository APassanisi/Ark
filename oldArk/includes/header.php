<?php require_once('includes/connectvars.php'); ?>
<?php require_once('includes/appvars.php'); ?>
<?php require_once('includes/database.php'); ?>
<?php

if (!isset($_COOKIE)) {
  session_start();
}

if(isset($_COOKIE['username'])) {
  $displayed_menu = 
 '<li>
      <a href="character.php">Character</a>
  </li>

  <li class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#">Account
      <span class="caret"></span></a>
  
      <ul class="dropdown-menu">
  
          <li>
              <a href="viewprofile.php">Your Profile</a>
          </li>
  
          <li>
              <a href="editprofile.php">Edit Profile</a>
          </li>
  
          <li>
              <a href="logout.php">Log Out</a>
          </li>
  
      </ul>
  </li>';
} else {
  $displayed_menu = 
   '<li>
        <a href="loginpage.php">Log In</a>
    </li>

    <li>
        <a href="signup.php">Sign Up</a>
    </li>';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta content="" name="description">
    <meta content="" name="author">
    <link href="favicon.ico" rel="icon">
    <title><?php echo $page ?> | The Ark </title>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/jquery.powertip.min.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
    <link href="css/charactercreator.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
    <div class="container">
      <nav class="navbar navbar-default">
        <div class="navbar-header">
            <button class="navbar-toggle collapsed" data-target="#navbar" data-toggle="collapse" type="button">
                <span class="sr-only">Toggle navigation</span> 
                <span class="glyphicon glyphicon-chevron-down"></span>
            </button>
        </div>

        <div class="navbar-collapse collapse" id="navbar">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="About.php">About</a>
                </li>

                <li>
                    <a href="Guide.php">Guide</a>
                </li>

                <li>
                    <a href="index.php">Home</a>
                </li>
                    <?php echo $displayed_menu; ?>
            </ul>
        </div>
      </nav>
    </div>