const fs = require('fs')

const lista = []
const listaOrdenada = []

const fileName = "hola.txt"

//logica


function getSurname ( data ) {

  let arr = data.split(" ")
  return arr[arr.length-1].toLowerCase()
}

function ordenarArray (array = []) {
  //
  let aux, ciclos, contador;
  let length = array.length
  contador = 0
  //repetir esto igual al largo del array
  for (let i = 0 ; i < length ; i++) {

    contador = 0;

    for (let j = 0; j < length-1 ; j++) {
      //intercambio
      let surname1, surname2

      surname1 = getSurname(array[contador])
      surname2 = getSurname(array[contador+1])

      if ( surname1 > surname2 ) {

        aux = array[contador+1]
        array[contador+1] = array[contador]
        array[contador] = aux
      }

      contador++
    }

  }

  return array
}

function sanitizarArray (arr) {
  arr = arr.filter((item) => {
    item = item.toLowerCase()
    return ( (item == "cena") || (item.includes("(")) || (item.includes(")") || (item === "\r") ) || (item === "\n") || (item === "") ) ? false : true
  })

  return arr.map((item) => {
    return item.replace("\r", "")
  })
}

let arrayDesordenado = require('fs').readFileSync(fileName).toString().split('\n')
let arr = ["cena", "\n", "(12)", "(88)", "Sergio Molina", "Marcelo Fabian", "Fernando Santi"]



let result = ordenarArray(sanitizarArray(arrayDesordenado))

let str= ""

result.forEach((item) => {
  str += item+"\n"
})

fs.writeFile('mynewfile3.txt', str, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
console.log(result)
