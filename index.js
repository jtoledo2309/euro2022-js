
// Practica para generar los playoff de una EUROCOPA

class Team {
    constructor(name, group){
        this.name = name
        this.group = group
        this.goalsFor = 0
        this.goalsAgainst = 0
    }
}

const Inglaterra = new Team ('Inglaterra', 'A')
const Austria = new Team ('Austria', 'A')
const Noruega = new Team ('Noruega', 'A')
const NorthIreland = new Team ('NorthIreland', 'A')
const Alemania = new Team ('Alemania', 'B')
const Dinamarca = new Team ('Dinamarca', 'B')
const España = new Team ('España', 'B')
const Finlandia = new Team ('Finlandia', 'B')
const Holanda = new Team ('Holanda', 'C')
const Suecia = new Team ('Suecia', 'C')
const Rusia = new Team ('Rusia', 'C')
const Suiza = new Team ('Suiza', 'C')
const Francia = new Team ('Francia', 'D')
const Italia = new Team ('Italia', 'D')
const Belgica = new Team ('Belgica', 'D')
const Islandia = new Team ('Islandia', 'D')

//Grupos con EL OBJETO de los equipos
const groupA = [Inglaterra, Austria, Noruega, NorthIreland]
const groupB = [Alemania, Dinamarca, España, Finlandia]
const groupC = [Holanda, Suecia, Rusia, Suiza]
const groupD = [Francia, Italia, Belgica, Islandia]

Array.prototype.shuffle = function () {
    var i = this.length, j, temp;
    if (i == 0) return this;
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
}

//Funcion para desordenar los strings de cada array de grupos y generarme un nuevo array con los dos primeros strings resultantes
function elegirGanador (groups) {
    const arrayCopia = groups.shuffle()
    const arrayGanadores = [arrayCopia[0], arrayCopia[1]]
    return arrayGanadores
    /* Otra forma de hacerlo
    groups.shuffle()
    return [groups[0], groups[1]]
    */
}

//El torneo estará compuesot por los 2 primeros eqipos de cada array de grupos
const torneoTeams = [
    ...elegirGanador(groupA),
    ...elegirGanador(groupB),
    ...elegirGanador(groupC),
    ...elegirGanador(groupD)
]

//Nombrar a que corresponde cada posicion del array para mostrar mas adelante campeon y subcampeon de cada grupo
const campeonA = torneoTeams[0]
const subcampeonA = torneoTeams[1]
const campeonB = torneoTeams[2]
const subcampeonB = torneoTeams[3]
const campeonC = torneoTeams[4]
const subcampeonC = torneoTeams[5]
const campeonD = torneoTeams[6]
const subcampeonD = torneoTeams[7]

//Bloque para la funcion de jugar partidos

function partido (teamA, teamB) {
    let goalsA
    let goalsB
    let ganadorPartido

    //No puede haber empate en los resultados
    while (goalsA === goalsB){
         goalsA = generateGoals(teamA.name)
         goalsB = generateGoals(teamB.name)
    }
    
    //Asignar el ganador del partido el equipo con mas goles
    if(goalsA > goalsB){
         ganadorPartido = teamA
    } else {
         ganadorPartido = teamB
    }

    // const ganadorPartido = goalsA > goalsB ? teamA : teamB

    console.log(`${teamA.name} ${goalsA} - ${goalsB} ${teamB.name} => ${ganadorPartido.name}`)

    return ganadorPartido
}

function generateGoals(){
    return Math.floor(Math.random()*7)
}

// Funcion para los cuartos, de aqui obtengo los 4 semifinalistas y los meto en un array que utilizare en la funcion de semis
function jugarCuartos(torneoTeams){
    const semifinalista1 = partido(torneoTeams[0],torneoTeams[3])
    const semifinalista2 = partido(torneoTeams[2],torneoTeams[1])
    const semifinalista3 = partido(torneoTeams[4],torneoTeams[7])
    const semifinalista4 = partido(torneoTeams[6],torneoTeams[5])

    return [semifinalista1, semifinalista2,semifinalista3,semifinalista4]
}


/*
function jugarCuartos(array){
    let semisTeams= []

    semisTeams.push(partido(array[0],array[3]))
    semisTeams.push(partido(array[2],array[1]))
    semisTeams.push(partido(array[4],array[7]))
    semisTeams.push(partido(array[6],array[5]))

    return semisTeams
}
*/

//Funcion para jugar las semifinales y determinar los equipos que pasan a la final 
function jugarSemis(array){
    const finalista1 = partido(array[0], array[2])
    const finalista2 = partido(array[1], array[3])

    return [finalista1, finalista2]
}

//Funcion para jugar la final y mostar el ganador del torneo
function jugarFinal(array){
    const ganadorTorneo = partido(array[0], array[1])

    console.log(`== ${ganadorTorneo.name} campeona de la EURO WOMEN'S CUP ==`)
}


//console.log(torneoTeams)

//Mostrar los equipos que han pasado de cada grupo
console.log('================================================')
console.log('==== Comienzan las eliminatorias del torneo ====')
console.log('================================================')
console.log(`Grupo A: ${campeonA.name} , ${subcampeonA.name}`)
console.log(`Grupo B: ${campeonB.name} , ${subcampeonB.name}`)
console.log(`Grupo C: ${campeonC.name} , ${subcampeonC.name}`)
console.log(`Grupo D: ${campeonD.name} , ${subcampeonD.name}`)

//Fases eliminatorias
console.log('')
console.log('==== CUARTOS DE FINAL ====')
const semisTeams = jugarCuartos(torneoTeams)

console.log('')
console.log('==== SEMIFINALES ====')
const finalTeams = jugarSemis (semisTeams)

console.log('')
console.log('==== FINAL ====')
jugarFinal(finalTeams)