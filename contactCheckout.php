<!DOCTYPE html>
<html>
<head>
	<title>Fahrenheit 451</title>
	<link rel="stylesheet" type="text/css" href="theme.css">
</head>

<body>
<?php
	include 'header.php';
	
	$file1 = fopen("contacts.txt", "a");
	$s = "";

	foreach($_POST as $name => $value){
		$s = $s.$name.": ".$value."\n";
	}
	$s = $s."-------------------------------\n";

	fwrite($file1, $s);
	fclose($file1);

?>
	<div class="content">
		<h1>
			Danke f&uuml;r Ihre Mitteilung!
		</h1>
		<p class="centered">
			<br>Empfehlen Sie uns weiter! <br>
			<a href="books.php" class="link"> weiterst&ouml;bern </a>
		</p>
	</div>
</body>
</html>
