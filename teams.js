
//Funcion para mezclar arrays
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

//Grupos con los equipos
export const groupA = ['Inglaterra', 'Austria', 'Noruega', 'North Irlanda']
export const groupB = ['Alemania', 'Dinamarca', 'España', 'Finlandia']
export const groupC = ['Holanda', 'Suecia', 'Rusia', 'Suiza']
export const groupD = ['Francia', 'Italia', 'Belgica', 'Islandia']

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

export default torneoTeams

//Funcion para mostrar los equipos que han pasado de cada grupo
export function mostrarGanadores (arrayTeams){

    console.log('Equipos que participan en el playoff: ')
    let teamsPerGroup = 2
    for (let team of arrayTeams){
        if (teamsPerGroup === 2){
            console.log(`1 de grupo: ${team}`)
            teamsPerGroup = 1
        }else {
            console.log(`2 de grupo ${team}`)
            teamsPerGroup = 2
        }
    }
}

mostrarGanadores(torneoTeams)