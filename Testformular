<html>
<head>
	<title>Testformular</title>

</head>

<body>
<?php

$nameErr = $emailErr = $adrErr "";
$name = $email = $adresse "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name wird benötigt";
  } else {
    $name = test_input($_POST["name"]);
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $nameErr = "Nur Buchstaben und Leertaste!"; 
    }
  }
  
  if (empty($_POST["email"])) {
    $emailErr = "Email wird benötigt";
  } else {
    $email = test_input($_POST["email"]);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Ungültiges Email-format"; 
    }
  }
  
  if (empty($_POST["adresse"])) {
	$adrErr = "Adresse wird benötigt";
 } else {
	$adresse = test_input($_POST["adresse"]);
	if (!preg_match("/^[a-zA-ZäöüÄÖÜ \.]+ [0-9a-z]$/",$adresse)) {
	  $adrErr = "Nur Buchstaben und Zahlen!"; 
	}
 }

}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>

<h2>Bestellformular</h2>
<p><span>* Benötigte Angaben</span></p>

<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
<table>
<tr>
	<td>Name:</td>
	<td><input type="text" name="name" value="<?php echo $name;?>"></td>
	<td> <span>* <?php echo $nameErr;?></span></td>
</tr>
<tr>
	<td>E-mail:</td>
	<td><input type="text" name="email" value="<?php echo $email;?>"></td>
	<td><span>* <?php echo $emailErr;?></span></td>
</tr>
<tr>
	<td>Adresse:</td>
	<td><input type="text" name="adresse" value="<?php echo $adresse;?>"></td>
	<td><span>* <?php echo $adrErr;?></span></td>
</tr>

</table>   

<input type="submit" name="submit" value="Senden">  
</form>
</body>

</html>
