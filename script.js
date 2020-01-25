let korisnici = new Array();
let knjige = new Array();
window.onload = izborniMenu();

function izborniMenu() {
	document.getElementById('naslov').innerHTML = `Koja operacija vam je potrebna?
	<br>1. Kreiranje racuna   <br>2. Kreiranje knjige   <br>3. Podizanje knjige
	<br>4. Vracanje knjige   <br>5. Ispisivanje detalja postojecih racuna`;
}

function pregledUnosa() {

	let unosKorisnika = document.getElementById('unos').value;
	
	switch(unosKorisnika) {
		case '1' : kreiranjeRacuna();
		break;
		case '2' : kreiranjeKnjige();
		break;
	}
}

function kreiranjeKnjige() {
	
	let imeKnjige = prompt('Unesite ime knjige:', '');
	let brojKnjige = prompt('Unesite broj knjige' ,'');
	let status = false;

	if (provjeraKnjige(brojKnjige)) {
		alert('Uspjesno ste kreirali knjigu!');
		
		let knjiga = {
			imeKnjige,
			brojKnjige,
			status
		};

		knjige.push(knjiga);
	}

}

function kreiranjeRacuna() {

	let imeRacuna = prompt('Unesite vase ime:', '');
	let brojRacuna = prompt('Unesite broj racuna', '');

	if (provjeraRacuna(imeRacuna, brojRacuna)) {
		alert('Racun uspjesno napravljen.');
		
		let korisnik = {
			imeRacuna,
			brojRacuna,
			knjige : new Array()
		};

		korisnici.push(korisnik);
	} 
}

function provjeraRacuna(imeRacuna, brojRacuna) {
	for (let i = 0; i < korisnici.length; i++) {
		if (korisnici[i].brojRacuna == brojRacuna) {
			alert('Vec postoji racun sa unesenim brojem');
			return false;
		} else if (korisnici[i].imeRacuna == imeRacuna) {
			alert('Vec postoji racun sa unesenim imenom');
			return false;
		}
	}
	return true;
}

function provjeraKnjige(brojKnjige) {
	for (let i = 0; i < knjige.length; i++) {
		if (knjige[i].brojKnjige == brojKnjige) {
			alert('Vec postoji knjiga sa unijetim brojem');
			return false;
		}
	}
	return true;
}

document.getElementById('button').addEventListener('click', function(){
	pregledUnosa();
	document.getElementById('unos').value = '';
});