'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var decimal = 0;

  for(let i = 0; i < num.length; i++) {
    var posi = num.length -1 -i;
    decimal = decimal + (2 ** posi) * num [i];
22
  }
return decimal;

// Metodo abreviado 
// var baDecimal = parseInt(unm, 2);
//return baDecimal;
}


function DecimalABinario(num) {
  // tu codigo aca
  var binario = [];

  while(num / 2 !== 0) {
    binario.unshift(num % 2);
    num = Math.floor(num / 2);
  }
return binario.join("");


}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}