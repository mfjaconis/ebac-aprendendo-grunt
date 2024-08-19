document.addEventListener("DOMContentLoaded", () => {
	document
		.getElementById("form-sorteador")
		.addEventListener("submit", (event) => {
			event.preventDefault();

			let numeroMaximo = document.getElementById("numero-maximo").value;
			numeroMaximo = Number.parseInt(numeroMaximo);

			// biome-ignore lint/style/useConst: <explanation>
			let numeroAleatorio = Math.random() * numeroMaximo;
			numeroAleatorio = Math.floor(numeroAleatorio + 1);

			document.getElementById("resultado-valor").innerText = numeroAleatorio;
			document.querySelector(".resultado").style.display = "block";
		});
});
