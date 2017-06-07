<!DOCTYPE html5>
<html>
<head>
  <title>Buchhandel</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="theme.css">
  <!--<script src="myCode.js"></script>-->
</head>
<body>
	<!--header:-->
	<?php 
		include 'header.php'; 
	?>
	
	<!--content:-->
	<div class="content">
		<?php
			include 'bookDB.php';
			$id=$_GET['id'];
			echo '<img src="'.$books[$id]['url'].'" class="bookCoversDetail">
							<h2>'.$books[$id]['name'].'</h2><br>
							<p>von: '.$books[$id]['author'].'<br>
							'.$books[$id]['price'].'&euro;<br>
							noch &uuml;brig: '.$books[$id]['stock'].'<br>
							Buchr&uuml;ckentext: '.$books[$id]['details'].'</p>';
		?>
	</div>
</body>
</html>
