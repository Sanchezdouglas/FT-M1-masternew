'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  //num = "1010" split() --> ["1", "0", "1", "0"] split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
  num = num.split("").reverse();// num = ["0", "1", "0", "1"] invierte el orden de los elementos de un array
  //Sum 2^ Posicion * valor
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result = result + Math.pow(2, i) * parseInt(num[i]); // 2^0 *0 Convierte (parseaInt) un argumento de tipo cadena y devuelve un entero de la base especificada.
  } 
  return result;
 }


function DecimalABinario(num) {
  // tu codigo aca
  

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}