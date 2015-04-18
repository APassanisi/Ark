<?php $page = 'View Profile' ?>

<?php include 'includes/header.php'; ?>

<div class="container">

	<div class="row">

		<div class="col-md-6 col-md-offset-3">

			<h1 class="center-text">View Profile Page</h1>

			<table class="table table-striped">

				<thead>

					<tr>

						<th>Your username</th>
						<th>Your Email</th>
						<th>Your Avatar</th>

					</tr>

				</thead>

				<tbody>

					<tr>

						<td><?php echo $_COOKIE['username']; ?></td>
						<td><?php echo $_COOKIE['email']; ?></td>
						<td><?php echo '<img style=" margin: auto 25%; max-width: 32px; max-height: 32px;" src=' . ARK3_UPLOADPATH . $_COOKIE['avatar'] . '>'; ?></td>

					</tr>

				</tbody>

			</table>

		</div>

	</div>
	
</div>

<?php include 'includes/footer.php'; ?>