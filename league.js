import torneoTeams from "./teams.js";

class League {
    constructor (name, teams){
        this.name = name
        this.setupTeams(teams)
        this.matches = []
        this.calendar = []
    }

    setupTeams(teams){
        this.teams = []
        for(let teamUnique of teams){
            let teamInfo = this.customizeTeam(teamUnique)
            this.teams.push(teamInfo)
        }
    }

    customizeTeam(teamUnique){
        return {
            name : teamUnique,
            initialGroup: this.setGroups(this.teams),
            matchesWon : 0,
            matchesLost : 0,
            goalsFor: 0,
            goalsAgainst : 0
        }
    }

    //Establecer el grupo al que pertenece cada equipo
    setGroups(arrayTeams){
        //Recorrer el array sabiendo que cada 2 posiciones, cambia de grupo
        let i = 0
        for(team of arrayTeams){
            if (i<2){
                this.teams.initialGroup = 'Group A'
                i++
            }else if(i<4){
                this.teams.initialGroup = 'Group B'
                i++
            }else if(i<6){
                this.teams.initialGroup = 'Group C'
                i++
            }else{
                this.teams.initialGroup = 'Group D'
                i++
            }
        }return this.team.initialGroup
    }
}

//const UefaEuro = new League("Uefa Euro 2022", torneoTeams)
//console.log(UefaEuro.setupTeams(torneoTeams))