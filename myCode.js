function addToCart($id, $price, $stock){
	$amount = document.getElementById("amount" + $id).value;
	if($amount > $stock){
		alert("Von diesem Buch sind leider nur noch " + $stock + " Exemplare verfügbar");
	} else {	
		alert($amount + " Bücher mit id: " + $id + ", mit Preis: " + $price + "€");
		//TODO: Warenkorb code:
	}
}
