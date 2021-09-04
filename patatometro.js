var x = Math.round(Math.random()*10)

var texts = new Array ("<i>Ipomoea batatas</i> è un genere di patate, qual è il suo nome comune?", "Quante ore dormi al giorno?", "Preferisci camminare o rotolare?", "Hai mai apostrofato qualcuno chiamandolo <i>polpettino?</i>", "Quando fai aperitivo, preferisci le noccioline o le patatine fritte?", "Hai uno spiccato senso del <i>PULITOH?</i>", "Tra un biondo, un rosso o un moro, quale sceglieresti?",)
var n = Math.floor (texts.length * Math.random ())
document.getElementById("Cdomanda").innerHTML = texts[n];


function Patatometro() {
switch (x) {
	case 0:
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
		var giudizio = "sei poco patatosa!";
		break;
	case 6:
		var giudizio = "sei sufficientemente patatosa!";
		break;
	case 7:
		var giudizio = "sei una patatina!";
		break;
	case 8:
		var giudizio = "sei una patata!";
		break;
	case 9:
		var giudizio = "sei una patatona!";
		break;
	case 10:
		var giudizio = "sei una patatissima!";
		break;
	default:
		var messaggio = "errore! qualcosa è andato storto";
		break;
}
switch (x) {
	case 1:
	document.getElementById("PatataBar").style.backgroundImage = 'url(1.png)';
	break;
	case 2:
	document.getElementById("PatataBar").style.backgroundImage = 'url(2.png)';
	break;
	case 3:
	document.getElementById("PatataBar").style.backgroundImage = 'url(3.png)';
	break;
	case 4:
	document.getElementById("PatataBar").style.backgroundImage = 'url(4.png)';
	break;
	case 5:
	document.getElementById("PatataBar").style.backgroundImage = 'url(5.png)';
	break;
	case 6:
	document.getElementById("PatataBar").style.backgroundImage = 'url(6.png)';
	break;
	case 7:
	document.getElementById("PatataBar").style.backgroundImage = 'url(7.png)';
	break;
	case 8:
	document.getElementById("PatataBar").style.backgroundImage = 'url(8.png)';
	break;
	case 9:
	document.getElementById("PatataBar").style.backgroundImage = 'url(9.png)';
	break;
	case 10:
		document.getElementById("PatataBar").style.backgroundImage = 'url(10.png)';
	break;
	default:
		document.getElementById("PatataBar").style.backgroundImage = 'url(0.png)';
	break;
}
document.getElementById("Cdomanda").innerHTML = "Il tuo livello di patatosità è:" + " " + x;
document.getElementById("Cdomanda").style.fontSize = "30px";
document.getElementById("risposta").style.display = "none";
document.getElementById("bottone").style.display = "none";
var para = document.createElement("P");
  para.innerHTML = giudizio;
  document.getElementById("container").appendChild(para);
}
