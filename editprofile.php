<?php include 'includes/header.php'; ?>
<?php require_once('includes/connectvars.php'); ?>
<?php require_once('includes/appvars.php'); ?>
<?php require_once('includes/database.php'); ?>

<!-- Password PHP -->
<?php 

$edit_display = '<div class="alert alert-info center-text"><p>Change your stuff!</p></div>';


if (isset($_POST['submitPassword']) && isset($_SESSION['username'])) {
    //Grab form contents and username from session
    $username = $_SESSION['username'];
    $old_password = trim($_POST['OldPassword']);
    $old_password_confirm = trim($_POST['ConfirmOldPassword']);
    $new_password = trim($_POST['NewPassword']);
    $new_password_confirm = trim($_POST['ConfirmNewPassword']);
    //Check old passwords
    if ($old_password == $old_password_confirm) {
        //Check new passwords
        if($new_password == $new_password_confirm) {
            try {
                //Query database for old password
                $query = "SELECT password 
                          FROM ark3_user 
                          WHERE username = '$username'";
                $results = $dbc->prepare( $query );
                $results->execute();
                //Set variable for data
                $data = $results->fetch(PDO::FETCH_ASSOC);
                $original_password = $data['password'];
            } catch (Exception $e) {
                //Print error message
                echo $e->getMessage();
            }
            //Check if old password is correct
            if(password_verify($old_password, $original_password)) {
                try {
                    //Hash new password
                    $new_password_hash = password_hash($new_password, PASSWORD_DEFAULT);
                    //Update database with new password
                    $query2 = "UPDATE ark3_user 
                               SET password='$new_password_hash' 
                               WHERE username='$username'";
                    $results2 = $dbc->prepare( $query2 );
                    $results2->execute();
                    $edit_display = '<div class="alert alert-success center-text"><p>Your password has been changed.</p></div>';
                } catch (Exception $e) {
                    //Print error message
                    echo $e->getMessage();
                }   
            } else {
                $edit_display = '<div class="alert alert-danger center-text"><p>Incorrect password.</p></div>';
            }         
        } else {
            $edit_display = '<div class="alert alert-danger center-text"><p>New passwords do not match.</p></div>';
        }
    } else {
        $edit_display = '<div class="alert alert-danger center-text"><p>Old passwords do not match.</p></div>';
    }
}

?>

<!-- Avatar PHP -->

<?php 

  if (isset($_POST['submitAvatar'])) {
    // Grab the avatar
    $username = $_SESSION['username'];
    $avatar = $_FILES['avatar']['name'];
    $avatar_type = $_FILES['avatar']['type'];
    $avatar_size = $_FILES['avatar']['size']; 

    if (!empty($avatar)) {
      if ((($avatar_type == 'image/gif') || ($avatar_type == 'image/jpeg') || ($avatar_type == 'image/pjpeg') || ($avatar_type == 'image/png'))
        && ($avatar_size > 0) && ($avatar_size <= ARK3_MAXFILESIZE)) {
        if ($_FILES['avatar']['error'] == 0) {
          // Move the file to the target upload folder
          $target = ARK3_UPLOADPATH . $avatar;
          if (move_uploaded_file($_FILES['avatar']['tmp_name'], $target)) {
            try {
              // Write the data to the database
              $query = "UPDATE ark3_user SET avatar='$avatar' WHERE username='$username'";
              $stmt = $dbc->prepare( $query );
              $stmt->execute();

              // Confirm success with the user
              $edit_display = '<div class="alert alert-success center-text"><p>You have changed your avatar image. <br> ' . 
                              'Please log in again to see changes. <br> <br>' . 
                              '<img style="width: 32px; max-height: 32px;" src="' . 
                              ARK3_UPLOADPATH . $avatar . '" alt="Avatar image"></p>' . 
                              '</div>';
              // Clear the form
              $avatar = "";

              $dbc->connection = null;
            } catch ( PDOException $e ) {
              echo "Exception: " . $e->getMessage();
            }
          }
          else {
            $edit_display = '<div class="alert alert-danger center-text"><p>Sorry, there was a problem uploading your screen shot image.</p></div>';
          }
        }
      }
      else {
        $edit_display = '<div class="alert alert-danger center-text"><p>The screen shot must be a GIF, JPEG, or PNG image file no greater than ' . 
        (ARK3_MAXFILESIZE / 1024) . ' KB in size.</p></div>';
      }

      // Try to delete the temporary screen shot image file
      @unlink($_FILES['avatar']['tmp_name']);
    }
    else {
      $edit_display = '<div class="alert alert-danger center-text"><p>Please enter all of the information to add your avatar.</p></div>';
    }
  }


?>

<!-- HTML  -->

<div class="container">
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
    <div>
        <?php echo $edit_display; ?>
    </div>
      <div class="panel-group" id="accordion">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title"><a data-parent="#accordion" data-toggle=
            "collapse" href="#collapseOne">Change your password.</a></h4>
          </div>

          <div class="panel-collapse collapse" id="collapseOne">
            <div class="panel-body">
              <div class="">
                <form action="<?php echo $_SERVER['PHP_SELF']; ?>"
                method="post">
                  <div class="well well-sm">
                    <strong><span class=
                    "glyphicon glyphicon-asterisk"></span>Required
                    Field</strong>
                  </div><label for="InputPassword">Old Password</label>

                  <div class="input-group">
                    <input class="form-control" id="OldPassword" name=
                    "OldPassword" placeholder="Old Password" type=
                    "password"><span class="input-group-addon"><span class=
                    "glyphicon glyphicon-asterisk"></span></span>
                  </div><label for="ConfirmPassword">Confirm Old
                  Password</label>

                  <div class="input-group">
                    <input class="form-control" id="ConfirmOldPassword" name=
                    "ConfirmOldPassword" placeholder="Confirm Old Password"
                    required="" type="password"><span class=
                    "input-group-addon"><span class=
                    "glyphicon glyphicon-asterisk"></span></span>
                  </div><label for="InputPassword">New Password</label>

                  <div class="input-group">
                    <input class="form-control" id="NewPassword" name=
                    "NewPassword" placeholder="New Password" type=
                    "password"><span class="input-group-addon"><span class=
                    "glyphicon glyphicon-asterisk"></span></span>
                  </div><label for="ConfirmPassword">Confirm New
                  Password</label>

                  <div class="input-group">
                    <input class="form-control" id="ConfirmNewPassword" name=
                    "ConfirmNewPassword" placeholder="Confirm New Password"
                    type="password"><span class=
                    "input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>
                  </div><br>
                  <button class="btn btn-success btn-block" name="submitPassword" type=
                  "submit">Submit</button>
                </form>
              </div>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title"><a data-parent="#accordion" data-toggle=
              "collapse" href="#collapseTwo">Change your avatar.</a></h4>
            </div>

            <div class="panel-collapse collapse" id="collapseTwo">
              <div class="panel-body">
                <div class="">
                  <form action="<?php echo $_SERVER['PHP_SELF']; ?>"
                  enctype="multipart/form-data" method="post">
                    <input name="MAX_FILE_SIZE" type="hidden" value=
                    "<?php echo ARK3_MAXFILESIZE; ?>"> <label for=
                    "avatar">Avatar image:</label> <input id="avatar" name=
                    "avatar" type="file">
                    <hr>
                    <button class="btn btn-success btn-block" name="submitAvatar" type=
                    "submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<?php include 'includes/footer.php'; ?>