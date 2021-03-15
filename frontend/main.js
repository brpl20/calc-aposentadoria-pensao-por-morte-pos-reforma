function calc(user_year, user_value) {
	let ano_valor = {2019: 998, 2020: 1045, 2021: 1100};
	let min_ano = ano_valor[user_year];

	if (min_ano > user_value)
		return "Valor Menor do Que o Mínimo, recomecar";
	else if (min_ano == user_value)
		return "Valor igual ao minimo - benefício fixado no mínimo";
	let [result, logs] = calcFunction(min_ano, user_value);

	if (result !== undefined && result !== NaN)
		return `<p class="logs">${logs}</p>R$ ${result}`;
	return "Valores inválidos, tente novamente!";
}

function calcFunction(min_ano, user_value) {
	let logs = "";
	let sobra = ((parseFloat(user_value) / parseFloat(min_ano))-1);
	logs += `Sobra => ${sobra}`;
	if (sobra <= 1) {
		return [(min_ano + ((sobra*min_ano)*0.60)), logs];
	} else if (sobra > 1 && sobra <= 2) {
		logs += `<br/>Valor Do Mínimo ${min_ano}`;
		logs += `<br/>Valor da Primeira Sobra: ${(1*min_ano)*0.6}`;
		logs += `<br/>Valor da Segunda Sobra: ${((sobra-1)*min_ano)*0.4}`;
		return [(((1*min_ano)*0.6) + min_ano + (((sobra-1)*min_ano)*0.4)), logs];
	} else if (sobra > 2 && sobra <= 3) {
		logs += `<br/>Valor Do Mínimo ${min_ano}`;
		logs += `<br/>Valor da Primeira Sobra: ${(1*min_ano)*0.6}`;
		logs += `<br/>Valor da Segunda Sobra: ${(1*min_ano)*0.4}`;
		logs += `<br/>Valor da Terceira Sobra: ${((sobra-2)*min_ano)*0.2}`;
		return [(((1*min_ano)*0.6) + min_ano + ((1*min_ano)*0.4) + (((sobra-2)*min_ano)*0.2)), logs];
	}
	else if (sobra > 3) {
		logs += `<br/>Valor Do Mínimo ${min_ano}`;
		logs += `<br/>Valor da Primeira Sobra: ${(1*min_ano)*0.6}`;
		logs += `<br/>Valor da Segunda Sobra: ${(1*min_ano)*0.4}`;
		logs += `<br/>Valor da Terceira Sobra: ${(1*min_ano)*0.2}`;
		logs += `<br/>Resto da Sobra: ${(user_value - (4*min_ano))*0.1}`;
		return [( ((1*min_ano)*0.6) + min_ano + ((1*min_ano)*0.4) + ((1*min_ano)*0.2) + ((user_value - (4*min_ano))*0.1) ), logs];
	}
}

function calcular() {
	let user_year = parseInt(document.querySelector("#ano").value);
	let user_value = parseInt(document.querySelector("#valor").value);

	if ((typeof user_year === 'number' && !isNaN(user_year)) && (typeof user_value === 'number' && !isNaN(user_value))) {
		let result = calc(user_year, user_value);
		//Display result
		return document.querySelector("#result").innerHTML = result;
	}

	document.querySelector("#result").innerHTML = "Valores inválidos, tente novamente!";
}
