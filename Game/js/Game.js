class Game {
    constructor(map, teams, round = 1){
        this.map =map;
        this.teams =teams;
        this.round=round;
    }
    startRound(){}

    createTeam(extraCharacter){}

    createGame(){}

    getTeam(userId){}

    move(userId, actions, direction){}

    returnToBase(userId){}

    checkWinner() 
    
}