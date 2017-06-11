<!DOCTYPE html>
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
		<div class="detailContent">
			<?php
				include 'bookDB.php';
				$id=$_GET['id'];
				echo '<img src="'.$books[$id]['url'].'" class="bookCoversDetail" alt="bookCover">
								<h2>'.$books[$id]['name'].'</h2>
								<p>von: '.$books[$id]['author'].'<br>
								Preis: '.$books[$id]['price'].'&euro;<br>
								noch &uuml;brig: '.$books[$id]['stock'].'<br>
								<u>Buchr&uuml;ckentext:</u><br>'.$books[$id]['details'].'</p>';
			?>
		</div>
	</div>
</body>
</html>
