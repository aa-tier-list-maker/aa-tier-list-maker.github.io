const playable = "Playable Character";
const defense = "Defense Attorney";
const prosecutor = "Prosecutor";
const judge = "Judge";
const assistant = "Assistant";
const defendant = "Defendant";
const victim = "Victim";
const culprit = "Culprit";

allTags = [playable, defense, prosecutor, judge, assistant, defendant, victim, culprit];
        
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
    "aa1": {
        0: [prosecutor], // Winston Payne
        1: [defendant], // Larry Butz
        2: [victim], // Cindy Stone
        3: [culprit], // Frank Sahwit
            
        4: [defense], // Marvin Grossberg
        7: [culprit], // Redd White
            
        9: [defendant], // Will Powers
        10: [victim], // Jack Hammer
        15: [culprit], // Dee Vasquez
            
        16: [prosecutor, culprit], // Manfred von Karma
        17: [defense, victim], // Robert Hammond
        21: [culprit], // Yanni Yogi
        24: [defense, victim], // Gregory Edgeworth
            
        25: [assistant], // Ema Skye
        26: [prosecutor, defendant], // Lana Skye
        27: [victim], // Bruce Goodman
        30: [culprit], // Damon Gant
        33: [culprit], // Neil Marshall
    },
    "aa2": {
        0: [defendant], // Maggey byrde
        1: [victim], // Dustin Prince
        2: [culprit], // Richard Wellington
            
        3: [victim], // Turner Grey
        4: [culprit], // Morgan Fey
        5: [culprit], // Ini Miney
        6: [culprit], // Mimi Miney
            
        9: [defendant], // Max Galactica
        10: [victim], // Russell Berry
        17: [culprit], // Acro
            
        20: [defendant, culprit], // Matt Engarde
        21: [victim], // Juan Corrida
        23: [culprit], // Shelly de Killer
    },
    "aa5": {
        0: [playable, defense, defendant], // Athena Cykes
    }
}
