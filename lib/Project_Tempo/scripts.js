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
}


/* -------------------------------------------------------------------------- */
/*                                Story loaders                               */
/* -------------------------------------------------------------------------- */

/* --------------------------- Random Story Button -------------------------- */

function highRoll() { // > .7
    let newP = document.getElementById("pageLoad");
    newP.innerHTML = storyRand3; // The Ant hill
}

function midRoll() { // All the rest
    let newP = document.getElementById("pageLoad");
    newP.innerHTML = storyRand2; // The Unknown
}

function lowRoll() { // < .3
    let newP = document.getElementById("pageLoad");
    newP.innerHTML = storyRand1; // The Snow Storm
}


/* -------------------------- Chosen Story Buttons -------------------------- */

function story01() {
    let newP = document.getElementById("pageLoad")
    newP.innerHTML = story01b; // The Snow Storm
}

function story02() {
    let newP = document.getElementById("pageLoad")
    newP.innerHTML = story02b; // The Unknown
}

function story03() {
    let newP = document.getElementById("pageLoad")
    newP.innerHTML = story03b; // The Ant Hill
}


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

function fourthNoun() { // Fourth noun 
    let fourthNoun = document.getElementById("noun04")
    let fourthNounButton = document.createElement('span');
    fourthNoun.innerHTML = prompt(defNoun);

    fourthNounButton.parentNode.replaceChild(fourthNounButton, fourthNoun);
}

function fifthNoun() { // Fifth noun 
    let fifthNoun = document.getElementById("noun05")
    let fifthNounButton = document.createElement('span');
    fifthNoun.innerHTML = prompt(defNoun);

    fifthNounButton.parentNode.replaceChild(fifthNounButton, fifthNoun);
}
/* ----------------------------- Pronoun Buttons ---------------------------- */

function firstProNoun() { // First Pronoun
    let firstProNoun = document.getElementById("pronoun01")
    let firstProNounButton = document.createElement('span');
    firstProNounButton.innerHTML = prompt(defPronoun);

    firstProNoun.parentNode.replaceChild(firstProNounButton, firstProNoun);
}

function secondProNoun() { // Second Pronoun
    let secondProNoun = document.getElementById("pronoun02")
    let secondProNounButton = document.createElement('span');
    secondProNoun.innerHTML = prompt(defPronoun);

    secondProNounButton.parentNode.replaceChild(secondProNounButton, secondProNoun);
}

function thirdProNoun() { // Third Pronoun 
    let thirdProNoun = document.getElementById("pronoun03")
    let thirdProNounButton = document.createElement('span');
    thirdProNoun.innerHTML = prompt(defPronoun);

    thirdProNounButton.parentNode.replaceChild(thirdProNounButton, thirdProNoun);
}

function fourthProNoun() { // Fourth Pronoun 
    let fourthProNoun = document.getElementById("pronoun04")
    let fourthProNounButton = document.createElement('span');
    fourthProNoun.innerHTML = prompt(defPronoun);

    fourthProNounButton.parentNode.replaceChild(fourthProNounButton, fourthProNoun);
}

function fifthProNoun() { // Fifth Pronoun 
    let fifthProNoun = document.getElementById("pronoun05")
    let fifthProNounButton = document.createElement('span');
    fifthProNoun.innerHTML = prompt(defPronoun);

    fifthProNounButton.parentNode.replaceChild(fifthProNounButton, fifthProNoun);
}

/* ------------------------------ Verb Buttons ------------------------------ */

function firstVerb() { // First Verb
    let firstVerb = document.getElementById("verb01")
    let firstVerbButton = document.createElement('span');
    firstVerbButton.innerHTML = prompt(defVerb);

    firstVerb.parentNode.replaceChild(firstVerbButton, firstVerb);
}

function secondVerb() { // Second Verb
    let secondVerb = document.getElementById("verb02")
    let secondVerbButton = document.createElement('span');
    secondVerb.innerHTML = prompt(defVerb);

    secondVerbButton.parentNode.replaceChild(secondVerbButton, secondVerb);
}

function thirdVerb() { // Third Verb 
    let thirdVerb = document.getElementById("verb03")
    let thirdVerbButton = document.createElement('span');
    thirdVerb.innerHTML = prompt(defVerb);

    thirdVerbButton.parentNode.replaceChild(thirdVerbButton, thirdVerb);
}

function fourthVerb() { // Fourth Verb 
    let fourthVerb = document.getElementById("verb04")
    let fourthVerbButton = document.createElement('span');
    fourthVerb.innerHTML = prompt(defVerb);

    fourthVerbButton.parentNode.replaceChild(fourthVerbButton, fourthVerb);
}

function fifthVerb() { // Fifth Verb 
    let fifthVerb = document.getElementById("verb05")
    let fifthVerbButton = document.createElement('span');
    fifthVerb.innerHTML = prompt(defVerb);

    fifthVerbButton.parentNode.replaceChild(fifthVerbButton, fifthVerb);
}
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

function thirdAdj() { // Third Adjective
    let thirdAdj = document.getElementById("adj03")
    let thirdAdjButton = document.createElement('span');
    thirdAdjButton.innerHTML = prompt(defAdj);

    thirdAdj.parentNode.replaceChild(thirdAdjButton, thirdAdj);
}

function fourthAdj() { // Fourth Adjective
    let fourthAdj = document.getElementById("adj04")
    let fourthAdjButton = document.createElement('span');
    fourthAdjButton.innerHTML = prompt(defAdj);

    fourthAdj.parentNode.replaceChild(fourthAdjButton, fourthAdj);
}

function fifthAdj() { // Fifth Adjective
    let fifthAdj = document.getElementById("adj05")
    let fifthAdjButton = document.createElement('span');
    fifthAdjButton.innerHTML = prompt(defAdj);

    fifthAdj.parentNode.replaceChild(fifthAdjButton, fifthAdj);
}
/* ----------------------------- Adverb Buttons ----------------------------- */

function firstAdverb() { // First Adverb
    let firstAdverb = document.getElementById("adv01")
    let firstAdverbButton = document.createElement('span');
    firstAdverbButton.innerHTML = prompt(defAdverb);

    firstAdverb.parentNode.replaceChild(firstAdverbButton, firstAdverb);
}

function secondAdverb() { // Secon Adverb
    let secondAdverb = document.getElementById("adv02")
    let secondAdverbButton = document.createElement('span');
    secondAdverbButton.innerHTML = prompt(defAdverb);

    secondAdverb.parentNode.replaceChild(secondAdverbButton, secondAdverb);
}

function thirdAdverb() { // Third Adverb
    let thirdAdverb = document.getElementById("adv03")
    letthirdtAdverbButton = document.createElement('span');
    thirdAdverbButton.innerHTML = prompt(defAdverb);

    thirdAdverb.parentNode.replaceChild(thirdAdverbButton, thirdAdverb);
}

function fourthAdverb() { // Fourth Adverb
    let fourthAdverb = document.getElementById("adv04")
    let fourthAdverbButton = document.createElement('span');
    fourthAdverbButton.innerHTML = prompt(defAdverb);

    fourthAdverb.parentNode.replaceChild(fourthAdverbButton, fourthAdverb);
}

function fifthAdverb() { // Fifth Adverb
    let fifthAdverb = document.getElementById("adv05")
    let fifthAdverbButton = document.createElement('span');
    fifthAdverbButton.innerHTML = prompt(defAdverb);

    fifthAdverb.parentNode.replaceChild(fifthAdverbButton, fifthAdverb);
}
/* --------------------------- Preposition Buttons -------------------------- */

function firstPrep() { // First Preposition
    let firstPrep = document.getElementById("prep01")
    let firstPrepButton = document.createElement('span');
    firstPrepButton.innerHTML = prompt(defPrep);

    firstPrep.parentNode.replaceChild(firstPrepButton, firstPrep);
}

function secondPrep() { // Second Preposition
    let secondPrep = document.getElementById("prep02")
    let secondPrepButton = document.createElement('span');
    secondPrepButton.innerHTML = prompt(defPrep);

    secondPrep.parentNode.replaceChild(secondPrepButton, secondPrep);
}

function thirdPrep() { // Third Preposition
    let thirdPrep = document.getElementById("prep03")
    let thirdPrepButton = document.createElement('span');
    thirdPrepButton.innerHTML = prompt(defPrep);

    thirdPrep.parentNode.replaceChild(thirdPrepButton, thirdPrep);
}

function fourthPrep() { // Fourth Preposition
    let fourthPrep = document.getElementById("prep04")
    let fourthPrepButton = document.createElement('span');
    fourthPrepButton.innerHTML = prompt(defPrep);

    fourthPrep.parentNode.replaceChild(fourthPrepButton, fourthPrep);
}

function fifthPrep() { // Fifth Preposition
    let fifthPrep = document.getElementById("prep05")
    let fifthPrepButton = document.createElement('span');
    fifthPrepButton.innerHTML = prompt(defPrep);

    fifthPrep.parentNode.replaceChild(fifthPrepButton, fifthPrep);
}
/* -------------------------- Conjunctions Buttons -------------------------- */

function firstConj() { //First Conjunction 
    let firstConjunction = document.getElementById("conj01")
    let firstConjunctionButton = document.createElement('span');
    firstConjunctionButton.innerHTML = prompt(defConj);

    firstConjunction.parentNode.replaceChild(firstConjunctionButton, firstConjunction);
}

function secondConj() { // Second Conjunction 
    let secondConjunction = document.getElementById("conj02")
    let secondConjunctionButton = document.createElement('span');
    secondConjunctionButton.innerHTML = prompt(defConj);

    secondConjunction.parentNode.replaceChild(secondConjunctionButton, secondConjunction);
}

function thirdConj() { // Third Conjunction 
    let thirdConjunction = document.getElementById("conj03")
    let thirdConjunctionButton = document.createElement('span');
    thirdConjunctionButton.innerHTML = prompt(defConj);

    thirdConjunction.parentNode.replaceChild(thirdConjunctionButton, thirdConjunction);
}

function fourthConj() { // Fourth Conjunction 
    let fourthConjunction = document.getElementById("conj04")
    let fourthConjunctionButton = document.createElement('span');
    fourthConjunctionButton.innerHTML = prompt(defConj);

    fourthConjunction.parentNode.replaceChild(fourthConjunctionButton, fourthConjunction);
}

function fifthConj() { // Fifth Conjunction 
    let fifthConjunction = document.getElementById("conj05")
    let fifthConjunctionButton = document.createElement('span');
    fifthConjunctionButton.innerHTML = prompt(defConj);

    fifthConjunction.parentNode.replaceChild(fifthConjunctionButton, fifthConjunction);
}
/* -------------------------- Interjection Buttons -------------------------- */

function firstIntj() { // First Interjection
    let firstIntj = document.getElementById("intj01")
    let firstIntjButton = document.createElement('span');
    firstIntjButton.innerHTML = prompt(defIntj);

    firstIntj.parentNode.replaceChild(firstIntjButton, firstIntj);
}

function secondIntj() { // Second Interjection
    let secondIntj = document.getElementById("intj02")
    let secondIntjButton = document.createElement('span');
    secondIntjButton.innerHTML = prompt(defIntj);

    secondIntj.parentNode.replaceChild(secondIntjButton, secondIntj);
}

function thirdIntj() { // Third Interjection
    let thirdIntj = document.getElementById("intj03")
    let thirdIntjButton = document.createElement('span');
    thirdIntjButton.innerHTML = prompt(defIntj);

    thirdIntj.parentNode.replaceChild(thirdIntjButton, thirdIntj);
}

function fourthIntj() { // Fourth Interjection
    let fourthIntj = document.getElementById("intj04")
    let fourthIntjButton = document.createElement('span');
    fourthIntjButton.innerHTML = prompt(defIntj);

    fourthIntj.parentNode.replaceChild(fourthIntjButton, fourthIntj);
}

function fifthIntj() { // Fifth Interjection
    let fifthIntj = document.getElementById("intj05")
    let fifthIntjButton = document.createElement('span');
    fifthIntjButton.innerHTML = prompt(defIntj);

    fifthIntj.parentNode.replaceChild(fifthIntjButton, fifthIntj);
}
