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
  //Dividir num /2 hasta llegar a 0
  let result = []; //[1,1,1]
  // do -while == ejecuto => reviso y cont?
  // while == reviso sin cont? => ejecuto
  while (num > 0) { //15
    result.push(num%2); //1/2 0 
    num = Math.floor(num/2); //1
  }
  return result.reverse().join(""); //¨[1,1,1] => join() = "111";
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}