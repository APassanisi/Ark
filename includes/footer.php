<?php 

if(isset($_COOKIE['username'])) {
  $footer_display = 'Cookie :' . $_COOKIE['username'] . ', '; 
} else {
  $footer_display = 'Cookie not set, ';
}

?>

<footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-offset-3 centered-text">
        <?php echo $footer_display; ?>
      </div>
    </div>
  </div>
</footer>

   <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
   <script src="js/jquery.powertip.min.js"></script>
   <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

</body>
</html>