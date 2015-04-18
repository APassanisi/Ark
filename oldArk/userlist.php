<?php

if (!isset($_SESSION)) {
  session_start();
}

?>

<?php include 'includes/header.php'; ?>

<div class="container">

	<div class="row">

		<div class="col-md-8 col-md-offset-2">

			<h1 class="center-text">User List</h1>

			<p>
				<?php

				try {

					$stmt = $dbc->prepare( "SELECT * FROM ark3_user" );

					$stmt->execute();

					$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

					echo '<div class="userlist-table">';
					echo '<table class="table table-striped">';
					echo '<thead>';
					echo '<tr>';
					echo '<th>User Name</th>';
					echo '<th>Email</th>';
					echo '<th>Avatar</th>';
					echo '</tr>';
					echo '</thead>';
					echo '<tbody>';

					foreach ($rows as $row) {
						$username = $row['username'];
						$email = $row['email'];
						$avatar = $row['avatar'];
						echo '<tr>';
						echo '<td>' . $username . '</td>';
						echo '<td>' . $email . '</td>';
						echo '<td> <img class="small-avatar" src=" ' . ARK3_UPLOADPATH . $avatar . ' " ></td>';
						echo '</tr>';
					}

					echo '</tbody>';
					echo '</table>';
					echo '</div>';

				} catch (PDOException $e) {
					echo "Error: ";
					echo $e->getMessage();
				}

				?>

			</p>

		</div>

	</div>

</div>

<?php include 'includes/footer.php'; ?>