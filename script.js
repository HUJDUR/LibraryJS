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
		case '3' : podizanjeKnjige();
		break;
		case '4' : vracanjeKnjige();
		break;
		case '5' : ispisDetalja();
		break;
	}
}

function vracanjeKnjige() {

	let imeRacuna = prompt('Unesite ime racuna:', '');
	let imeKnjige = prompt('Unesite ime knjige:', '');

	if (provjeraRacunaPriPodizanju(imeRacuna) && provjeraKnjigePriVracanju(imeKnjige)) {
		
		for (let i = 0; i < knjige.length; i++) {
			if (knjige[i].imeKnjige == imeKnjige) {
				knjige[i].status = false;
			}
		}

		for (let i = 0; i < korisnici.length; i++) {
			if (korisnici[i].imeRacuna == imeRacuna) {
				for (let j = 0; j < korisnici[i].knjige.length; j++) {
					if (korisnici[i].knjige[j].imeKnjige == imeKnjige) {
						korisnici[i].knjige.splice(korisnici[i].knjige[j], 1);
					}
				}
			}
		}

		alert('Uspjesno ste vratili knjigu!');
	}

}

function ispisDetalja() {

	let imeRacuna = prompt('Unesite ime racuna:', '');

	for (let i = 0; i < korisnici.length; i++) {
		if (korisnici[i].imeRacuna == imeRacuna) {
			alert(korisnici[i].imeRacuna + " " + korisnici[i].brojRacuna + " " + korisnici[i].knjige.length);
		} else {
			alert('Uneseni racun ne postoji!');
		}
	}

}

function podizanjeKnjige() {

	let imeRacuna = prompt('Unesite ime racuna:', '');
	let imeKnjige = prompt('Unesite ime knjige:', '');

	if (provjeraRacunaPriPodizanju(imeRacuna) && provjeraKnjigePriPodizanju(imeKnjige)) {
		
		let knjiga;

		for (let i = 0; i < knjige.length; i++) {
			if (knjige[i].imeKnjige == imeKnjige) {
				knjige[i].status = true;
				knjiga = knjige[i];
			}
		}

		for (let i = 0; i < korisnici.length; i++) {
			if (korisnici[i].imeRacuna == imeRacuna) {
				korisnici[i].knjige.push(knjiga);
			}
		}

		alert('Uspjesno ste digli knjigu!');
	}

}

function kreiranjeKnjige() {
	
	let imeKnjige = prompt('Unesite ime knjige:', '');
	let brojKnjige = prompt('Unesite broj knjige:' ,'');
	let status = false;

	if (provjeraKnjige(brojKnjige)) {
		alert('Uspjesno ste kreirali knjigu!');
		
		knjige.push(knjiga(imeKnjige, brojKnjige, status));
	}

}

function kreiranjeRacuna() {

	let imeRacuna = prompt('Unesite vase ime:', '');
	let brojRacuna = prompt('Unesite broj racuna:', '');

	if (provjeraRacuna(imeRacuna, brojRacuna)) {
		alert('Racun uspjesno napravljen!');

		korisnici.push(new Korisnik(imeRacuna, brojRacuna));
	} 
}

function provjeraRacunaPriPodizanju(imeRacuna) {

	for (let i = 0; i < korisnici.length; i++) {
		if (korisnici[i].imeRacuna == imeRacuna) {
			return true;
		}
	}	
	
	alert('Unijeti racun ne postoji!');
	return false;
}

function provjeraKnjigePriPodizanju(imeKnjige) {
	
	for (let i = 0; i < knjige.length; i++) {
		if (knjige[i].imeKnjige == imeKnjige) {
			if (knjige[i].status == true) {
				alert('Knjiga je dignuta!');
				return false;
			}
		}
	}

	for (let i = 0; i < knjige.length; i++) {
		if (knjige[i].imeKnjige == imeKnjige) {
			return true;
		}
	}

	alert('Unijeta knjiga ne postoji!');
	return false;
}

function provjeraKnjigePriVracanju(imeKnjige) {

	for (let i = 0; i < knjige.length; i++) {
		if (knjige[i].imeKnjige == imeKnjige) {
			if (knjige[i].status == false) {
				alert('Knjiga je u biblioteci!');
				return false;
			}
		}
	}

	for (let i = 0; i < knjige.length; i++) {
		if (knjige[i].imeKnjige == imeKnjige) {
			return true;
		}
	}

	alert('Unijeta knjiga ne postoji!');
	return false;
}

function provjeraRacuna(imeRacuna, brojRacuna) {
	for (let i = 0; i < korisnici.length; i++) {
		if (korisnici[i].brojRacuna == brojRacuna) {
			alert('Vec postoji racun sa unesenim brojem!');
			return false;
		} else if (korisnici[i].imeRacuna == imeRacuna) {
			alert('Vec postoji racun sa unesenim imenom!');
			return false;
		}
	}
	return true;
}

function provjeraKnjige(brojKnjige) {
	for (let i = 0; i < knjige.length; i++) {
		if (knjige[i].brojKnjige == brojKnjige) {
			alert('Vec postoji knjiga sa unijetim brojem!');
			return false;
		}
	}
	return true;
}

function Korisnik(imeRacuna, brojRacuna) {

	this.imeRacuna = imeRacuna;
	this.brojRacuna = brojRacuna;
	this.knjige = new Array();
}

function knjiga(imeKnjige, brojKnjige, status) {

	let knjiga = {
		imeKnjige,
		brojKnjige,
		status
	};

	return knjiga;
}

document.getElementById('button').addEventListener('click', function(){
	pregledUnosa();
	document.getElementById('unos').value = '';
});