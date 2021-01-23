/* ------------------------------ Button Logic ------------------------------ */

function buttonLogic() {
    let a = Math.random() // Super long number
    let ap = a.toFixed(2) // Reduced to two decimal points (oddly turned into a string)
    let apN = Number(ap); // Returns the string back into a number.

    if (apN >= .7) { // Upper number
        return highRoll();
    } else if (apN <= .3) return lowRoll(); // Lower number
    else
        return midRoll(); //Rest in the middle. 
};


/* -------------------------------------------------------------------------- */
/*                                Story loaders                               */
/* -------------------------------------------------------------------------- */

/* --------------------------- Random Story Button -------------------------- */

function highRoll() { // > .7
    let newP = document.getElementById("pageLoad");
    newP.innerHTML = storyRand3; // Ant hill
};

function lowRoll() { // < .3
    let newP = document.getElementById("pageLoad");
    newP.innerHTML = storyRand1;
};

function midRoll() { // All the rest
    let newP = document.getElementById("pageLoad");
    newP.innerHTML = storyRand2;
};

/* -------------------------- Chosen Story Buttons -------------------------- */

function story01() {
    let newP = document.getElementById("pageLoad")
    newP.innerHTML = story01b;
};

function story02() {
    let newP = document.getElementById("pageLoad")
    newP.innerHTML = story02b;
};

function story03() {
    let newP = document.getElementById("pageLoad")
    newP.innerHTML = story03b;
};


/* ------------------------------ Noun Buttons ------------------------------ */

function noun01() {
    let bPP = document.getElementById("btn0301") // First noun 
    let bPP1 = document.createElement('span');
    bPP1.innerHTML = prompt(defNoun);

    bPP.parentNode.replaceChild(bPP1, bPP);
}

function noun() {
    let bPP = document.getElementById("btn0302") // Second noun
    let bPP1 = document.createElement('span');
    bPP1.innerHTML = prompt(defNoun);

    bPP.parentNode.replaceChild(bPP1, bPP);
}

/* ----------------------------- Pronoun Buttons ---------------------------- */
// !! Currently Nonfunctional !!
/* ------------------------------ Verb Buttons ------------------------------ */
// !! Currently Nonfunctional !!
/* ---------------------------- Adjective Buttons --------------------------- */

function adjbtn0301() { // * 1st Adj Btn 
    let newAdjBtn0301 = document.getElementById("adjbtn0301")
    let newAdjBtn0301Replacement = document.createElement('span');
    newAdjBtn0301Replacement.innerHTML = prompt(defAdj);

    newAdjBtn0301.parentNode.replaceChild(newAdjBtn0301Replacement, newAdjBtn0301);
}


/* ----------------------------- Adverb Buttons ----------------------------- */
    // !! Currently Nonfunctional !!
/* --------------------------- Preposition Buttons -------------------------- */
    // !! Currently Nonfunctional !!
/* -------------------------- Conjunctions Buttons -------------------------- */
    // !! Currently Nonfunctional !!
/* -------------------------- Interjection Buttons -------------------------- */
    // !! Currently Nonfunctional!!
