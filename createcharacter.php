<?php include 'includes/header.php'; ?>
<?php require_once('includes/connectvars.php'); ?>
<?php require_once('includes/appvars.php'); ?>
<?php require_once('includes/database.php'); ?>

<div class="container">

	<div class="row">

		<section class="progression alert alert-info col-xs-12">

			<img class="button-basic" src="img/gameicon/progress/progress-icons-basic.svg">

			<img class="button-detail" src="img/gameicon/progress/progress-icons-detail.svg">

			<img class="button-finalize" src="img/gameicon/progress/progress-icons-finalize.svg">

		</section>

		<section class="basic-options alert alert-info col-xs-6 col-sm-4 col-lg-3">

			<div class="button-container position-center">

				<div class="vertical-button-container">

					<div class="race-button-container">

						<img class="button-male" src="img/gameicon/basic/male.png">

						<img class="button-human" src="img/gameicon/basic/race/Race-Icons-Human.svg">

						<img class="button-robot" src="img/gameicon/basic/race/Race-Icons-Robot.svg">

						<img class="button-barbarian" src="img/gameicon/basic/race/Race-Icons-Barbarian.svg">

						<img class="button-dwarf" src="img/gameicon/basic/race/Race-Icons-Dwarf.svg">

						<img class="button-elf" src="img/gameicon/basic/race/Race-Icons-Elf.svg">

					</div>

					<div class="profession-button-container">

						<img class="button-female" src="img/gameicon/basic/female.png">

						<img class="button-warrior" src="img/gameicon/basic/profession/Profession-Icons-Warrior.svg">

						<img class="button-mage" src="img/gameicon/basic/profession/Profession-Icons-Mage.svg">

						<img class="button-thief" src="img/gameicon/basic/profession/Profession-Icons-Thief.svg">

						<img class="button-explorer" src="img/gameicon/basic/profession/Profession-Icons-Explorer.svg">

						<img class="button-detective" src="img/gameicon/basic/profession/Profession-Icons-Detective.svg">

					</div>

				</div>

			</div>

		</section>

		<section class="detail-options alert alert-info col-xs-6 col-sm-4 col-lg-3">

			<div class="button-container">

				<div class="hairstyle-container">

					<img class="button-hairstyle-left button-cycle" src="img/gameicon/left-arrow.svg">

					<img class="button-hairstyle" src="img/gameicon/detail/hairstyle.png">

					<img class="button-hairstyle-right button-cycle" src="img/gameicon/right-arrow.svg">

				</div>

				<div class="haircolor-container">

					<img class="button-haircolor-left button-cycle" src="img/gameicon/left-arrow.svg">

					<img class="button-haircolor" src="img/gameicon/detail/haircolor.png">

					<img class="button-haircolor-right button-cycle" src="img/gameicon/right-arrow.svg">

				</div>

				<div class="face-container">

					<img class="button-face-left button-cycle" src="img/gameicon/left-arrow.svg">

					<img class="button-face" src="img/gameicon/detail/face.png">

					<img class="button-face-right button-cycle" src="img/gameicon/right-arrow.svg">

				</div>

				<div class="clothescolor-container">

					<img class="button-clothescolor-left button-cycle" src="img/gameicon/left-arrow.svg">

					<img class="button-clothescolor" src="img/gameicon/detail/clothescolor.png">

					<img class="button-clothescolor-right button-cycle" src="img/gameicon/right-arrow.svg">

				</div>

				<div class="skincolor-container">

					<img class="button-skincolor-left button-cycle" src="img/gameicon/left-arrow.svg">

					<img class="button-skincolor" src="img/gameicon/detail/skincolor.png">

					<img class="button-skincolor-right button-cycle" src="img/gameicon/right-arrow.svg">

				</div>

				<div class="weapon-container">

					<img class="button-weapon-left button-cycle" src="img/gameicon/left-arrow.svg">

					<img class="button-weapon" src="img/gameicon/detail/weapon.png">

					<img class="button-weapon-right button-cycle" src="img/gameicon/right-arrow.svg">

				</div>

			</div>

		</section>

		<section class="finalize-options alert alert-info col-xs-6 col-sm-4 col-lg-3">

			<p>Finalize Options</p>

			<!--

			Name

			Bio

			Save

			-->

		</section>

		<section class="character alert alert-info col-xs-6 col-sm-4 col-lg-offset-1">

			<div class="svg-container hidden">

				<!-- Race (Body SVG) -->
				<div class="body-container">
					<?php include 'includes/svgrace.php'; ?>
				</div>

				<!-- Class (Clothes SVG) -->
				<!-- Warrior -->
				<div class="warrior-container">
					<?php include 'includes/svgwarrior.php'; ?>
				</div>

				<!-- Mage -->
				<div class="mage-container">
					<?php include 'includes/svgmage.php'; ?>
				</div>

				<!-- Thief -->
				<div class="thief-container">
					<?php include 'includes/svgthief.php'; ?>
				</div>

				<!-- Explorer -->
				<div class="explorer-container">
					<?php include 'includes/svgexplorer.php'; ?>
				</div>

				<!-- Detective -->
				<div class="detective-container">
					<?php include 'includes/svgdetective.php'; ?>
				</div>

			</div>

		</section>

		<section class="basic-info alert alert-info col-xs-12 col-sm-4 col-lg-3 col-lg-offset-1">

			<p class="raceDescription well well-sm"></p>

			<br>

			<p class="professionDescription well well-sm"></p>

		</section>

		<section class="detail-info alert alert-info col-xs-12 col-sm-4 col-lg-3 col-lg-offset-1">

<!-- 			<div class="inventory well well-sm">

				<div class="inventory-head">
					<p class="head-name"></p>
					<p class="head-ac"></p>
					<p class="head-agimod"></p>
				</div>

				<div class="inventory-chest">
					<p class="chest-name"></p>
					<p class="chest-ac"></p>
					<p class="chest-agimod"></p>
				</div>

				<div class="inventory-feet">
					<p class="feet-name"></p>
					<p class="feet-ac"></p>
					<p class="feet-agimod"></p>
				</div>

				<div class="inventory-weapon">
					<p class="weapon-name"></p>
					<p class="weapon-dmg"></p>
					<p class="weapon-ac"></p>
					<p class="weapon-agimod"></p>
				</div>

			</div> -->

			<div class="selected-item panel panel-default">
			    <div class="panel-body">
			        Click on an item to view details.
			    </div>
			</div>

			<div class="inventory list-group">
			    <a class="head head-name list-group-item"></a>
			    <a class="chest chest-name list-group-item"></a>
			    <a class="feet feet-name list-group-item"></a>
			    <a class="weapon weapon-name list-group-item"></a>
			</div>

		</section>

		<section class="finalize-info alert alert-info col-xs-12 col-sm-4 col-lg-3 col-lg-offset-1">

			<div class="stat-container">


				<div class="hp-ac-container">

					<div class="hp-display">
						<img class="hp-img" src="img/gameicon/stats/hp.svg">
					</div>

					<div class="ac-display">
						<img class="ac-img" src="img/gameicon/stats/ac.svg">
					</div>

				</div>

				<div class="stat-table-small hidden-sm hidden-md hidden-lg">

					<div class="stat-display">

						<img class="stat-str" src="img/gameicon/stats/str.jpg">

						<img class="stat-sta" src="img/gameicon/stats/sta.jpg">

						<img class="stat-agi" src="img/gameicon/stats/agi.jpg">

						<img class="stat-wit" src="img/gameicon/stats/wit.jpg">

						<img class="stat-per" src="img/gameicon/stats/per.jpg">

						<img class="stat-lck" src="img/gameicon/stats/lck.jpg">

					</div>

					<div class="stat-value">

						<img class="value-str" src="img/gameicon/stats/str.jpg">

						<img class="value-sta" src="img/gameicon/stats/sta.jpg">

						<img class="value-agi" src="img/gameicon/stats/agi.jpg">

						<img class="value-wit" src="img/gameicon/stats/wit.jpg">

						<img class="value-per" src="img/gameicon/stats/per.jpg">

						<img class="value-lck" src="img/gameicon/stats/lck.jpg">

					</div>

					<div class="statmod-value">

						<img class="value-strmod" src="img/gameicon/stats/str.jpg">

						<img class="value-stamod" src="img/gameicon/stats/sta.jpg">

						<img class="value-agimod" src="img/gameicon/stats/agi.jpg">

						<img class="value-witmod" src="img/gameicon/stats/wit.jpg">

						<img class="value-permod" src="img/gameicon/stats/per.jpg">

						<img class="value-lckmod" src="img/gameicon/stats/lck.jpg">

					</div>

				</div>

				<div class="stat-table position-center hidden-xs">
				    <table>
				        <tbody>
				        	<thead>
				        		<td></td>
				        		<td></td>
				        		<td></td>
				        	</thead>
				            <tr>
				                <td><img class="stat-str" src="img/gameicon/stats/str.jpg"></td>
				                <td><img class="value-str" src="img/gameicon/stats/str.jpg"></td>
				                <td><img class="value-strmod" src="img/gameicon/stats/str.jpg"></td>
				            </tr>
				            <tr>
				                <td><img class="stat-sta" src="img/gameicon/stats/sta.jpg"></td>
				                <td><img class="value-sta" src="img/gameicon/stats/sta.jpg"></td>
				                <td><img class="value-stamod" src="img/gameicon/stats/sta.jpg"></td>
				            </tr>
				            <tr>
				                <td><img class="stat-agi" src="img/gameicon/stats/agi.jpg"></td>
				                <td><img class="value-agi" src="img/gameicon/stats/agi.jpg"></td>
				                <td><img class="value-agimod" src="img/gameicon/stats/agi.jpg"></td>
				            </tr>
				            <tr>
				                <td><img class="stat-wit" src="img/gameicon/stats/wit.jpg"></td>
				                <td><img class="value-wit" src="img/gameicon/stats/wit.jpg"></td>
				                <td><img class="value-witmod" src="img/gameicon/stats/wit.jpg"></td>
				            </tr>
				            <tr>
				                <td><img class="stat-per" src="img/gameicon/stats/per.jpg"></td>
				                <td><img class="value-per" src="img/gameicon/stats/per.jpg"></td>
				                <td><img class="value-permod" src="img/gameicon/stats/per.jpg"></td>
				            </tr>
				            <tr>
				                <td><img class="stat-lck" src="img/gameicon/stats/lck.jpg"></td>
				                <td><img class="value-lck" src="img/gameicon/stats/lck.jpg"></td>
				                <td><img class="value-lckmod" src="img/gameicon/stats/lck.jpg"></td>
				            </tr>
				        </tbody>
				    </table>
				</div>

			</div>

		</section>

	</div>

</div>

<form class="hidden" method="post" id="createcharacter" name="createcharacter" action="createcharacter2.php">

	<label class="radio-inline gender-buttons">
	  <input type="radio" name="gender" id="button-male" value="male" checked="checked"> Male
	</label>
	<label class="radio-inline gender-buttons">
	  <input type="radio" name="gender" id="button-female" value="female"> Female
	</label>

	<br>

	<label class="radio-inline race-buttons">
	  <input type="radio" name="race" id="button-human" value="human" checked="checked"> Human
	</label>
	<label class="radio-inline race-buttons">
	  <input type="radio" name="race" id="button-robot" value="robot"> Robot
	</label>
	<label class="radio-inline race-buttons">
	  <input type="radio" name="race" id="button-barbarian" value="barbarian"> Barbarian
	</label>
	<label class="radio-inline race-buttons">
	  <input type="radio" name="race" id="button-dwarf" value="dwarf"> Dwarf
	</label>
	<label class="radio-inline race-buttons">
	  <input type="radio" name="race" id="button-elf" value="elf"> Elf
	</label>

	<br>

	<label class="radio-inline profession-buttons">
	  <input type="radio" name="profession" id="button-warrior" value="warrior" checked="checked"> Warrior
	</label>
	<label class="radio-inline profession-buttons">
	  <input type="radio" name="profession" id="button-mage" value="mage"> Mage
	</label>
	<label class="radio-inline profession-buttons">
	  <input type="radio" name="profession" id="button-thief" value="thief"> Thief
	</label>
	<label class="radio-inline profession-buttons">
	  <input type="radio" name="profession" id="button-explorer" value="explorer"> Explorer
	</label>
	<label class="radio-inline profession-buttons">
	  <input type="radio" name="profession" id="button-detective" value="detective"> Detective
	</label>

	<br>

	<!-- Detail Options -->

	<label class="radio-inline hairstyle-options-buttons">
	  <input type="radio" name="hairstyle-options" id="button-Normal" value="Normal" checked="checked"> Normal
	</label>
	<label class="radio-inline hairstyle-options-buttons">
	  <input type="radio" name="hairstyle-options" id="button-Messy" value="Messy"> Messy
	</label>
	<label class="radio-inline hairstyle-options-buttons">
	  <input type="radio" name="hairstyle-options" id="button-Long" value="Long"> Long
	</label>
	<label class="radio-inline hairstyle-options-buttons">
	  <input type="radio" name="hairstyle-options" id="button-Bald" value="Bald"> Bald
	</label>
	<label class="radio-inline hairstyle-options-buttons">
	  <input type="radio" name="hairstyle-options" id="button-Braid" value="Braid"> Braid
	</label>

	<br>

	<label class="radio-inline haircolor-options-buttons">
	  <input type="radio" name="haircolor-options" id="button-Brown" value="Brown" checked="checked"> Brown
	</label>
	<label class="radio-inline haircolor-options-buttons">
	  <input type="radio" name="haircolor-options" id="button-Black" value="Black"> Black
	</label>
	<label class="radio-inline haircolor-options-buttons">
	  <input type="radio" name="haircolor-options" id="button-Ginger" value="Ginger"> Ginger
	</label>
	<label class="radio-inline haircolor-options-buttons">
	  <input type="radio" name="haircolor-options" id="button-Blonde" value="Blonde"> Blonde
	</label>
	<label class="radio-inline haircolor-options-buttons">
	  <input type="radio" name="haircolor-options" id="button-Gray" value="Gray"> Gray
	</label>

	<br>

	<label class="radio-inline face-options-buttons">
	  <input type="radio" name="face-options" id="button-Passive" value="Passive" checked="checked"> Passive
	</label>
	<label class="radio-inline face-options-buttons">
	  <input type="radio" name="face-options" id="button-Excited" value="Excited"> Excited
	</label>
	<label class="radio-inline face-options-buttons">
	  <input type="radio" name="face-options" id="button-Angry" value="Angry"> Angry
	</label>
	<label class="radio-inline face-options-buttons">
	  <input type="radio" name="face-options" id="button-Happy" value="Happy"> Happy
	</label>
	<label class="radio-inline face-options-buttons">
	  <input type="radio" name="face-options" id="button-Tired" value="Tired"> Tired
	</label>

	<br>

	<label class="radio-inline clothescolor-options-buttons">
	  <input type="radio" name="clothescolor-options" id="button-Blue" value="Blue" checked="checked"> Blue
	</label>
	<label class="radio-inline clothescolor-options-buttons">
	  <input type="radio" name="clothescolor-options" id="button-Green" value="Green"> Green
	</label>
	<label class="radio-inline clothescolor-options-buttons">
	  <input type="radio" name="clothescolor-options" id="button-Red" value="Red"> Red
	</label>
	<label class="radio-inline clothescolor-options-buttons">
	  <input type="radio" name="clothescolor-options" id="button-Yellow" value="Yellow"> Yellow
	</label>
	<label class="radio-inline clothescolor-options-buttons">
	  <input type="radio" name="clothescolor-options" id="button-Purple" value="Purple"> Purple
	</label>

	<br>

	<label class="radio-inline skincolor-options-buttons">
	  <input type="radio" name="skincolor-options" id="button-Pale" value="Pale" checked="checked"> Pale
	</label>
	<label class="radio-inline skincolor-options-buttons">
	  <input type="radio" name="skincolor-options" id="button-Light" value="Light"> Light
	</label>
	<label class="radio-inline skincolor-options-buttons">
	  <input type="radio" name="skincolor-options" id="button-Medium" value="Medium"> Medium
	</label>
	<label class="radio-inline skincolor-options-buttons">
	  <input type="radio" name="skincolor-options" id="button-Tan" value="Tan"> Tan
	</label>
	<label class="radio-inline skincolor-options-buttons">
	  <input type="radio" name="skincolor-options" id="button-Dark" value="Dark"> Dark
	</label>

	<br>

	<label class="radio-inline weapon-options-buttons">
	  <input type="radio" name="weapon-options" id="button-weapon-1" value="weapon-1" checked="checked"> Weapon 1
	</label>
	<label class="radio-inline weapon-options-buttons">
	  <input type="radio" name="weapon-options" id="button-weapon-2" value="weapon-2"> Weapon 2
	</label>

</form>

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
   <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

    <script src="js/Modules/Model.js"></script>
    <script src="js/Modules/View.js"></script>
    <script src="js/Modules/Controller.js"></script>
       <script src="js/jquery.powertip.min.js"></script>

</body>
</html>