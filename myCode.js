var bookCounter = 0;		//Anzahl aller Bücher im Warenkorb
var differentBooks = 0;		//Anzahl verschiedener Bücher im WK
var totalPriceInCents = 0;	//Gesamtpreis der Bücher
var shippingInCents = 0;	//Versandkosten
//'differentBooks' wird als Index der Arrays benutzt
var books = [];		//enthält buchnamen
var ids = [];		//enthält buchids
var totalAmount = [];	//gesamtanzahl jedes Buchs
var priceInCents = [];	//Gesamtpreis jedes Buches

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

function checkout(form){
	if(bookCounter == 0){	//keine Bücher im WK
		return;
	}
	//Teste Eingaben auf gültigkeit:
	var match = true;
	var fn = document.getElementById("firstname").value;
	var ln = document.getElementById("lastname").value;
	var ad = document.getElementById("adress").value;
	var email = document.getElementById("email").value;


	var namePattern=/^[a-zöüäA-ZÖÜÄ\s]+$/;
	if(!namePattern.test(fn)){
		match=false;
	}
	if(!namePattern.test(ln)){
		match=false;
	}
	var adressPattern=/^[a-zA-ZäöüÄÖÜ \.]+[0-9]+[a-z]?$/;
	if(!adressPattern.test(ad)){
		match=false;
	}
	var emailPattern=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
	if(!emailPattern.test(email)){
		match=false;
	}
	if(match){
		//Alle Eingaben gültig -> post
		post(form);
	} else {
		alert("Bitte alle Felder gültig ausfüllen!");
	}
}

function post(form){
	//Füge dem Formular des Warenkorbs verstecke Elemente mit den IDs, der Anzahl und den Preisen der Bücher hinzu
	for(i = 0; i < ids.length; i++){
		var hf = document.createElement("input");
		hf.setAttribute("type", "hidden");
		hf.setAttribute("name", "id"+i);
		hf.setAttribute("value", ids[i]);
		form.appendChild(hf);

		hf = document.createElement("input");
		hf.setAttribute("type", "hidden");
		hf.setAttribute("name", "amount"+i);
		hf.setAttribute("value", totalAmount[i]);
		form.appendChild(hf);
	}
	var hf = document.createElement("input");
	hf.setAttribute("type", "hidden");
	hf.setAttribute("name", "price");
	hf.setAttribute("value", totalPriceInCents/100);
	form.appendChild(hf);

	//submitte das Formular
	form.submit();
}

function addToCart(id, price, stock, book){
	var amount = Number(document.getElementById("amount" + id).value);	//Anzahl der hinzugefügten Bücher
	if(amount <= 0){
		return;	//ungültige Anzahl:
	}
	if(amount > stock){ //Zu hohe Anzahl:
		alert("Von diesem Buch sind leider nur noch " + stock + " Exemplare verfügbar");
	} else {	
		//ab hier valide Anzahl:
		//Zeige den Warenkorb an:
		document.getElementById('cart').style.visibility = 'visible';
		var bookalreadyinCart = 0;
		for (i = 0; i < ids.length; i++) {
			if (ids[i] == id) {		//überprüfen, ob das Buch schon im Warenkorb ist
				bookalreadyinCart = 1;	
				if(totalAmount[i] + amount > stock){	//falls Anzahl > stock
					alert("Von diesem Buch sind leider nur noch " + stock + " Exemplare verfügbar");
					return;
				} else {	//ansonsten füge die Anzahl der Gesamtzahl hinzu
					totalAmount[i] += amount;
				}
				//berechne neuen Preis:
				priceInCents[i] += (price*100) * amount;
			}
		}
		//Nimm neues Buch in den Warenkorb auf:
		if (bookalreadyinCart == 0) {
			ids[differentBooks] = id;
			books[differentBooks] = book;
			totalAmount[differentBooks] = amount;
			priceInCents[differentBooks] = (price*100) * amount;
			differentBooks++;
		}
		bookCounter += amount;
		//berechne den neuen Gesamtpreis aller Bücher:
		totalPriceInCents += (price*100) * amount;
		//Berechnung der Versandkosten:
		if (totalPriceInCents >= 2000) {
			shippingInCents = 0;
		} else {
			shippingInCents = 200 + (bookCounter - 1) * 50;
		}
		//Setze den Html-Text des Warenkorbs auf die aktuellen Werte:
		var innerHtml = "";
		for (i = 0; i < ids.length; i++){
			innerHtml += "<tr><td>" + books[i] + "</td><td>" + totalAmount[i] + "</td><td>" + priceInCents[i]/100 + "€</td>";
		}
		document.getElementById("cartBody").innerHTML = innerHtml;
		document.getElementById("cartPrice").innerHTML = "<strong>Versandkosten: </strong>" + shippingInCents/100 + "€ <br><strong>Gesamtkosten: </strong>" + (totalPriceInCents + shippingInCents)/100 + "€";
	}
}
