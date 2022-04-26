// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!
/*
const MI_NOMBRE = 'lucio'
let NOMBRE_PRIMO_GRANDE = 'leonardo'

const nombreUsuario = (prompt(`¿Cómo te llamas?`) || '').toLowerCase()

if (nombreUsuario === MI_NOMBRE) {
    console.log(`Hola, Tocayo! Yo también me llamo ${MI_NOMBRE}`)
} else if (nombreUsuario === NOMBRE_PRIMO_GRANDE) {
    console.log(`Hola ${nombreUsuario}, te llamás igual que mi primo mayor`)
} else if (nombreUsuario.trim().length === 0) {
    console.log('No escribiste ningún nombre.')
}
else { console.log(`Hola ${nombreUsuario}!`) }

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const edadUsuario = Number(prompt(`Contame, ¿Cuántos años tenés?`))
const MI_EDAD = 23

if (edadUsuario === MI_EDAD) {
    console.log(`Ah! Tenemos la misma edad!`)
} else if (edadUsuario > MI_EDAD) {
    console.log(`Ah no, ya se te ven las canas a vos`)
} else if (edadUsuario < MI_EDAD) {
    console.log(`Awwww, todavía sos un bebé`)
} else {
    console.log('No entendí tu respuesta')
}


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const preguntaDocumento = (prompt(`¿Qué onda, tenés documento?`) || '').toLowerCase()

if (preguntaDocumento == 'si') {
    let edadUsuario = Number(prompt(`¿Y qué edad tenés?`))
    if (edadUsuario >= 18) {
        console.log(`De una, sos bienvenido/a`)
    } else if (edadUsuario < 18){console.log(`Ah no, con ${edadUsuario} años no pasas, rajá`)
   } else {console.log('No entendí tu respuesta')}
} else if (preguntaDocumento == 'no') {
    console.log(`Y mirá, sin documento no te puedo dejar pasar.`)
} else { console.log(`No te entendí o no me respondiste lo que te pregunté primero.`) }

*/