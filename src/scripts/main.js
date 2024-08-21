const incrementar = document.querySelector("#incrementar");
const decrementar = document.querySelector("#decrementar");
const contador = document.querySelector("#contador");

let valor = 0;

const atualizarContador = () => {
	contador.textContent = valor;
};

const incrementarValor = () => {
	valor += 1;
	atualizarContador();
};

const decrementarValor = () => {
	valor -= 1;
	atualizarContador();
};

incrementar.addEventListener("click", incrementarValor);
decrementar.addEventListener("click", decrementarValor);
