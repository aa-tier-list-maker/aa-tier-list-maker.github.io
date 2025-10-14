// character images
var singleChar = "<div class='character'></div>";
var singleCheckWrap = "<div class='characterCheckWrap'></div>";
var selectAllWrap = "<div class='selectAllWrap'></div>";

// number is last numbered filename in the list for ease of organization
var imgGamesFolder = [
    ["aa", 0, ""],
    ["pwt", 8, "PW Trilogy Main Characters"],
    ["aa1", 0, "Phoenix Wright: Ace Attorney"],
    
    ["aa2", 0, "Justice for All"],
    ["aa2ex", 2, "Justice for All (Extras)"],
    
    ["aa3", 0, "Trials and Tribulations"],
    ["aa3ex", 11, "Trials and Tribulations (Extras)"],
    
    ["aai1", 21, "AAI: Miles Edgeworth"],
    ["aai1ex", 12, "Investigations (Extras)"],
    
    ["aai2", 21, "AAI2: Prosecutor's Gambit"],
    ["aai2ex", 12, "Investigations 2 (Extras)"],
    
    ["aa4", 23, "Apollo Justice: Ace Attorney"],
    ["aa4ex", 10, "Apollo Justice (Extras)"],
    
    ["aa5", 31, "Dual Destinies"],
    ["aa5ex", 10, "Dual Destinies (Extras)"],
    
    ["aa6", 28, "Spirit of Justice"],
    ["aa6ex", 13, "Spirit of Justice (Extras)"],
    
    ["plvpw", 25, "Professor Layton"],
    ["plvpwex", 5, "Professor Layton (Extras)"],
    
    ["tgaa1", 32, "TGAA: Adventures"],
    ["tgaa1ex", 1, "TGAA: Adventures (Extras)"],
    
    ["tgaa2", 23, "TGAA2: Resolve"],
    ["tgaa2ex", 9, "TGAA2: Resolve (Extras)"],
    
    ["aota", 39, "Attorney of the Arcane"],
    ["taj", 15, "Trials after Justice"],
    
    ["coc", 14, "Contempt of Court"],
    ["cocex", 6, "Contempt of Court (Extras)"],
    
    ["ryan", 0, "Ryan Mendoza: New Attorney"]
];

window.folders = imgGamesFolder
var currentGame;
var currentGameChars = imgGamesFolder;
var characters;
var characterId;

$(document).on("click", "#characters", function () { // open game changer modal
    openPopup("#charChange");
});

$(document).on("click", "#help", function () { // open help modal
    openPopup("#helpMenu");
});

$(document).on("click", "#filter", function () { // open filter modal
    openPopup("#filterMenu");
});

$(document).on("change", ".selectAll", function () { // add/remove all characters
    if ($(this).is(":checked")) {
        $(".characterCheck").each(function () {
            if (!$(this).is(":checked")) {
                $(this).prop('checked', true).change();
            }
        });
    } else {
        $(".characterCheck").each(function () {
            $(this).prop('checked', false).change();
        });
    }
});

function openPopup(popup) {
    $(popup).css("display", "block");
    $("#overlay").css("opacity", 1);
    $("#overlay").css("visibility", "visible");
    $(popup).css("top", alignPopup($(popup)));
}

function closePopups() {
    $("#modal").css("display", "none");
    $("#charChange").css("display", "none");
    $("#helpMenu").css("display", "none");
    $("#filterMenu").css("display", "none");
    $("#screenshotShow canvas").remove();
}

function alignPopup(popup) {
    return Math.floor(($(window).height() - popup.height()) / 2) + "px";
}

// https://stackoverflow.com/a/3971432 thanks Zack Katz :D
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function filter(inputTags, tagList) {
    $(".character").each(function () {
        // ignore characters already in the tiers
        if ($(this).parent().attr("id") != "char") {
            return;
        }
        tags = $(this).attr("id").split("-");
        // default for no filters
        if (inputTags.length == 0) {
            $(this).show();
        }
        // with any text, hide untagged characters
        else if (!tagList[tags[0]] || !tagList[tags[0]][tags[1]]) {
            $(this).hide();
        }
        // with any text, show tagged, matching characters
        else if (inputTags.some(text => tagList[tags[0]][tags[1]].includes(text))) {
            $(this).show();
        }
        // with any text, hide tagged, unmatching characters
        else {
            $(this).hide();
        }
    });
}

function loadFilterList(allTags) {
    var filterCheckWrap = "<div class='filterCheckWrap'></div>";
    allTags.forEach(function (tag, i) {
        $("#filterChecklist div:last-child").after(filterCheckWrap);
        $("#filterChecklist div:last-child").html(tag + ": <input type='checkbox' class='filterCheck' id='" + tag + "' >");
    });
}

function updateFilters(tagList) {
    currTags = []
    $(".filterCheck").each(function () {
        if ($(this).is(":checked")) {
            currTags.push($(this).attr("id"));
        }
    });
    filter(currTags, tagList);
}

function tierlistSize() {
    if ($("table").width > $("#tablewrap").width)
        $("#tablewrap").css("display", "table-cell");
    else
        $("#tablewrap").css("display", "block");
}

function toCode() { // format game==label|color|char1|char2|...==label|color|char1|char2|...==...
    var codeColors = [], labels = [], currentChars = [], shareCode = "";
    characters = [];
    $("tr").each(function () {
        currentChars = [];
        labels.push($(this).find(".label").html());
        codeColors.push(colors.indexOf(rgb2hex($(this).find(".labelHolder").css("background-color")).toUpperCase()));
        $(this).find(".character").each(function () {
            currentChars.push($(this).attr("id"));
        });
        characters.push(currentChars);
    });
    shareCode += currentGame + "==";
    for (var i = 0; i < labels.length; i++) {
        shareCode += labels[i] + "|" + codeColors[i];
        if (characters[i].length != 0)
            shareCode += "|";
        for (var c = 0; c < characters[i].length; c++) {
            shareCode += characters[i][c];
            if (c != characters[i].length - 1)
                shareCode += "|";
        }
        if (i != labels.length - 1)
            shareCode += "==";
    }
    return shareCode;
}

function loadCode(code, defaultList) {
    var codeSplit = [], tempTier = [], processedCode = [];
    codeSplit = code.split("==");
    for (var i = 0; i < codeSplit.length; i++) {
        tempTier = codeSplit[i].split("|");
        tempTier[1] = Number(tempTier[1]);
        for (var j = 2; j < tempTier.length; j++) {
            tempTier[j] = tempTier[j].split("-");
        }
        processedCode[i] = tempTier;
    }
    $("tr").each(function () {
        $(this).remove();
    });

    changeGame(defaultList);
    // select only the games that appear
    $(".selectAll").prop('checked', false).change();
    selectionList = [];
    for (var i = 1; i < processedCode.length; i++) {
        for (var j = 2; j < processedCode[i].length; j++) {
            title = processedCode[i][j][0];
            checkBox = $("#" + title + ".characterCheck");
            gameClass = (checkBox.attr("class"));
            // remove non-numeric characters - stackoverflow.com/questions/1862130/
            gameIndex = gameClass.replace(/\D/g, '');

            // add if unique
            if (selectionList.indexOf(parseInt(gameIndex)) === -1) {
                selectionList.push(parseInt(gameIndex));
            }
        }
    }
    // sort by ascending
    selectionList.sort(function (a, b) { return a - b; });
    for (var x = 0; x < selectionList.length; x++) {
        checkBox = $(".characterCheck.game" + selectionList[x]);
        if (!checkBox.is(":checked")) {
            checkBox.prop('checked', true).change();
        }
    }
    for (var i = 1; i < processedCode.length; i++) {
        $("tbody").append(singleTier);
        $("tr:last-of-type").find(".labelHolder").css("background-color", colors[processedCode[i][1]]);
        $("tr:last-of-type").find(".label").html(processedCode[i][0]);
        for (var k = 2; k < processedCode[i].length; k++) {
            title = processedCode[i][k][0];
            index = processedCode[i][k][1];
            $("#" + title + "-" + index + ".character").detach().appendTo($("tr:last-of-type").find(".tier"));
            /*
            $("tr:last-of-type").find(".tier div:last-child").after(singleChar);
            $("tr:last-of-type").find(".tier div:last-child").css("background-image","url(img/"+processedCode[0][0]+"/"+title+"/"+index+".png)");
            $("tr:last-of-type").find(".tier div:last-child").attr("id", title + "-" + index);
            $("#char > #"+title+"-"+index).remove();
            */
        }
    }
}

// For hamburger menu, taken from https://codepen.io/mranenko/pen/wevamj
function loadHamburger() {
    var hamburger = {
        nav: document.querySelector('#nav'),
        navToggle: document.querySelector('.nav-toggle'),

        initialize() {
            this.navToggle.addEventListener('click',
                () => { this.toggle(); });
        },

        toggle() {
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        },
    };
    hamburger.initialize();
}

loadHamburger();
