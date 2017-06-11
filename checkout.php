<!DOCTYPE html>
<html>
<head>
	<title>Fahrenheit 451</title>
	<link rel="stylesheet" type="text/css" href="theme.css">
</head>

<body>
<?php
	include 'header.php';
	include 'bookDB.php';
	
	$s = "";
	$books[0]['stock'] = 99;
	$file = fopen("bookDB1.php", "r+");
	fwrite($file, var_export($books, true));
	fclose($file);


	$file1 = fopen("orders.txt", "a");
	foreach($_POST as $name => $value){
		/*if("id" == substr($name, 0, 2)){
			$id = $value
		}
		if("amount" == substr($name, 0, 6)){
			$books[$value]['stock'] -= $value;
		}*/
		$s = $s.$name.": ".$value."\n";
	}
	$s = $s."-------------------------------\n";
	

	fwrite($file1, $s);
	fclose($file1);

?>
	<div class="content">
		<h1>
			Danke f&uuml;r Ihre Bestellung!
		</h1>
		<p class="centered">
			<br>Besuchen Sie uns bald wieder und empfehlen Sie uns weiter! <br>
			<a href="books.php" class="link"> weiterst&ouml;bern </a>
		</p>
	</div>
</body>
</html>

