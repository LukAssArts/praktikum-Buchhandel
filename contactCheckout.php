<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
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
		<p>
			<br><center>Empfehlen Sie uns weiter! <br>
			<a href="books.php" class="link"> weiterst&ouml;bern </a></center>
		</p>
	</div>
</body>
</html>
