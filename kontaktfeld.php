<html>
<body>
<?php

$nameErr = $emailErr = $nachrichtErr = "";
$name = $email = $nachricht = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name wird benötigt";
  } else {
    $name = test_input($_POST["name"]);
    if (!preg_match("/^[a-zöüäA-ZÖÜÄ\s]+$/",$name)) {
      $nameErr = "Bitte einen gültigen Namen angeben!"; 
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
  
  if (empty($_POST["nachricht"])) {
	$adrErr = "Nachricht leer";
 } 
 

}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>

<p><span>* Benötigte Angaben</span></p>

<form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">  
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
	<td>Nachricht:</td>
	<td><textarea type="text" name="nachricht" rows="5" cols="40" value="<?php echo $nachricht;?>"></textarea></td>
	<td><span>* <?php echo $nachrichtErr;?></span></td>
</tr>

</table>   

<input type="submit" name="submit" value="Senden">  
</form>
</body>

</html>
