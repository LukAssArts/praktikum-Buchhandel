var bookCounter = 0;
var differentBooks = 0;
var totalPriceInCents = 0;
var shippingInCents = 0;
var books = [];
var ids = [];
var totalAmount = [];
var priceInCents = [];

function resetCart() {
	bookCounter = 0;
	differentBooks = 0;
	totalPriceInCents = 0;
	shippingInCents = 0;
	books = [];
	ids = [];
	totalAmount = [];
	priceInCents = [];
	document.getElementById("cartBody").innerHTML = "";
document.getElementById("cartPrice").innerHTML = "<strong>Versandkosten: 0€</strong><br><strong>Gesamtkosten: 0€</strong>";
}

function checkout(){
	//test
}

function addToCart($id, $price, $stock, $book){
	var amount = Number(document.getElementById("amount" + $id).value);
	if(amount <= 0){
		return;
	}
	if(amount > $stock){
		alert("Von diesem Buch sind leider nur noch " + $stock + " Exemplare verfügbar");
	} else {	
		//ab hier valide Anzahl:
		document.getElementById('cart').style.visibility = 'visible';
		var bookalreadyinCart = 0;
		for (i = 0; i < ids.length; i++) {
			if (ids[i] == $id) {		//überprüfen, ob das Buch schon im Warenkorb ist
				bookalreadyinCart = 1;	
				if(totalAmount[i] + amount > $stock){	//falls Anzahl > stock
					alert("Von diesem Buch sind leider nur noch " + $stock + " Exemplare verfügbar");
					return;
				} else {
					totalAmount[i] += amount;
				}
				priceInCents[i] += ($price*100) * amount;
			}
		}
		if (bookalreadyinCart == 0) {
			ids[differentBooks] = $id;
			books[differentBooks] = $book;
			totalAmount[differentBooks] = amount;
			priceInCents[differentBooks] = ($price*100) * amount;
			differentBooks++;
		
		}
		bookCounter += Number(amount);
		totalPriceInCents += ($price*100) * amount;
		if (totalPriceInCents >= 2000) {
			shippingInCents = 0;
		} else {
			shippingInCents = 200 + (bookCounter - 1) * 50;
		}
		var innerHtml = "";
		for (i = 0; i < ids.length; i++){
			innerHtml += "<tr><td>" + books[i] + "</td><td>" + totalAmount[i] + "</td><td>" + priceInCents[i]/100 + "€</td>";
		}
		document.getElementById("cartBody").innerHTML = innerHtml;
		document.getElementById("cartPrice").innerHTML = "<strong>Versandkosten: </strong>" + shippingInCents/100 + "€ <br><strong>Gesamtkosten: </strong>" + (totalPriceInCents + shippingInCents)/100 + "€";
	}
}
