const playable = "Playable Character";
const defense = "Defense Attorney";
const prosecutor = "Prosecutor";
const judge = "Judge";
const assistant = "Assistant";
const defendant = "Defendant";
const victim = "Victim";
const culprit = "Culprit";

allTags = [playable, defense, prosecutor, judge, defendant, victim, culprit];
        
const imgTags = {
    "pwt":{
        0: [playable, defense], // Phoenix Wright
        1: [playable, assistant, defendant], // Maya Fey
        2: [judge], // Judge
        3: [playable, defense, prosecutor, defendant], // Miles Edgeworth
        4: [prosecutor], // Franziska von Karma
        5: [prosecutor, culprit], // Godot
        7: [playable, defense, victim], // Mia Fey
        8: [assistant], // Pearl Fey
    },
    "aa5": {
        0: [playable, defense, defendant], // Athena Cykes
    }
}
