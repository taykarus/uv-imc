function calcularIMC() {	
	let sexo = document.querySelector("#sexo").value;
	let altura = document.querySelector("#altura").value;
	let peso = document.querySelector("#peso").value;
	let result = document.querySelector("#result");

	if (sexo === "") {
		result.innerHTML = "Por favor, informe o sexo!";
		return;
	}
	if (altura === "" || isNaN(altura)) {
		result.innerHTML = "Por favor, informe uma altura maior que 0 em metros!";
		return;
	}
    if (peso === "" || isNaN(peso)) {
		result.innerHTML = "Por favor, informe uma peso maior que 0 em quilos!";
		return;
	}

    altura = parseFloat(altura);
    peso = parseFloat(peso);

	let imc = peso / (altura * altura);
	if (sexo === "f") {
		if (imc < 19.1) {
			result.innerHTML = "Abaixo do peso";
		} else {
			if (imc < 25.8) {
				result.innerHTML = "No peso normal";
			} else {
				if (imc < 27.3) {
					result.innerHTML = "Marginalmente acima do peso";
				} else {
					if (imc < 32.3) {
						result.innerHTML = "Acima do peso ideal";
					} else {
						result.innerHTML = "Obeso";
					}
				}
			}
		}
	}
	else {
		if (imc < 20.7) {
			result.innerHTML = "Abaixo do peso";
		} else {
			if (imc < 26.4) {
				result.innerHTML = "No peso normal";
			} else {
				if (imc < 27.8) {
					result.innerHTML = "Marginalmente acima do peso";
				} else {
					if (imc < 31.1) {
						result.innerHTML = "Acima do peso ideal";
					} else {
						result.innerHTML = "Obeso";
					}
				}
			}
		}
	}
}