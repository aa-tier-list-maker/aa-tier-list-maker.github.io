const femaleCharacter = "Female";
const maleCharacter = "Male";
const dancer = "dancer";
const apothecary = "apothecary";
const warrior = "warrior"
const hunter = "hunter"
const scholar = "scholar"
const merchant = "merchant"
const cleric = "cleric"
const thief = "thief"
const fourStar = "4 *"
const fiveStar = "5 *"
allTags = [femaleCharacter, maleCharacter, dancer, apothecary, warrior, hunter, scholar, merchant, cleric, thief, fourStar, fiveStar];
var allCotCCharacters = window.folders[2][1]

var cotc = {}
for (let i = 0; i < 57; i++) {
    cotc[i] = [fourStar]
    } 
for (let i = 57; i < allCotCCharacters; i++) {
    cotc[i] = [fiveStar]
    } 
        
const imgTags = {
    "octo1":{
        1: [femaleCharacter, cleric],
        2: [maleCharacter, scholar],
        3: [femaleCharacter, merchant],
        4: [maleCharacter, warrior],
        5: [femaleCharacter, dancer],
        6: [maleCharacter, apothecary],
        7: [maleCharacter, thief],
        8: [femaleCharacter, hunter]
    },
    "octo2": {
        1: [femaleCharacter, hunter],
        2: [femaleCharacter, apothecary],
        3: [femaleCharacter, thief],
        4: [maleCharacter, scholar],
        5: [maleCharacter, merchant],
        6: [femaleCharacter, dancer],
        7: [maleCharacter, cleric],
        8: [maleCharacter, warrior]
    },
    "cotc": cotc
}