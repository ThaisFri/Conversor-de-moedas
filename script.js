function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorReal = parseFloat(valor);

  var valorDolar = valorReal / 5;
  console.log(valorDolar);

  var elementoValorConvertidoDolar = document.getElementById("valorConvertidoDolar");
  var valorConvertidoDolar = "O valor em dolar é U$ " + valorDolar;
  elementoValorConvertidoDolar.innerHTML = valorConvertidoDolar;
}

function ConverterEuro() {
    var valorElemento = document.getElementById("valorEuro");
    var valor = valorElemento.value;
    var valorReal = parseFloat(valor);
  
    var valorEuro = valorReal * 6;
    console.log(valorEuro);
  
    var elementoValorConvertidoEuro = document.getElementById("valorConvertidoEuro");
    var valorConvertidoEuro = "O resultado em euro é € " + valorEuro;
    elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;
  }

  function ConverterBitcoin() {
    var valorElemento = document.getElementById("valorBitcoin");
    var valor = valorElemento.value;
    var valorReal = parseFloat(valor);
  
    var valorBitcoin = valorReal / 247.500;
    console.log(valorBitcoin);
  
    var elementoValorConvertidoBitcoin = document.getElementById("valorConvertidoBitcoin");
    var valorConvertidoBitcoin = "O resultado em Bitcoin é ฿ " + valorBitcoin;
    elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin;
  }