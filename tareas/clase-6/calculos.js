function mayor(datos){
    let mayor = datos[0]
    for(let i = 0; i < datos.length; i++){
        if(datos[i] > mayor){
            mayor = datos[i]
        }
    }
    return mayor
}
function menor(datos){
    let menor = datos[0]
    for(let i = 0; i < datos.length; i++){
        if(datos[i] < menor){
            menor = datos[i]
        }
    }
    return menor
}

function promedio(datos){
    let acumulador = 0
    for(let i = 0; i < datos.length; i++){
        acumulador = acumulador + datos[i]
    }
    promedios = acumulador/datos.length
    return promedios
}