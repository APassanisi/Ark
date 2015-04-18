<?php $page = 'Sign Up' ?>

<?php include 'includes/header.php'; ?>

<?php 

if (isset($_POST['submit'])) {

    //Grab form contents
    $username = trim($_POST['Username']);
    $email = trim($_POST['InputEmail']);
    $confirmemail = trim($_POST['ConfirmEmail']);
    $password = trim($_POST['InputPassword']);
    $confirmpassword = trim($_POST['ConfirmPassword']);
    $password_hash = password_hash($password, PASSWORD_DEFAULT);
    $default_avatar = 'defaultavatar.jpg';

    //Ensure contents aren't empty
    if (!empty($username) && (!empty($email)) && (!empty($password))) {
        //Ensure email match
        if ($email == $confirmemail) {
            //Ensure passwords match
            if ($password == $confirmpassword) {

                try {
                    //Query database
                    $query = "INSERT INTO ark3_user (id, username, password, email, avatar) 
                              VALUES (0, '$username', '$password_hash', '$email', '$default_avatar')";
                    $stmt = $dbc->prepare( $query );
                    $stmt->execute();

                    //Clear form after success
                    $username = "";
                    $email = "";
                    $password = "";

                    //Close connection
                    $dbc->connection = null;

                    //Print success message
                    echo '<p class="col-md-6 col-md-offset-3 alert alert-success" role="alert">Thanks for signing up!</p>';

                } catch ( PDOException $e ) {
                //Print error message
                echo "Exception: " . $e->getMessage();
                } 

            } else {
            echo '<p class="col-md-6 col-md-offset-3 alert alert-danger" role="alert">Your entered passwords must match.</p>';
            }

        } else {
        echo '<p class="col-md-6 col-md-offset-3 alert alert-danger" role="alert">Your entered email addresses must match.</p>';
        }

    } else {
    echo '<p class="col-md-6 col-md-offset-3 alert alert-danger" role="alert">You must fill out all fields.</p>';
    }

}

?>


<div class="container">

    <div class="row">

        <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">

            <div class="col-md-6 col-md-offset-3">

                <h1 class="sign-up-header center-text">Sign Up!</h1>

                <div class="well well-sm">

                    <strong><span class="glyphicon glyphicon-asterisk"></span>Required Field</strong>

                </div>

                <div class="form-group">

                    <label for="Username">Desired Username</label>

                    <div class="input-group">

                        <input class="form-control" id="Username" name="Username" placeholder="Desired Username" required="" type="text">

                        <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>

                    </div>

                </div>

                <div class="form-group">

                    <label for="InputEmail">Enter Email</label>

                    <div class="input-group">

                        <input class="form-control" id="InputEmail" name="InputEmail" placeholder="Enter Email" required="" type="email">

                        <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>

                    </div>

                </div>

                <div class="form-group">

                    <label for="ConfirmEmail">Confirm Email</label>

                    <div class="input-group">

                        <input class="form-control" id="ConfirmEmail" name="ConfirmEmail"placeholder="Confirm Email" required="" type="email">

                        <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>

                    </div>

                </div>

                <div class="form-group">

                    <label for="InputPassword">Enter Password</label>

                    <div class="input-group">

                        <input class="form-control" id="InputPassword" name="InputPassword" placeholder="Enter Password" required="" type="password">

                        <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>

                    </div>

                </div>

                <div class="form-group">

                    <label for="ConfirmPassword">Confirm Password</label>

                    <div class="input-group">

                        <input class="form-control" id="ConfirmPassword" name="ConfirmPassword" placeholder="Confirm Password" required=""type="password">

                        <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>

                    </div>

                </div>

                <input class="btn btn-info pull-right" id="submit" name="submit" type="submit" value="Submit">

            </div>

        </form>

    </div>

</div>

<?php include 'includes/footer.php'; ?>