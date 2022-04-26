/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


document.querySelector('#siguiente-paso').onclick = function(){
    const $cantIntegrantes = document.querySelector("#cantidad-familiares")
    const cantIntegrantes = Number($cantIntegrantes.value)

    borrarIntegrantes()
    crearIntegrantes(cantIntegrantes)

}
document.querySelector('#reiniciar').onclick = reiniciar;

function crearIntegrantes(cantIntegrantes){
    if(cantIntegrantes > 0){
        mostrarBotonCalculo()
    } else{reiniciar()}

    for(let i = 0; i < cantIntegrantes; i++){
        crearIntegrante(i)
    }
}
function crearIntegrante(indice) {
    const $div = document.createElement('div')
    $div.className = 'integrante';
    

    const $label = document.createElement('label')
    $label.textContent = 'Ingrese la edad del integrante N° ' + (indice + 1) + ': '
    
    const $input = document.createElement('input')
    $input.type = 'number';

    $div.appendChild($label)
    $div.appendChild($input)


    const $integrantes = document.querySelector('#familiares')
    
    $integrantes.appendChild($div)
}
function mostrarBotonCalculo(){
    document.querySelector('#calcular').className = 'boton'
}
function borrarIntegrantes(){
    document.querySelector('#familiares').innerText = ''
}
function ocultarBotonCalculo(){
    document.querySelector("#calcular").className = 'oculto'
}
function reiniciar(){
    borrarIntegrantes()
    ocultarBotonCalculo()
    ocultarResultados()
    borrarSalarios()
    ocultarResultadosSalarios()
}

document.querySelector('#calcular').onclick = function(){
    const datos = obtenerEdadesIntegrantes()
    const datosSalarios = obtenerSalariosIntegrantes();
    document.querySelector('#mayor-edad').textContent = ''
    document.querySelector('#menor-edad').textContent = ''
    document.querySelector('#promedio-edad').textContent = ''
    mostrarEdad('mayor', mayor(datos));
    mostrarEdad('menor', menor(datos));
    mostrarEdad('promedio', promedio(datos));
    mostrarResultados()
    
    if(datosSalarios.length > 0){
        mostrarSalario('mayor', mayor(datosSalarios)); 
        mostrarSalario('menor', menor(datosSalarios));
        mostrarSalario('promedio', promedio(datosSalarios));
        mostrarResultadosSalarios()
    }
    
    
}

function obtenerEdadesIntegrantes(){
    const $integrantes = document.querySelectorAll('.integrante input')
    const edades = []
    for(let i = 0; i < $integrantes.length; i++){
        if($integrantes[i].value == ''){
            continue;
        }else{
        edades.push(Number($integrantes[i].value))
        }
    }
    return edades
}

function mostrarResultados(){
    document.querySelector('#resultados').className = ''
}
function mostrarEdad(tipo, numero){
    document.querySelector(`#${tipo}-edad`).textContent = numero
}
function ocultarResultados(){
    document.querySelector('#resultados').className = 'oculto'
}

//////////////////
//////TAREA2//////
//////////////////

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector('#agregar-salario-anual').onclick = function(){
    const $cantIntegrantes = document.querySelector("#cantidad-familiares")
    const cantIntegrantes = Number($cantIntegrantes.value)

    borrarSalarios() 
    crearSalarios(cantIntegrantes)
}

function crearSalarios(cantIntegrantes){
    for(let i = 0; i < cantIntegrantes; i++)
        crearSalario(i)
}

function crearSalario(indice){
    const $divSalario = document.createElement('div')
    $divSalario.className = 'salario'

    const $labelSalario = document.createElement('label')
    $labelSalario.textContent = 'Ingrese el salario del integrante N°' + (indice + 1) + ': '

    const $inputSalario = document.createElement('input')
    $inputSalario.type = 'number'

    $divSalario.appendChild($labelSalario)
    $divSalario.appendChild($inputSalario)


    const $salarios = document.querySelector('#salarios')
    
    $salarios.appendChild($divSalario)
}

function borrarSalarios(){
    document.querySelector('#salarios').innerText = ''
}
function mostrarSalarios(){
    document.querySelector('#salarios').className = ''
}
function ocultarSalarios(){
    document.querySelector('#salarios').className = 'oculto'
}

document.querySelector('#quitar-salario-anual').onclick = function(){
    borrarSalarios()
    ocultarResultadosSalarios()
}

function ocultarResultadosSalarios(){
    document.querySelector('#resultados-salarios').className = 'oculto'
}

function mostrarSalario(tipo, numero){
    document.querySelector(`#${tipo}-salario`).textContent = numero
}
function mostrarResultadosSalarios(){
    document.querySelector('#resultados-salarios').className = ''
}

function obtenerSalariosIntegrantes(){
    const $salarios = document.querySelectorAll('.salario input')
    const salarios = []
    for(let i = 0; i < $salarios.length; i++){
        if($salarios[i].value == ''){
            continue;
        }else{salarios.push(Number($salarios[i].value))
        }
    }
    return salarios
}