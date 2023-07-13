const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const azul = document.getElementById('azul');

const textoRojo = document.getElementById('porcentoje-rojo');
const textoVerde = document.getElementById('porcentoje-verde');
const textoAzul = document.getElementById('porcentoje-azul');

let rojoValor = rojo.value;
let verdeValor = verde.value;
let azulValor = azul.value;

textoRojo.innerText = rojoValor;
textoVerde.innerText = verdeValor;
textoAzul.innerText = azulValor;

function RGB(rojo, verde, azul){
	const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
	document.body.style.background = colorRGB;
}

rojo.addEventListener('change', () =>{
	let rojoValor = rojo.value;
	textoRojo.innerText = rojoValor;
	RGB(rojoValor, verdeValor, azulValor);
})

verde.addEventListener('change', () =>{
	let verdeValor = verde.value;
	textoVerde.innerText = verdeValor;
	RGB(rojoValor, verdeValor, azulValor);
})

azul.addEventListener('change', () =>{
	let azulValor = azul.value;
	textoAzul.innerText = azulValor;
	RGB(rojoValor, verdeValor, azulValor);
})