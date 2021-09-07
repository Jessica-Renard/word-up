/* "Word Up Preps" early literacy exercises page (3-letter words' page)
- based on 3 area clicks/touches so the common sounds are fully engaged across contexts for phonemic awareness
- use quality asset files in .wav and .svg for clear engagement associations
- follow functional paradigm in larger set of 4 and 5-letter exercises 
- evaluate reload factors 
- add reset */

let l1, l2, l3, see, hear;

/* nested 2-deep by C/V/C group
associate and incorporate .wav and .svg asset files by naming convention */
const wordBankSets = [
    [
        "Dan", "Jan", "Pam", "Sam", "bad", "bam", "ban", "bat", "can", "cap", "car", "cat", "dad", "dam", "fan", "far", "fat", "gas", "had", "ham", "has", "hat",
        "jab", "jam", "lad", "lap", "man", "map", "mat", "nap", "pan", "pat", "rad", "ram", "rap", "rat", "sad", "sap", "sat", "tan", "tap", "tar", "yam"
    ],
    [
        "Ben", "Jed", "Jen", "Ken", "Ted", "bed", "beg", "bet", "den", "fed", "gem", "get", "hem", "hen", "jet", "keg", "led", "leg", "let", "men", "met", "net", "peg", "pen",
        "pep", "pet", "red", "set", "ten", "vet", "web", "wed", "wet", "yes", "yet", "zen"
    ],
    [
        "Jim", "Kim", "Tim", "bib", "bid", "big", "bin", "bit", "did", "dig", "dim", "din", "dip", "fib", "fig", "fin", "fit", "gig", "hid", "him", "hip", "hit",
        "jig", "kid", "kin", "kit", "lid", "lip", "lit", "nip", "pig", "pin", "pit", "rib", "rid", "rig", "rim", "rip", "sin", "sip", "sit", "tin", "tip", "wig",
        "win", "wit", "yip", "zip"
    ],
    [
        "Bob", "Jon", "Rob", "Ron", "Tom", "bog", "cob", "cod", "cog", "cop", "cot", "dog", "dot", "fog", "gob", "got", "hog", "hop", "hot", "job", "jog", "jot",
        "log", "lot", "mob", "mom", "mop", "nod", "not", "pom", "pop", "pot", "rob", "rod", "rot", "sob", "sod", "top"
    ],
    [
        "bud", "bug", "bum", "bun", "bus", "but", "cub", "cud", "cup", "cut", "dub", "dud", "dun", "fun", "gum", "gun", "gut", "hub", "hug", "hum", "hut", "jug",
        "jut", "lug", "mud", "mug", "mum", "nub", "nun", "nut", "pug", "pun", "pup", "rub", "rug", "run", "rut", "sub", "sum", "sun", "tub", "tug"
    ]
];

// saving each original data subset to variables for additional access dexterity.
const aFiles = wordBankSets[0];
const eFiles = wordBankSets[1];
const iFiles = wordBankSets[2];
const oFiles = wordBankSets[3];
const uFiles = wordBankSets[4];

/* words only and totally (from 3-letter bank) 
combining in one variable can serve counts across exercises, word lists, practice options &or customizations */
const words = [];
for (let i = 0; i < wordBankSets.length; i++) {
    for (let j = 0; j < wordBankSets[i].length; j++) {
        words.push(wordBankSets[i][j]);
    }
}
console.log(words.sort());

// to derive sectional letter values for click/touch events to deliver text...
// maintaining global variable contexts for 3-letter programmed exercises
// check how this is altering arrays/pushing single letters into "words" array.
const a = [],
    e = [],
    is = [],
    o = [],
    u = [];

for (let word of words) {
    if (word[1] === 'a') {
        a.push(word);
    } else if (word[1] === 'e') {
        e.push(word);
    } else if (word[1] === 'i') {
        is.push(word);
    } else if (word[1] === 'o') {
        o.push(word);
    } else if (word[1] === 'u') {
        u.push(word);
    }
}

// respective letter banks for "a", "e", & "u" word generations
const aL1Pool = [],
    aL3Pool = [],
    eL1Pool = [],
    eL3Pool = [],
    uL1Pool = [],
    uL3Pool = [];

for (let unit of a) {
    aL1Pool.push(unit[0]);
    aL3Pool.push(unit[2]);
}

for (let unit of e) {
    eL1Pool.push(unit[0]);
    eL3Pool.push(unit[2]);
}

for (let unit of u) {
    uL1Pool.push(unit[0]);
    uL3Pool.push(unit[2]);
}

/* can also remove vowel and confirm modulo of 2 === 0 in order to:
 xL1Pool.push() evens
 xL3Pool.push() odds */
// for "i" word generator
const iLetters = [],
    iL1Pool = [],
    iL3Pool = [];

for (let unit of is) {
    for (let letter of unit) {
        iLetters.push(letter);
    }
}
const oneI = iLetters.join('');
const noI = oneI.split('i').join('');

for (i = 0; i < noI.length; i++) {
    if (i % 2 === 0) {
        iL1Pool.push(noI[i]); // evens are also 1st letters 
    } else {
        iL3Pool.push(noI[i]); // odds are the 3rd (made 2nd) letters
    }
}

/* can increment by 2 for even/odd oL1/oL3, also among a string without the known vowel in the 3-letter pattern, thus evidencing reliable even/odd designations */
// for "o" word generator
const oLetters = [],
    oL1Pool = [],
    oL3Pool = [];

for (let unit of o) {
    for (let letter of unit) {
        oLetters.push(letter);
    }
}
const oneO = oLetters.join('');
const noO = oneO.split('o').join('');

for (i = 0; i < noO.length; i += 2) {
    oL1Pool.push(noO[i]);
}

// here iterates by odd numbers
for (i = 1; i < noO.length; i += 2) {
    oL3Pool.push(noO[i]);
}

/* link #wordClick to click events, and each one of 3 digit div spaces populate based on conditional pools, 
based on randomly generated short-vowel grouping */
l1 = document.getElementById('l1');
l2 = document.getElementById('l2');
l3 = document.getElementById('l3');

let l1Pool, l3Pool, ctA = 0, ctE = 0, ctI = 0, ctO = 0, ctU = 0;

// subsequent click functions are nested among l2 click, so letter banks set specific to vowel not guaranteed word
// such sets should alter with vowel
l2.onclick = () => {

    let vowelFirst = ['a', 'e', 'i', 'o', 'u'];
    let randomIndex = Math.floor(Math.random() * 5);
    let showVowel = vowelFirst[randomIndex];
    l2.innerText = showVowel;

    // I like that these letter pools automatically reflect occurrence frequencies
    switch (showVowel) {
        case "a": {
            ctA++;
            l1Pool = aL1Pool;
            l3Pool = aL3Pool;
            break;
        }
        case "e": {
            ctE++;
            l1Pool = eL1Pool;
            l3Pool = eL3Pool;
            break;
        }
        case "i": {
            ctI++;
            l1Pool = iL1Pool;
            l3Pool = iL3Pool;
            break;
        }
        case "o": {
            ctO++;
            l1Pool = oL1Pool;
            l3Pool = oL3Pool;
            break;
        }
        case "u": {
            ctU++;
            l1Pool = uL1Pool;
            l3Pool = uL3Pool;
            break;
        }
    }

    l1.onclick = () => {
        let randomIndex = Math.floor(Math.random() * l1Pool.length);
        let showLetter = l1Pool[randomIndex];
        l1.innerHTML = showLetter;
    }

    l3.onclick = () => {
        let randomIndex = Math.floor(Math.random() * l3Pool.length);
        let showLetter = l3Pool[randomIndex];
        l3.innerHTML = showLetter;
    }
}

let correct = 0, discuss = [];
let currentWord = [], verifyWord = [];
const checkWord = document.querySelector("#checkWord");
const showCorrect = document.querySelector("#number");

checkWord.addEventListener('click', determine);

function determine() {
    currentWord = [];
    currentWord.push(l1.innerHTML);
    currentWord.push(l2.innerHTML);
    currentWord.push(l3.innerHTML);
    verifyWord = currentWord.join("");
    console.log(verifyWord);

    if (words.includes(verifyWord)) {
        correct += 1;
        showCorrect.innerHTML = correct;
    } else {
        discuss.push(verifyWord);
    } console.log(discuss);
}


// !incorporate asset files for #show front-end (can also apply them to a rhyme-time game feature)
// add media queries and other device and browser accessibility, especially according multimedia

// !apply special logic for proper nouns (names) featured in selections (ie rush L3 match)?
// maybe reduce into temp array based on letters positioned (for above-mentioned proper nouns)
// add/format wordlists(.md) for UI and apply counts to usage features; add to/format resources(.md)
// quick page layout and logic for toggling between uppercase and lowercase form of each alphabet letter.

/* logics for longer word builds: assign place values by singly-determined word click event,
with its letter spaces' subsequent clicks only adding a style to display subsequent phonemic groupings.*/

/* To check the word, it's one click to gather from DOM contents
and compare among array items, and it's one incrementor for Correct!

*/


