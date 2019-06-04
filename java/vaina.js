var img=["imagenes/1.png","imagenes/2.png","imagenes/3.png","imagenes/4.png","imagenes/5.png"];
var contador=0;

function cambiarImagen(){
	imagen.src=img[contador];
	contador++;
	if (contador >= img.length)
		{contador=0;}
}

setInterval(cambiarImagen,4000);

function programa(){
	boton.addEventListener("click",cambiarImagen);
}
function mas(){
	document.getElementById("imagen").src=img[contador];
	contador++;
	if (contador>=img.length) {
		contador=0;
	}
}
function menos(){
	document.getElementById("imagen").src=img[contador];
	contador--;
	if (contador<=0) {
		contador=4;
	}
}
window.onload = function(){
document.formulario.botonera[0].addEventListener("click",radios);
document.formulario.botonera[1].addEventListener("click",radios);
document.formulario.botonera[2].addEventListener("click",radios);
document.formulario.botonera[3].addEventListener("click",radios);
document.formulario.botonera[4].addEventListener("click",radios);
}
function radios(){
	for ( i = 0; i <formulario.botonera.length; i++) {
		if (formulario.botonera[i].checked) {
			document.getElementById("imagen").src=formulario.botonera[i].value;
			break;
		}
	}
}