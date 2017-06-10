<!DOCTYPE html5>
<html lang="en-US">

<head>
	<title>Buchhandel</title> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="theme.css">
	<script src="myCode.js"></script>
</head>

<body>
	<?php 
		//header:
		include 'header.php';
		/*
		* bookDB.php enthält alle Bücherinfos. Jedes Buch hat eine id von 0 bis 8
		* 0-2 Krimis, 3-5 Romane, 6-8 Fantasy
		* sie sind in einem 2 dimensionalem Array 'books' gespeichert
		* books[0-8] spricht die zugehörigen Arrays per Buchid an,
		* jedes zweite Array besitzt:
		*		name, url(bild url), price, author, oderID, stock
		*/
		include 'bookDB.php';
		include ('warenkorb.html');
	?>

<!--content: befindet sich innerhalb des blauen Rechtecks-->
<div class="content">
	<h1>
		Unser Angebot:
	</h1>
	<!--Jede Kategorie hat eine eigene Tabelle zum leichten "springen"
		Alle Eingabefelder für die Anzahl der Bücher heißen "amount0" bis "amount8"-->
	<!--Krimis:-->
	<table>
		<thead>	
			<tr>
				<a name="krimis"><h2 class="header">Krimis:</h2></a>
			</tr>
		</thead>
		<tbody>
			<?php
				for($i = 0; $i < 3; $i++){
					echo '<tr> <td> <img src="'.$books[$i]['url'].'" class="bookCovers"></td>
							<td> <p>'.$books[$i]['name'].'<br>
							von: '.$books[$i]['author'].'<br>
							Preis: '.$books[$i]['price'].'&euro;<br>
							noch &uuml;brig: '.$books[$i]['stock'].'<br>
							<a class="link" href="detail.php?id='.$i.'">details</a></p></td>
							<td> <input type="number" id="amount'.$i.'" min="0" max="'.$books[$i]['stock'].'">
							<input name="submit'.$i.'" type="submit" value="in den Warenkorb" 
							onclick="addToCart('.$i.', '.$books[$i]['price'].', '.$books[$i]['stock'].', \''.$books[$i]['name'].'\')"></td></tr>';
				}
			?>
		</tbody>
	</table>

	<!--Romane:-->
	<table>
		<thead>
			<tr>
				<a name="romane"><h2 class="header">Romane:</h2></a>
			</tr>
		</thead>
		<tbody>
			<?php
				for($i = 3; $i < 6; $i++){
					echo '<tr> <td> <img src="'.$books[$i]['url'].'" class="bookCovers"></td>
							<td> <p>'.$books[$i]['name'].'<br>
							von: '.$books[$i]['author'].'<br>
							Preis: '.$books[$i]['price'].'&euro;<br>
							noch &uuml;brig: '.$books[$i]['stock'].'<br>
							<a class="link" href="detail.php?id='.$i.'">details</a></p></td>
							<td> <input type="number" id="amount'.$i.'" min="0" max="'.$books[$i]['stock'].'">
							<input name="submit'.$i.'" type="submit" value="in den Warenkorb" onclick="addToCart('.$i.', '.$books[$i]['price'].', '.$books[$i]['stock'].', \''.$books[$i]['name'].'\')"></td></tr>';
				}
			?>
		</tbody>
	</table>

	<!--Fantasy:-->
	<table>
		<thead>
			<tr>
				<a name="fantasy"><h2 class="header">Fantasy:</h2></a>
			</tr>
		</thead>
		<tbody>
			<?php
				for($i = 6; $i < 9; $i++){
					echo '<tr> <td> <img src="'.$books[$i]['url'].'" class="bookCovers"></td>
							<td> <p>'.$books[$i]['name'].'<br>
							von: '.$books[$i]['author'].'<br>
							Preis: '.$books[$i]['price'].'&euro;<br>
							noch &uuml;brig: '.$books[$i]['stock'].'<br>
							<a class="link" href="detail.php?id='.$i.'">details</a></p></td>
							<td> <input type="number" id="amount'.$i.'" min="0" max="'.$books[$i]['stock'].'">
							<input name="submit'.$i.'" type="submit" value="in den Warenkorb" onclick="addToCart('.$i.', '.$books[$i]['price'].', '.$books[$i]['stock'].', \''.$books[$i]['name'].'\')"></td></tr>';
				}
			?>
		</tbody>
	</table>

</div>
</body>

</html>
