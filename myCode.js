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

function checkout(form){
	if(bookCounter == 0){
		return;
	}
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
		post(form);
	} else {
		alert("Bitte alle Felder gültig ausfüllen!");
	}
}

function post(form){
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

	//document.body.appendChild(form);
	form.submit();
}

function addToCart(id, price, stock, book){
	var amount = Number(document.getElementById("amount" + id).value);
	if(amount <= 0){
		return;
	}
	if(amount > stock){
		alert("Von diesem Buch sind leider nur noch " + stock + " Exemplare verfügbar");
	} else {	
		//ab hier valide Anzahl:
		document.getElementById('cart').style.visibility = 'visible';
		var bookalreadyinCart = 0;
		for (i = 0; i < ids.length; i++) {
			if (ids[i] == id) {		//überprüfen, ob das Buch schon im Warenkorb ist
				bookalreadyinCart = 1;	
				if(totalAmount[i] + amount > stock){	//falls Anzahl > stock
					alert("Von diesem Buch sind leider nur noch " + stock + " Exemplare verfügbar");
					return;
				} else {
					totalAmount[i] += amount;
				}
				priceInCents[i] += (price*100) * amount;
			}
		}
		if (bookalreadyinCart == 0) {
			ids[differentBooks] = id;
			books[differentBooks] = book;
			totalAmount[differentBooks] = amount;
			priceInCents[differentBooks] = (price*100) * amount;
			differentBooks++;
		
		}
		bookCounter += Number(amount);
		totalPriceInCents += (price*100) * amount;
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
