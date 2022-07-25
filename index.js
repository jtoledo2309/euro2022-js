
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
//Funcion para desordenar los strings dentro de un array y generarme un nuevo array con los dos primeros strings resultantes
function elegirGanador (array) {
    const arrayCopia = array.shuffle()
    const arrayGanadores =[arrayCopia[0], arrayCopia[1]]
    return arrayGanadores
}

//El torneo estará compuesot por los 2 primeros eqipos de cada array
const torneoTeams = [
    ...elegirGanador(groupA),
    ...elegirGanador(groupB),
    ...elegirGanador(groupC),
    ...elegirGanador(groupD)
]
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
    let goalsA = generateGoals(teamA.name)
    let goalsB = generateGoals(teamB.name)
    let ganadorPartido = undefined

    while (goalsA === goalsB){
         goalsA = generateGoals(teamA.name)
         goalsB = generateGoals(teamB.name)
    }
    
    if(goalsA > goalsB){
         ganadorPartido = teamA
    } else {
         ganadorPartido = teamB
    }

    console.log(`${teamA.name} ${goalsA} - ${goalsB} ${teamB.name} => ${ganadorPartido.name}`)

    return ganadorPartido
}

function generateGoals(){
    return Math.floor(Math.random()*7)
}


function jugarCuartos(array){

    partido(array[0],array[3])
    partido(array[2],array[1])
    partido(array[4],array[7])
    partido(array[6],array[5])
}

/*
let semisArray= []

function jugarCuartos(array, semisArray){

    semisTeams.push(partido(array[0],array[3]))
    semisTeams.push(partido(array[2],array[1]))
    semisTeams.push(partido(array[4],array[7]))
    semisTeams.push(partido(array[6],array[5]))

    return semisArray
*/

function jugarSemis(array){
    partido(array[0], array[2])
    partido(array[1], array[3])
}

function jugarFinal(array){
    partido(array[0], array[1])

    console.log(`XXXX ganador del torneo`)
}

console.log(torneoTeams)
console.log('================================================')
console.log('==== Comienzan las eliminatorias del torneo ====')
console.log('================================================')
console.log(`Grupo A: ${campeonA.name} , ${subcampeonA.name}`)
console.log(`Grupo B: ${campeonB.name} , ${subcampeonB.name}`)
console.log(`Grupo C: ${campeonC.name} , ${subcampeonC.name}`)
console.log(`Grupo D: ${campeonD.name} , ${subcampeonD.name}`)
//mostrarGanadores(torneoTeams)
console.log('')
console.log('==== CUARTOS DE FINAL ====')

jugarCuartos(torneoTeams)