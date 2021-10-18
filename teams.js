'use strict';

class Team {
    constructor(){
        this.teamname = "Default team";
        this.trainer = "Ash";
        this.roster = [];
    }
    describe(){
        return `Team ${this.teamname} met trainer ${this.trainer} has the following pokemon: ${[this.roster]}`;
    }


}

export default Team;