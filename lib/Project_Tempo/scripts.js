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
    newP.innerHTML = storyRand3; // The Ant hill
};

function midRoll() { // All the rest
    let newP = document.getElementById("pageLoad");
    newP.innerHTML = storyRand2; // The Unknown
};

function lowRoll() { // < .3
    let newP = document.getElementById("pageLoad");
    newP.innerHTML = storyRand1; // The Snow Storm
};


/* -------------------------- Chosen Story Buttons -------------------------- */

function story01() {
    let newP = document.getElementById("pageLoad")
    newP.innerHTML = story01b; // The Snow Storm
};

function story02() {
    let newP = document.getElementById("pageLoad")
    newP.innerHTML = story02b; // The Unknown
};

function story03() {
    let newP = document.getElementById("pageLoad")
    newP.innerHTML = story03b; // The Ant Hill
};


/* ------------------------------ Noun Buttons ------------------------------ */

function firstNoun() { // First noun
    let firstNoun = document.getElementById("noun01") 
    let firstNounButton = document.createElement('span');
    firstNounButton.innerHTML = prompt(defNoun);

firstNoun.parentNode.replaceChild(firstNounButton, firstNoun); 
}

function secondNoun() { // Second noun
    let secondNoun = document.getElementById("noun02") 
    let secondNounButton = document.createElement('span');
    secondNoun.innerHTML = prompt(defNoun);

    secondNounButton.parentNode.replaceChild(secondNounButton, secondNoun);
}

function thirdNoun() { // Third noun 
    let thirdNoun = document.getElementById("noun03") 
    let thirdNounButton = document.createElement('span');
    thirdNoun.innerHTML = prompt(defNoun);

    thirdNounButton.parentNode.replaceChild(thirdNounButton, thirdNoun);
}

/* ----------------------------- Pronoun Buttons ---------------------------- */
// !! Currently Nonfunctional !!
/* ------------------------------ Verb Buttons ------------------------------ */
// !! Currently Nonfunctional !!
/* ---------------------------- Adjective Buttons --------------------------- */

function firstAdj() { // First Adjective 
    let firstAdj = document.getElementById("adj01")
    let firstAdjButton = document.createElement('span');
    firstAdjButton.innerHTML = prompt(defAdj);

    firstAdj.parentNode.replaceChild(firstAdjButton, firstAdj);
}

function secondAdj() { // Second Adjective
    let secondAdj = document.getElementById("adj02")
    let secondAdjButton = document.createElement('span');
    secondAdjButton.innerHTML = prompt(defAdj);

    secondAdj.parentNode.replaceChild(secondAdjButton, secondAdj);
}
/* ----------------------------- Adverb Buttons ----------------------------- */
    // !! Currently Nonfunctional !!
/* --------------------------- Preposition Buttons -------------------------- */
    // !! Currently Nonfunctional !!
/* -------------------------- Conjunctions Buttons -------------------------- */

function firstConj() { //First Conjunction 
    let firstConjunction = document.getElementById("conj01")
    let firstConjunctionButton = document.createElement('span');
    firstConjunctionButton.innerHTML = prompt(defConj);

    firstConjunction.parentNode.replaceChild(firstConjunctionButton, firstConjunction);
}
/* -------------------------- Interjection Buttons -------------------------- */
    // !! Currently Nonfunctional!!

