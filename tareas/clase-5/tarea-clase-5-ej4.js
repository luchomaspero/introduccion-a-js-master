//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."




lista = document.querySelector("#lista-ordenada")


const no1 = Number(document.querySelector("#No1").innerText)
const no2 = Number(document.querySelector("#No2").innerText)
const no3 = Number(document.querySelector("#No3").innerText)
const no4 = Number(document.querySelector("#No4").innerText)
const no5 = Number(document.querySelector("#No5").innerText)
const no6 = Number(document.querySelector("#No6").innerText)
const no7 = Number(document.querySelector("#No7").innerText)
const no8 = Number(document.querySelector("#No8").innerText)
const no9 = Number(document.querySelector("#No9").innerText)

let arrayNumeros = [no1,no2,no3,no4,no5,no6,no7,no8,no9]

document.querySelector("#el-promedio").textContent = "El promedio es " + calcularPromedio(arrayNumeros)

document.querySelector("#el-peque").textContent = "El número más pequeño es " + elPeque(arrayNumeros)

document.querySelector("#el-grande").textContent = "El número más grande es " + elGrande(arrayNumeros)

document.querySelector("#el-mas-repetido").textContent = "El número más frecuente es " + elFrecuente(arrayNumeros)


function calcularPromedio(array){
    let suma = 0
    for(let i = 0; i< array.length; i++){
        suma = suma + array[i]
    }
    let promedio = suma/array.length
    return promedio
}

function elPeque(array){
    let peque = array[0]
    for(let i = 1; i < array.length; i++){
        if(peque > array[i]){
            peque = array[i]
        }
    }
    return peque
}

function elGrande(array){
    let grande = array[0]
    for(let i = 1; i < array.length; i++){
        if(grande < array[i]){
            grande = array[i]
        }
    }
    return grande
}

function elFrecuente(array){
    let contadores = []
    var frecuente
    for(let i = 0; i < array.length; i++){
        let contador = 0
        for(let j = 0; j < array.length; j++){
            if(array[i] == array[j]){
                contador++
                if(elGrande(contadores) == contador){
                    frecuente = array[i]
                }
            }
        }
        contadores.push(contador)
        
    }
    return frecuente
}

/*
for (var i = 0; i < indices.length; i++) {

  for (var j = 0; j < x.length; j++) {
    if (i == x[j]) {
      indices[i] = indices[i] + 1;
    }
  }
}
console.log(indices)
*/