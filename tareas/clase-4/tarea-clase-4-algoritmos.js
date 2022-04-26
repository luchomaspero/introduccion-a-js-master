//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

/*
Desafío de programación #1: Imprimí los números del 1 al 10

 Resultado: 10 9 8 7 6 5 4 3 2 1

let numero = 10

while (numero > 0) {
    console.log(numero)
    numero -= 1
}


 Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 1 3 5 ... 99

for (let i = 1; i <= 100; i++){
  if (i % 2 !== 0) {
    console.log(i)
  }

} 

/*
Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63

for (let i = 0; i < 10; i++) {
  console.log(7*i)
}



Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81
 */

//////////////////////////////////////for (let i = 1; i<10; i++) {

//}








/*
Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
[1,2,3,4,5,6,7,8,9,10]


1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sumaNumeros = 0

for (let i = 0; i < numeros.length; i++) {
  sumaNumeros = sumaNumeros + numeros[i]
  if (i === 9) { console.log(sumaNumeros) }
}



Desafío de programación #6: Calcula 10! (10 factorial)

 10 * 9 * 8 * ... * 1

let multiplicacion = 1

for (let i = 10; i > 0; i--) {
  multiplicacion = multiplicacion * i
  if (i === 1) {console.log(multiplicacion)}
}

Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

let suma = 0

for (let i = 0; i < 30 ; i++){
  if (i > 10 && i % 2 !== 0){
    suma = suma + i
  }
  if (i === 29){console.log(suma)}
}

Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit

function celsiusAFahrenheit(c){
  return ((c)* 9/5 ) + 32
}

Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius

function fahrenheitACelcius(f){
  return (f - 32) * 5/9
}

Desafío de programación #10: Calcula la suma de todos los números en un array de números


let array = [2,6,5,8,9,4,2,6,5,1,5,1]
let suma = 0
for (let i = 0; i < array.length; i++){
  suma = suma + array[i]
  if (i === 11){console.log(suma)}
}



Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)


function promedioDelArray(a){
  let suma = 0
  for (let i = 0; i < a.length; i++){
    suma = suma + a[i]
  }
  return console.log('El promedio es de ' + suma/a.length)
}

Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos


function soloPositivos(array) {
  let arrayPositivo = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {arrayPositivo.push(array[i])}

  }
  return console.log(arrayPositivo)
}


Desafío de programación #13: Find the maximum number in an array of numbers

function elMaximoDe(array) {
  let elMasAlto = array[0]
  for (let i = 1; i < array.length; i++) {
    if (elMasAlto < array[i]) {
      elMasAlto = array[i]
    }
  }
  return console.log(elMasAlto)
}


Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión


let numeroFibonacci
let primerNumero = 0
let segundoNumero = 1
for (let i = 0; i <= 10; i++){
  if (i === 0){
    console.log(primerNumero)
    console.log(segundoNumero)
  }
  numeroFibonacci = primerNumero + segundoNumero
  primerNumero = segundoNumero
  segundoNumero = numeroFibonacci
  console.log(numeroFibonacci)
}

Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55


Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión


function buscarNesimoFibonacci(n){
  if (n === 0){
  return n
} if (n === 1){
  return 1
} return buscarNesimoFibonacci(n - 1) + buscarNesimoFibonacci (n - 2)
}

Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

*/
function esPrimo(n) {
  if (n < 2) {
    return false
  }
  if (n == 2) {
    return true
  }
  const maxDiv = Math.sqrt(n)
  for (let i = 2; i <= maxDiv; i++) {
    if (n % i == 0) {
      return false
    }
  } return true
}
/*
Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10


function sumaDigitos(n){
  let s = n.toString()
  let suma = 0

  for (let char of s){
    let digito = parseInt(char)
    suma += digito
  }
  return suma
}

Desafío de programación #18: Imprimir los primeros 100 números primos

let losCienPrimos = []
let i = 0

while (losCienPrimos.length < 100){
  if (esPrimo(i)){
    losCienPrimos.push(i)
    console.log(i)
    i++
  }
  else {i++}
}


Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]



function primerosNPrimosMayoresQue(n, k) {
  let arrayNumerosPrimos = []
  let i = 0
  while (arrayNumerosPrimos.length < n+1) {
    if (esPrimo(i) && i > k) {
      arrayNumerosPrimos.push(i)
      i++
    }
    else if (!esPrimo(i)){
      i++
    }
    else {i++}
  }
  return console.log(arrayNumerosPrimos)
}


Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  19,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]


////La vez que entendí mal el ejercicio/////

function darVueltaArray(array) {
  let arrayDadoVuelta = []
  for (let i = 1; i <= array.length ; i++){
    arrayDadoVuelta.push(array[array.length - i])
  }
  return console.log(arrayDadoVuelta)
}

////VAMOS DE VUELTA


let array = [9,1,2,3,4];
console.log(array)
console.log('hago la roteishon')
rotarIzq(array);
console.log(array);


function rotarIzq(array) {
  let elPrimero = array.shift()
  array.push(elPrimero)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]



let array = [2,3];
console.log(array);
console.log('Roto:');
rotarDer(array);
console.log(array)



function rotarDer(array){
array.unshift(array[array.length-1])
array.pop()
}





Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]


let array = [1,2,3,4]
console.log(array);
console.log('Invierto:');
invertirArr(array);


function invertirArr(array){
  let arrayNuevo = []
  for (let i = 1; i <= array.length; i++){
    arrayNuevo.push(array[array.length-i])
  }
  console.log(arrayNuevo)
}


Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"

let texto = 'dabale arroz a la zorra el abad'
console.log(texto)
invertirArr(texto)


function invertirArr(texto){
  let textoNuevo = ''
  for (let i = texto.length-1; i >=0; i--){
    var char = texto[i]
    textoNuevo += char
  }
  console.log(textoNuevo)
}


Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]

let array1 = [1,2,3]
let array2 = ["a","b","c"]

let arrayNuevo = fusion(array1,array2)


function fusion(array1, array2){
  let arrayNuevo = array1
  var coma = ','
  for(i = 0; i <= array2.length-1; i++){
    var unValor = array2[i]
    arrayNuevo += coma + unValor
  }
  console.log(arrayNuevo)
}

Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos


let array1 = [1,2,3]
let array2 = [2,3,4,5]
console.log(diferenciaSimetrica(array1,array2))


function diferenciaSimetrica(array1,array2){
  let arrayNuevo = []
  
  for(let el of array1){
    if(!array2.includes(el)){
      arrayNuevo.push(el)
    }
  }

  for(let el of array2){
    if(!array1.includes(el)){
      arrayNuevo.push(el)
    }
  }
  return arrayNuevo
}

Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]


let array1 = [5,1,2,3,4]
let array2 = [3,4]
console.log(restaEntreConjuntos(array1,array2))

function restaEntreConjuntos(array1,array2){
  let arrayNuevo = []
  for(let i = 0; i < array1.length;i++){
    let el = array1[i]
    if(!array2.includes(el)){
     arrayNuevo.push(el)
    }
  }
  return arrayNuevo
}

Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]


let array = [1,2,3,4,5,4,3,2,1,0]
console.log(conLosDistintos(array))

function conLosDistintos(array){
  let arrayNuevo = []
  for(let i = 0; i < array.length; i++){
    let el = array[i]
    if(!arrayNuevo.includes(el)){
      arrayNuevo.push(el)
    }
  }
  return arrayNuevo
}


==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers

console.log(sumaPrimerosCienPrimos())

function sumaPrimerosCienPrimos(){
  let suma = 0
  let n = 1
  let i = 0
  while(i<=100){
    if(esPrimo(n)){
      suma += n
      i++
    }
    n++
  }
  return suma
}
//no está chequeado el #28

Desafío de programación #29: Print the distance between the first 100 prime numbers

console.log(printDistances(3))

function printDistances(n)
{
    var lastPrime = 2;
    var i = lastPrime + 1;
    var foundPrimes = 1;
    
    while(foundPrimes < n)
    {
        if (esPrimo(i))
        {
            console.log(i - lastPrime, ' es la distancia entre ', i, ' y ', lastPrime);

            foundPrimes++;
            lastPrime = i;
        }
        
        i++;
    }
}

Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.


let numero1 = '22'
let numero2 = '83'

console.log(add(numero1,numero2))

function add(sNumber1, sNumber2)
{
    var s = "";
    var carry = 0;
    
    var maxSize = Math.max(sNumber1.length, sNumber2.length);
    
    for(var i = 0; i < maxSize; i++)
    {
        var digit1 = digitFromRight(sNumber1, i);
        var digit2 = digitFromRight(sNumber2, i);
        
        var sum = digit1 + digit2 + carry;
        var digitSum = sum % 10;
        carry = sum >= 10 ? 1 : 0;
        
        s = digitSum.toString() + s;
    }
    
    if (carry > 0)
        s = carry + s;
    
    return s;
}

function digitFromRight(s, digitNo)
{
    if (digitNo >= s.length)
        return 0;
        
    var char = s[ s.length - 1 - digitNo ];
    return parseInt(char);
}



Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
???? es lo mismo
Desafío de programación #31-a. Create a function that will return the number of words in a text


let texto = 'la cantidad de palabras en este texto es en realidad once'
//console.log(cantDePalabrasEn(texto))


function cantPalabras(texto)
{
    let palabras = 0;
    
    if (texto.length > 0 && !esSeparador(texto[0]))
        palabras++;
    
    for(let i = 1; i < texto.length; i++)
    {
        var caracter = texto[i];
        var caracterPrevio = texto[i - 1];
        
        if (!esSeparador(caracter) && esSeparador(caracterPrevio))
        {
            palabras++;
        }
    }
    
    return palabras;
}

function esSeparador(x)
{
    let separadores = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separadores.includes(x);
}
console.log(cantPalabras(texto))


Desafío de programación #31-b. Create a function that will return the number of words in a text

Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text


let texto = 'el otro dia fui a la cocina!'

function hacerMayusEnPalabras(texto){
  
  if(texto[0] != noEsLetra(texto[0])){
    texto[0].toUpperCase()
  }
  for(let i = 1; i < texto.length; i++){
    let caracter = texto[i]
    let caracterPrevio = texto[i-1]

    if(!noEsLetra(caracter) && noEsLetra(caracterPrevio)){
      texto[i].toUpperCase()
    }
  }
}



function noEsLetra(x)
{
    let numeros = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?",1,2,3,4,5,6,7,8,9,0];
    return numeros.includes(x);
}

console.log(hacerMayusEnPalabras(texto))



Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string

function sumaDeString(string){
  let comma = string.split(","); //divide el string en strings mas chicos entre las comas.
  let suma = 0;
  for(let n of comma){
    suma = suma + parseFloat(n); //parseFloat convierte el float de formato string en numero
  }
  return suma
}

Desafío de programación #34. Create a function that will return an array with words inside a text

let texto = "El otro dia fui a comer pan, que rico estaba!"


function palabrasUsadas(texto){
  let comienzoPalabra = -1
  let palabras = []

  for(let i = 0; i <= texto.length; i++){
      
      let c = i < texto.length ? texto[i] : " "

      if(!caracterRaro(c) && comienzoPalabra < 0){
        comienzoPalabra = i
      }
      if(caracterRaro(c) && comienzoPalabra >= 0){
        let palabra = texto.substring(comienzoPalabra, i)
        palabras.push(palabra)
        comienzoPalabra = -1
      }
  }
  return palabras
}

function caracterRaro(x)
{
    let caracter = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
    return caracter.includes(x);
}


Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array

let csv = "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000"


function bidimensionalizar(csv){
  let csvFilas = csv.split("\n")
    
  for(let i = 0; i < csvFilas.length; i++){
    let csvFila = csvFilas[i].split(";")
    csvFilas[i] = csvFila
      }
  return csvFilas
}

Desafío de programación #36. Create a function that converts a string to an array of characters

string = "el otro día fui a comer pan wacho estaba piola eh!"

function toArrayOfChar(string){
  let arrayOfChar = []
  for(let i = 0; i < string.length; i++){
    arrayOfChar.push(string[i])
  }
  return arrayOfChar  
}

function toArrayOfCharV2(string){
  return Array.from(string) 
}

Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character || Usar array.charCodeAt(i) ||

let string = "¡este es el string a codificar!"

function asciiCodes(string){
  let arrayCodes = []
  for(let i = 0; i < string.length; i++){
    array.push(string.charCodeAt(i))
  }
  return arrayCodes
}

Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string || Usar String.fromCharCode(...array) ||

let code = [73,32,108,105,107,101,32,74,97,118,97,83,99,114,105,112,116]

function codeToString(code){
  return String.fromCharCode(...code)
}

Desafío de programación #39. Implement the Caesar cypher
*/


/*
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación #43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
*/
