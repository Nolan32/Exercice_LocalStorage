// var nbrcarac = prompt("Saisir le nombre de caractere")
// console.log(nbrcarac);


// var chaineAlea =function GenererAlea(){
// 	var ListeCar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// 	var result ='';

// 	for (var i = 0; i < nbrcarac; i++) {
// 		result =result + ListeCar[Math.floor(Math.random()*ListeCar.length())];

// 	};
// 	GenererAlea();
// 	console.log(GenererAlea)

// }
// var ChaineAleatoire = function ChaineAleatoire(nbcar)
// {
// 	var ListeCar = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9");
// 	var Chaine ='';
// 	for(i = 0; i < nbcar; i++)
// 	{
// 		Chaine = Chaine + ListeCar[Math.floor(Math.random()*ListeCar.length)];
// 	}
// 	return Chaine;
// }
$(document).ready(function(){




	$('#action').click(function(){
		var valeur = $('#Sorti').val() //bonjoour jordan
		console.log(valeur);
		var sauvegarder = localStorage.setItem('TEST', valeur ); // {TEST : bonjour jordan
	//	console.log(sauvegarder);
		$('#Entrer').html(valeur);
		location.reload();
	});



	function charger(){
		var A = localStorage.getItem('TEST') //{TEST: bonjour jordan}

		$('#Entrer').val(A);
	}


	charger();
})




