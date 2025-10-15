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
        4: [prosecutor, assistant], // Franziska von Karma
        5: [prosecutor, culprit], // Godot
        6: [assistant], // Mia Fey
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
        0: [assistant, defendant], // Maggey byrde
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
        23: [victim], // Celeste Inpax
    },
        
    "aa3": {
        0: [victim], // Doug Swallow
        1: [culprit], // Dahlia Hawthrone
            
        2: [defendant], // Ron Delite
        4: [culprit], // Luke Atmey
        5: [victim], // Kane Bullard
            
        6: [victim], // Glen Elg
        12: [defense, culprit], // Furio Tigre
            
        14: [judge], // Canadian Judge
        15: [defendant], // Terry Fawles
        16: [victim], // Valerie Hawthrone
            
        17: [defendant], // Iris
    },
    "aa3ex": {
        0: [prosecutor], // Winston Payne
        1: [defendant], // Phoenix Wright
        2: [defense, defendant], // Marvin Grossberg
            
        7: [defendant], // Maggey Byrde
            
        8: [defense, assistant], // Diego Armando
        9: [prosecutor], // Miles Edgeworth
            
        12: [victim], // Misty Fey
    },
        
    "aai1": {
        0: [assistant], // Kay Faraday
        2: [culprit], // Shih-na
            
        3: [victim], // Buddy Faith
        4: [prosecutor, culprit], // Jacques Portsman
            
        5: [victim], // Akbey Hicks
        6: [assistant], // Rhoda Teneiro
        8: [culprit], // Cammy Meele
            
        9: [culprit], // Lance Amano
        11: [victim], // Colin Devorae
            
        13: [prosecutor, victim], // Byrne Faraday
        14: [victim], // Deid Mann
        15: [victim], // Mack Rell
            
        17: [victim], // Byrne Faraday
        19: [culprit], // Quercus Alba
        20: [victim], // Ka-Shi Nou
    },
    "aai1ex": {
        1: [assistant], // Dick Gumshoe
        3: [prosecutor, assistant], // Franziska von Karma
        4: [prosecutor, assistant], // Franziska von Karma
            
        10: [prosecutor], // Manfred von Karma
        11: [defense], // Calisto Yew
    },
        
    "aai2": {
        0: [judge], // Verity Gavèlle
        1: [prosecutor], // Eustace Winner
        2: [defense], // Eddie Fender
            
        3: [victim, culprit], // Di-Jun Wang
        5: [victim, culprit], // Bronco Knight
        6: [victim], // Bastian Rook
            
        7: [defendant], // Simeon Saint
        9: [culprit], // Fifi Laguarde
            
        12: [defendant], // Samson Tangaroa
        13: [victim], // Artie Frost
        14: [culprit], // Judy Bound
        15: [victim, culprit], // Carmelo Gusto
            
        17: [defense, victim], // Rosie Ringer
        20: [prosecutor, culprit], // Excelsius Winner
        22: [victim], // Alf Aldown
    },
    "aai2ex": {
        3: [assistant], // Eddie Fender
        4: [defendant], // Samson Tangaroa
        6: [assistant], // Tyrell Badd
        7: [culprit], // Carmelo Gusto
            
        13: [culprit], // Simeon Saint
    },
        
    "aa5": {
        0: [playable, defense, defendant], // Athena Cykes
    }
}
