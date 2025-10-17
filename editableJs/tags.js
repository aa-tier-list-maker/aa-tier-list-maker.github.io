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
        24: [playable, defense, victim], // Gregory Edgeworth
            
        25: [assistant], // Ema Skye
        26: [prosecutor, defendant], // Lana Skye
        27: [victim], // Bruce Goodman
        30: [culprit], // Damon Gant
        33: [victim], // Neil Marshall
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
        25: [victim], // Celeste Inpax
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
        2: [defense, assistant], // Marvin Grossberg
            
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
        
    "aa4": {
        0: [playable, defense], // Apollo Justice
        1: [assistant], // Trucy Wright
        2: [defense, assistant, culprit], // Kristoph Gavin
        3: [prosecutor], // Klavier Gavin
            
        4: [victim], // Shadi Smith
        6: [defendant], // Wocky Kitaki
        7: [victim], // Pal Meraktis
        8: [culprit], // Alita Tiala
        12: [culprit], // Wesley Stickler
            
        13: [defendant], // Machi Tobaye
        14: [defendant], // Romein LeTouse
        16: [defendant], // Daryan Crescend
            
        18: [defendant], // Vera Misham
        19: [victim], // Drew Misham
            
        21: [victim], // Magnifi Gramarye
    },
    "aa4ex": {
        1: [assistant, defendant], // Phoenix Wright
        2: [prosecutor], // Klavier Gavin
            
        4: [prosecutor], // Winston Payne
            
        8: [defendant], // Zak Gramarye
        12: [playable], // Thalassa Gramarye
    },
        
    "aa5": {
        0: [playable, defense, assistant, defendant], // Athena Cykes
        1: [defendant], // Athena Cykes
            
        4: [prosecutor], // Gaspen Payne
        5: [defendant], // Juniper Woods
        6: [victim], // Candice Arme
        7: [culprit], // Ted Tonate
            
        8: [defendant], // Damian Tenma
        9: [victim], // Rex Kyubi
        12: [culprit], // Florent L'Belle
            
        13: [defendant], // Orla Shipley
        14: [victim], // Jack Shipley
        15: [defendant], // Sasha Buckler
        17: [culprit], // Marlon Rimes
            
        21: [victim], // Constance Courte
        22: [culprit], // Aristotle Means
            
        26: [defendant], // Solomon Starbuck
        27: [victim], // Clay Terran
    },
    "aa5ex": {
        0: [playable, defense, assistant], // Phoenix Wright
        1: [playable, defense, assistant], // Apollo Justice
        2: [playable, defense], // Apollo Justice
        3: [defense], // Apollo Justice
        5: [assistant], // Trucy Wright
        6: [prosecutor], // Miles Edgeworth
        7: [prosecutor], // Klavier Gavin
                
        9: [defendant], // Juniper Woods
                
        11: [culprit], // Phantom
    },
        
    "aa6": {
        0: [prosecutor, defendant], // Nahyuta Sahdmadhi
        1: [judge], // Khura'in Judge
        2: [assistant], // Rayfa Padma Khura'in
            
        3: [defendant], // Ahlbi Ur'gaid
        4: [victim], // Paht Rohl
        5: [culprit], // Pees'lubn Andistan'dhin
            
        7: [victim], // Manov Mistree
        10: [culprit], // Roger Retinz
            
        11: [victim, culprit], // Tahrust Inmee
        12: [victim, culprit], // Puhray Zeh'lot
        13: [defendant], // Datz Are'bal
            
        15: [defendant], // Bucky Whet
        16: [victim], // Taifu Toneido
        18: [culprit], // Geiru Toneido
            
        19: [assistant, defendant, victim], // Dhurke Sahdmadhi
        20: [victim], // Archie Buff
        21: [culprit], // Paul Atishon
            
        23: [victim], // Inga Karkhuul Khura'in
        25: [culprit], // Ga'ran Sigatar Khura'in
            
        26: [defendant], // Ellen Wyatt
        27: [victim], // Dumas Gloomsbury
        29: [culprit], // Pierce Nichody
    },
    "aa6ex": {
        0: [playable, defense, assistant], // Phoenix Wright
        1: [playable, defense], // Apollo Justice
        2: [playable, defense, assistant], // Athena Cykes
        3: [assistant], // Maya Fey
        6: [defendant], // Trucy Wright
        7: [prosecutor, assistant], // Miles Edgeworth
        8: [prosecutor, assistant], // Simon Blackquill
                
        10: [prosecutor], // Gaspen Payne
    },
        
    "plvpw": {
        0: [playable, prosecutor, assistant, victim], // Hershel Layton
        1: [assistant], // Luke Triton
        2: [assistant, defendant], // Espella Cantabela
        3: [judge], // Labyrinthian Judge
        4: [prosecutor], // Zacharias Barnham
        5: [prosecutor], // Darklaw
            
        10: [victim, culprit], // Olivia Aldente
            
        12: [victim], // Robbs & Muggs
        15: [culprit], // Kira
            
        22: [victim], // Newton Belduke
        15: [culprit], // Jean Greyerl
            
        24: [victim], // Storyteller
    },
    "plvpwex": {
        0: [playable, defense, assistant], // Phoenix Wright
        1: [assistant, defendant], // Maya Fey
        2: [defendant], // Espella Cantabela
        4: [culprit], // Kira
        6: [culprit], // Jean Greyerl
    },
        
    "tgaa1": {
        0: [playable, defense, defendant], // Ryunosuke Naruhodo
        1: [assistant], // Susato Mikotoba
        2: [playable, defense, assistant, victim], // Kazuma Asogi
        3: [assistant], // Herlock Sholmes
        4: [assistant], // Iris Wilson
        5: [prosecutor, defendant], // Barok van Zieks
        6: [defendant], // Gina Lestrade
        7: [victim], // Tobias Gregson
        8: [assistant], // Yujin Mikotoba
            
        9: [prosecutor], // Taketsuchi Auchi
        10: [victim], // John H. Wilson
        14: [victim, culprit], // Asa Shinn
            
        15: [culprit], // Nikolina Pavlova
            
        17: [culprit], // Mael Stronghart
        18: [culprit], // Magnus McGuilded
        19: [victim], // "Thrice-Fired" Mason
            
        23: [defendant], // Soseki Natsume
        24: [victim, culprit], // Olive Green
        25: [culprit], // Joan Garrideb
            
        30: [victim], // Pop Windibank
        31: [culprit], // Ashley Graydon
    },
        
    "tgaa2": {
        0: [defendant], // Rei Membami
        1: [culprit], // Raiten Menimemo
            
        2: [victim, culprit], // William Shamspheare
        5: [victim], // Duncan Ross
            
        7: [defendant], // Albert Harebrayne
        8: [victim], // Odie Asman
        14: [culprit], // Enoch Drebber
            
        15: [culprit], // Seishiro Jigoku
        23: [victim], // Genshin Asogi
        24: [victim, culprit], // Klint van Zieks
    }, 
    "tgaa2ex": {
        0: [playable, defense], // Ryutaro Naruhodo
        1: [prosecutor], // Taketsuchi Auchi
            
        5: [prosecutor], // Kazuma Asogi
        8: [playable], // Yujin Mikotoba
    },
        
    "gt": {
        0: [playable, victim], // Yomiel
        1: [victim], // Lynne
        3: [victim], // Jowd
        4: [victim], // Cabanela
        5: [victim], // Kamila
        6: [playable, victim], // Missile
        12: [victim], // Pidgeon Man
        15: [victim], // Justice Minister
        19: [victim], // Guardian of the Park
        20: [victim], // Rindge
        32: [playable, victim], // Sissel
    },  
        
    "aota": {
        0: [playable, defense, prosecutor], // Tyrion Cuthbert
        1: [assistant], // Celeste McCoy
        2: [playable, defense], // Ruby Tymora
        3: [prosecutor, defendant, culprit], // Aria Steelwind
            
        5: [victim], // Flinhart McCoy
        6: [victim, culprit], // Garrick Pierce
            
        9: [defendant], // Wallace Nightgrave
        10: [victim], // Catherine Bellwether
        11: [culprit], // Eris Illmater
        12: [culprit], // Theodore Redmond
            
        17: [defendant], // Stefanic Dracogen
        19: [culprit], // Lloyd von Sanctus
        21: [culprit], // Aster de Wyverngarde
            
        24: [defendant, culprit], // Beatrice Frega
        25: [victim], // William Frega
            
        34: [prosecutor], // Lucio Steelwind
        38: [victim], // Coraline Sibyl
        39: [judge], // Rathallion, the Scaled Lord
    },  
        
    "taj": {
        0: [prosecutor], // Luis Hawk
            
        1: [defendant], // 
        2: [victim], // 
        3: [culprit], // 
            
        4: [defendant], // 
        5: [victim], // 
        8: [culprit], // 
            
        10: [defendant], // 
        11: [victim], // 
        14: [culprit], // 
    },  
        
    "coc": {
        0: [defendant], // Robert Snow
        1: [prosecutor, culprit], // Vex Vulper
        2: [prosecutor, victim], // Erol Brisbane
            
        3: [victim], // 
        4: [playable, defense, defendant], // 
        5: [victim], // Titus Krump
            
        6: [defendant], // 
        7: [culprit], // 
        8: [victim], // Stan Nyph
            
        11: [defendant, culprit], // 
        13: [victim], // 
    },  
    "cocex": {
        2: [defendant], // Erol Brisbane
        5: [culprit], // Hemlock
        6: [culprit], // Boogeyman
    },  
        
    "ryan": {
        0: [prosecutor], // Rodrigo Starwalker
    },  
}
