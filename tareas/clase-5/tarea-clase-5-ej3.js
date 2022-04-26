
//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


$calcularTiempoTotal = document.querySelector("#boton-calcular");

$calcularTiempoTotal.onclick = function(){
    horasPrimerVideo = Number(document.querySelector("#horas-primer-video").value);
    minutosPrimerVideo = Number(document.querySelector("#minutos-primer-video").value);
    segundosPrimerVideo = Number(document.querySelector("#segundos-primer-video").value);

    horasSegundoVideo = Number(document.querySelector("#horas-segundo-video").value);
    minutosSegundoVideo = Number(document.querySelector("#minutos-segundo-video").value);
    segundosSegundoVideo = Number(document.querySelector("#segundos-segundo-video").value);

    horasTercerVideo = Number(document.querySelector("#horas-tercer-video").value);
    minutosTercerVideo = Number(document.querySelector("#minutos-tercer-video").value);
    segundosTercerVideo = Number(document.querySelector("#segundos-tercer-video").value);

    horasCuartoVideo = Number(document.querySelector("#horas-cuarto-video").value);
    minutosCuartoVideo = Number(document.querySelector("#minutos-cuarto-video").value);
    segundosCuartoVideo = Number(document.querySelector("#segundos-cuarto-video").value);

    horasQuintoVideo = Number(document.querySelector("#horas-quinto-video").value);
    minutosQuintoVideo = Number(document.querySelector("#minutos-quinto-video").value);
    segundosQuintoVideo = Number(document.querySelector("#segundos-quinto-video").value);

    horasTotales = suma(horasPrimerVideo,horasSegundoVideo,horasTercerVideo,horasCuartoVideo,horasQuintoVideo)
    minutosTotales = suma(minutosPrimerVideo,minutosSegundoVideo,minutosTercerVideo,minutosCuartoVideo,minutosQuintoVideo)
    segundosTotales = suma(segundosPrimerVideo,segundosSegundoVideo,segundosTercerVideo,segundosCuartoVideo,segundosQuintoVideo)

    resultado = tiempoTotal(horasTotales,minutosTotales,segundosTotales)
    
    document.querySelector("#resultado").innerText = resultado
}

function suma(n1,n2,n3,n4,n5){
    var sumatoria = n1 + n2 + n3 + n4 +n5
    return sumatoria
}

function tiempoTotal(horas,minutos,segundos){
    var contadorMinutos = 0
    while(segundos >= 60){
        segundos = segundos - 60;
        contadorMinutos++;
    }
    minutos = minutos + contadorMinutos;
    var contadorHoras = 0
    while(minutos >= 60){
        minutos = minutos - 60;
        contadorHoras++;
    }
    horas = horas + contadorHoras
    return `El tiempo total es de: ${horas}hs ${minutos}min ${segundos}seg`
}