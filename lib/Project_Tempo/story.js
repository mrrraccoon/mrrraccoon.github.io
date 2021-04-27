// If there is any change to the story## this change must also be reflected in the storyRand# of the same number. An ol' copy pasta will do it.
// Each button in the story requires its own button to be written in the scripts.js file. Limit story formation to 5 of each button to limit coding need. 

/* -------------------------------------------------------------------------- */
/*                               The Snow Storm                               */
/* -------------------------------------------------------------------------- */

// Below is the Sentence layout for the story

/* 
The Snow Storm
Weather plays an important part in our NOUN everyday.
What is weather you ask?
According to ADJ scientists, who are known as meterologists,
weather is what the NOUN is like at any time of the NOUN.
It doesn't matter if the air is ADJ or ADJ, its all weather.
When vapors in ADJ clouds condense, we have NOUN and snow.
A lot of NOUN means a ADJ snowstorm!
*/

/* -------------------------- random story version -------------------------- */

const storyRand1 = "<div id='copy-output' class='w3-container w3-animate-zoom'><h2>Snow Storm</h2><br><p>Weather plays an important part in our <button id='noun01' class='w3-button-trans w3-border-0' onclick='firstNoun()'><i><u>noun</u></i></button> everyday. <br>What is weather you ask? <br>According to <button id='adj01' class='w3-button-trans w3-border-0' onclick='firstAdj()'><i><u>adjective</u></i></button> scientists, who are known as meterologists, <br>weather is what the <button id='noun02' class='w3-button-trans w3-border-0' onclick='secondNoun()'><i><u>noun</u></i></button> is like at any time of the <button id='noun03' class='w3-button-trans w3-border-0' onclick='thirdNoun()'><i><u>noun</u></i></button>. <br> It doesn't matter if the air is <button id='adj02' class='w3-button-trans w3-border-0' onclick='secondAdj()'><i><u>adjective</u></i></button> or <button id='adj03' class='w3-button-trans w3-border-0' onclick='thirdAdj()'><i><u>adjective</u></i></button>, its all weather. <br>When vapors in <button id='adj04' class='w3-button-trans w3-border-0' onclick='fourthAdj()'><i><u>adjective</u></i></button> clouds condense, we have <button id='noun04' class='w3-button-trans w3-border-0' onclick='fourthNoun()'><i><u>noun</u></i></button> and snow. <br>A lot of <button id='noun05' class='w3-button-trans w3-border-0' onclick='fifthNoun()'><i><u>noun</u></i></button> means a <button id='adj05' class='w3-button-trans w3-border-0' onclick='fifthAdj()'><i><u>adjective</u></i></button> snowstorm!</p>"

/* -------------------------- button click version -------------------------- */

const story01b = "<div id='copy-output' class='w3-container w3-animate-zoom'><h2>Snow Storm</h2><br><p>Weather plays an important part in our <button id='noun01' class='w3-button-trans w3-border-0' onclick='firstNoun()'><i><u>noun</u></i></button> everyday. <br>What is weather you ask? <br>According to <button id='adj01' class='w3-button-trans w3-border-0' onclick='firstAdj()'><i><u>adjective</u></i></button> scientists, who are known as meterologists, <br>weather is what the <button id='noun02' class='w3-button-trans w3-border-0' onclick='secondNoun()'><i><u>noun</u></i></button> is like at any time of the <button id='noun03' class='w3-button-trans w3-border-0' onclick='thirdNoun()'><i><u>noun</u></i></button>. <br> It doesn't matter if the air is <button id='adj02' class='w3-button-trans w3-border-0' onclick='secondAdj()'><i><u>adjective</u></i></button> or <button id='adj03' class='w3-button-trans w3-border-0' onclick='thirdAdj()'><i><u>adjective</u></i></button>, its all weather. <br>When vapors in <button id='adj04' class='w3-button-trans w3-border-0' onclick='fourthAdj()'><i><u>adjective</u></i></button> clouds condense, we have <button id='noun04' class='w3-button-trans w3-border-0' onclick='fourthNoun()'><i><u>noun</u></i></button> and snow. <br>A lot of <button id='noun05' class='w3-button-trans w3-border-0' onclick='fifthNoun()'><i><u>noun</u></i></button> means a <button id='adj05' class='w3-button-trans w3-border-0' onclick='fifthAdj()'><i><u>adjective</u></i></button> snowstorm!</p>"


/* -------------------------------------------------------------------------- */
/*                                 The Unknown                                */
/* -------------------------------------------------------------------------- */

/* -------------------------- random story version -------------------------- */

const storyRand2 = "<div id='copy-output' class='w3-container w3-animate-zoom'>We're playing Space Jam all night."

/* -------------------------- button click version -------------------------- */

const story02b = "<div id='copy-output' class='w3-container w3-animate-zoom'><h4></h4><button id='noun01' class='w3-button-trans w3-border-0' onclick='firstNoun()'><i><u>noun</u></i></button> <button id='verb01' class='w3-button-trans w3-border-0' onclick='firstVerb()'><i><u>verb</u></i></button> <button id='adv01' class='w3-button-trans w3-border-0' onclick='firstAdverb()'><i><u>adverb</u></i></button></h4>"


/* -------------------------------------------------------------------------- */
/*                                The Ant Hill                                */
/* -------------------------------------------------------------------------- */

// Below is the sentence layout for the story

/* 
The Ant Hill
The little ant followed a string of ants along the ground towards the NOUN.
It was following a scent-marked path back home.
The ADJ clouds loomed in the distance.
Suddenly, there came a ADJ from the clouds. A storm was brewing!
The little NOUN must hurry if they are to make it inside!
The storm rushes in but the NOUNs made it inside the hill and are safe for another day.
*/

/* -------------------------- random story version -------------------------- */

const storyRand3 = "<div id='copy-output' class='w3-container w3-animate-zoom'><h1> The Ant Hill</h1> <h4>The little ant followed a string of ants along the ground towards the <button id='noun01' class='w3-button-trans w3-border-0' onclick='firstNoun()'><i><u>noun</u></i></button>. <br>It was following a scent-marked path back home.<br>The <button id='adj01' class='w3-button-trans w3-border-0' onclick='firstAdj()'><i><u>adjective</u></i></button> clouds loomed in the distance.<br>Suddenly, there came a <button id='adj02' class='w3-button-trans w3-border-0' onclick='secondAdj()'><i><u>adjective</u></i></button> from the clouds. A storm was brewing!<br>The little <button id='noun02' class='w3-button-trans w3-border-0' onclick='secondNoun()'><i><u>noun(s)</i></u></button> must hurry if they are to make it inside!<br>The storm rushes in but the <button id='noun03' class='w3-button-trans w3-border-0' onclick='thirdNoun()'><i><u>noun</i></u></button> made it inside the hill and are safe for another day.</p></div>"

/* -------------------------- button click version -------------------------- */

const story03b = "<div id='copy-output' class='w3-container w3-animate-zoom'><h1> The Ant Hill</h1> <h4>The little ant followed a string of ants along the ground towards the <button id='noun01' class='w3-button-trans w3-border-0' onclick='firstNoun()'><i><u>noun</u></i></button>. <br>It was following a scent-marked path back home.<br>The <button id='adj01' class='w3-button-trans w3-border-0' onclick='firstAdj()'><i><u>adjective</u></i></button> clouds loomed in the distance.<br>Suddenly, there came a <button id='adj02' class='w3-button-trans w3-border-0' onclick='secondAdj()'><i><u>adjective</u></i></button> from the clouds. A storm was brewing!<br>The little <button id='noun02' class='w3-button-trans w3-border-0' onclick='secondNoun()'><i><u>noun(s)</i></u></button> must hurry if they are to make it inside!<br>The storm rushes in but the <button id='noun03' class='w3-button-trans w3-border-0' onclick='thirdNoun()'><i><u>noun</i></u></button> made it inside the hill and are safe for another day.</p></div>"
