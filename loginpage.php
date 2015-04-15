<?php include 'includes/header.php'; ?>

<?php include 'includes/header.php'; ?>

<?php
if (!isset($_COOKIE)) {
  session_start();
}
$login_display = '<div class="alert alert-info center-text"><p>Please Log In</p></div>';
//Make sure form is filled out
if(!empty($_POST['user']) AND (!empty($_POST['pass']))) {
    try {
    //Set and trim variables for login
    $username = trim($_POST['user']);
    $plaintext_password = trim($_POST['pass']);
    //Query database and set variable
    $query = "SELECT id, username, password, email, avatar FROM ark3_user 
              WHERE username = '$username'";
    $results = $dbc->prepare( $query );
    $results->execute();
    //Set variable for data
    $data = $results->fetch(PDO::FETCH_ASSOC);
    //Make sure user is in database
    if($data != FALSE) {
      //Set variable to hashed password
      $hashed_password = $data['password'];
      //Verify password
      if (password_verify($plaintext_password, $hashed_password)) {
        //Log in user
        $login_display = '<div class="alert alert-success center-text"><p>Successfully logged in!</p></div>';
        //Set session variables (Unused as of now)
        //$_SESSION['id'] = $data['id'];
        //$_SESSION['username'] = $data['username'];
        //$_SESSION['email'] = $data['email'];
        //$_SESSION['avatar'] = $data['avatar'];
        //Set cookies
        setcookie('id', $data['id'], time() + (60 * 60 * 24 * 30));    // expires in 30 days
        setcookie('username', $data['username'], time() + (60 * 60 * 24 * 30));  // expires in 30 days
        setcookie('email', $data['email'], time() + (60 * 60 * 24 * 30));  // expires in 30 days
        setcookie('avatar', $data['avatar'], time() + (60 * 60 * 24 * 30));  // expires in 30 days
        //Redirect to homepage
        $home_url = 'http://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) . '/index.php';
        header('Location: ' . $home_url);
      } else {
        $login_display = '<div class="alert alert-danger center-text"><p>Password incorrect.</p></div>';
      }
    } else {
      $login_display = '<div class="alert alert-danger center-text"><p>Username incorrect.</p></div>';
    }
  } catch (Exception $e) {
    //Print error message and kill script
    echo $e->getMessage();
    die();
  }
}
?>

<div class="container">
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <form class="login-form" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <div>
          <?php echo $login_display; ?>
        </div>
        <div class="form-group">
          <label class="sr-only" for="user">Username</label> 
          <input class="form-control" placeholder="Your Username" name="user" id="user" type="text">
        </div>

        <div class="form-group">
          <label class="sr-only" for="pass">Password</label> 
          <input class="form-control" placeholder="Your Password" name="pass" id="pass" type="password">
        </div>

        <div class="form-group">
          <button class="btn btn-success btn-block" type="submit">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</div>


<?php include 'includes/footer.php'; ?>