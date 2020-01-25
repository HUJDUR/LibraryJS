let korisnici = [];

function izborniMenu() {
	document.getElementById('naslov').innerHTML = `Koja operacija vam je potrebna?
	<br>1. Kreiranje racuna   <br>2. Kreiranje knjige   <br>3. Podizanje knjige
	<br>4. Vracanje knjige   <br>5. Ispisivanje detalja postojecih racuna`;
}

window.onload = izborniMenu();

function pregledUnosa() {

	let unosKorisnika = document.getElementById('unos').value;
	
	switch(unosKorisnika) {
		case '1' : kreiranjeRacuna();
		break;
	}
}

function kreiranjeRacuna() {

	let imeRacuna = prompt('Unesite vase ime:', '');
	let brojRacuna = prompt('Unesite broj racuna', '');

	if (provjeraRacuna()) {
		alert('Racun uspjesno napravljen.');
	} else {
		alert('Doslo je do greske!');
	}
	
}

function provjeraRacuna() {
	for (let i = 0; i < korisnici.length; i++) {

	}
	
}

document.getElementById('button').addEventListener('click', function(){
	pregledUnosa();
	document.getElementById('unos').value = '';
});