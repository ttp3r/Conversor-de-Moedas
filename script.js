function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 6.2;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;

  console.log(valorEmReal);
}

// A função de conversão foi criada de acordo com as intruções da aula dois da imersão_dev da Alura.