// menu item
const caseAll = document.getElementById("cases-all");
const allAlpha = document.getElementById("alphabet");
caseAll.addEventListener("click", updateAll);

// alphabet within reader section
// setting variables to id labels 
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ten = document.getElementById("ten");
const eleven = document.getElementById("eleven");
const twelve = document.getElementById("twelve");
const thirtn = document.getElementById("thirtn");
const fourtn = document.getElementById("fourtn");
const fiftn = document.getElementById("fiftn");
const sixtn = document.getElementById("sixtn");
const seventn = document.getElementById("seventn");
const eightn = document.getElementById("eightn");
const ninetn = document.getElementById("ninetn");
const twenty = document.getElementById("twenty");
const twone = document.getElementById("twone");
const twtwo = document.getElementById("twtwo");
const twthree = document.getElementById("twthree");
const twfour = document.getElementById("twfour");
const twfive = document.getElementById("twfive");
const twsix = document.getElementById("twsix");

// setting event listeners for clicks on divs by id
one.addEventListener("click", updateA);
two.addEventListener("click", updateB);
three.addEventListener("click", updateC);
four.addEventListener("click", updateD);
five.addEventListener("click", updateE);
six.addEventListener("click", updateF);
seven.addEventListener("click", updateG);
eight.addEventListener("click", updateH);
nine.addEventListener("click", updateI);
ten.addEventListener("click", updateJ);
eleven.addEventListener("click", updateK);
twelve.addEventListener("click", updateL);
thirtn.addEventListener("click", updateM);
fourtn.addEventListener("click", updateN);
fiftn.addEventListener("click", updateO);
sixtn.addEventListener("click", updateP);
seventn.addEventListener("click", updateQ);
eightn.addEventListener("click", updateR);
ninetn.addEventListener("click", updateS);
twenty.addEventListener("click", updateT);
twone.addEventListener("click", updateU);
twtwo.addEventListener("click", updateV);
twthree.addEventListener("click", updateW);
twfour.addEventListener("click", updateX);
twfive.addEventListener("click", updateY);
twsix.addEventListener("click", updateZ);


// changes casing at once for all alphabet divs; will not lowercase uniquely from all-uppercase setting; will not undo individually toggled states
function updateAll() {
    if (allAlpha.classList.contains("uppercase")) {
        allAlpha.classList.remove("uppercase");
    } else {
        allAlpha.classList.add("uppercase");
    }
} 
/* also look to undo any individual classList.add or classList.remove settings 
for true reset uniformity and prelude above casing toggle so it does both */

// setting functions for text-transform specified by id variable
// by removing or adding uppercase to classList, based on classList.contains()
function updateA() {
    if (allAlpha.classList.contains("uppercase") || one.classList.contains("uppercase")) {
        one.classList.remove("uppercase");
    } else {
        one.classList.add("uppercase");
    }
}

function updateB() {
    if (two.classList.contains("uppercase")) {
        two.classList.remove("uppercase");
    } else {
        two.classList.add("uppercase");
    }
}

function updateC() {
    if (three.classList.contains("uppercase")) {
        three.classList.remove("uppercase");
    } else {
        three.classList.add("uppercase");
    }
}

function updateD() {
    if (four.classList.contains("uppercase")) {
        four.classList.remove("uppercase");
    } else {
        four.classList.add("uppercase");
    }
}

function updateE() {
    if (five.classList.contains("uppercase")) {
        five.classList.remove("uppercase");
    } else {
        five.classList.add("uppercase");
    }
}

function updateF() {
    if (six.classList.contains("uppercase")) {
        six.classList.remove("uppercase");
    } else {
        six.classList.add("uppercase");
    }
}

function updateG() {
    if (seven.classList.contains("uppercase")) {
        seven.classList.remove("uppercase");
    } else {
        seven.classList.add("uppercase");
    }
}

function updateH() {
    if (eight.classList.contains("uppercase")) {
        eight.classList.remove("uppercase");
    } else {
        eight.classList.add("uppercase");
    }
}

function updateI() {
    if (nine.classList.contains("uppercase")) {
        nine.classList.remove("uppercase");
    } else {
        nine.classList.add("uppercase");
    }
}

function updateJ() {
    if (ten.classList.contains("uppercase")) {
        ten.classList.remove("uppercase");
    } else {
        ten.classList.add("uppercase");
    }
}

function updateK() {
    if (eleven.classList.contains("uppercase")) {
        eleven.classList.remove("uppercase");
    } else {
        eleven.classList.add("uppercase");
    }
}

function updateL() {
    if (twelve.classList.contains("uppercase")) {
        twelve.classList.remove("uppercase");
    } else {
        twelve.classList.add("uppercase");
    }
}

function updateM() {
    if (thirtn.classList.contains("uppercase")) {
        thirtn.classList.remove("uppercase");
    } else {
        thirtn.classList.add("uppercase");
    }
}

function updateN() {
    if (fourtn.classList.contains("uppercase")) {
        fourtn.classList.remove("uppercase");
    } else {
        fourtn.classList.add("uppercase");
    }
}

function updateO() {
    if (fiftn.classList.contains("uppercase")) {
        fiftn.classList.remove("uppercase");
    } else {
        fiftn.classList.add("uppercase");
    }
}

function updateP() {
    if (sixtn.classList.contains("uppercase")) {
        sixtn.classList.remove("uppercase");
    } else {
        sixtn.classList.add("uppercase");
    }
}

function updateQ() {
    if (seventn.classList.contains("uppercase")) {
        seventn.classList.remove("uppercase");
    } else {
        seventn.classList.add("uppercase");
    }
}

function updateR() {
    if (eightn.classList.contains("uppercase")) {
        eightn.classList.remove("uppercase");
    } else {
        eightn.classList.add("uppercase");
    }
}

function updateS() {
    if (ninetn.classList.contains("uppercase")) {
        ninetn.classList.remove("uppercase");
    } else {
        ninetn.classList.add("uppercase");
    }
}

function updateT() {
    if (twenty.classList.contains("uppercase")) {
        twenty.classList.remove("uppercase");
    } else {
        twenty.classList.add("uppercase");
    }
}

function updateU() {
    if (twone.classList.contains("uppercase")) {
        twone.classList.remove("uppercase");
    } else {
        twone.classList.add("uppercase");
    }
}

function updateV() {
    if (twtwo.classList.contains("uppercase")) {
        twtwo.classList.remove("uppercase");
    } else {
        twtwo.classList.add("uppercase");
    }
}

function updateW() {
    if (twthree.classList.contains("uppercase")) {
        twthree.classList.remove("uppercase");
    } else {
        twthree.classList.add("uppercase");
    }
}

function updateX() {
    if (twfour.classList.contains("uppercase")) {
        twfour.classList.remove("uppercase");
    } else {
        twfour.classList.add("uppercase");
    }
}

function updateY() {
    if (twfive.classList.contains("uppercase")) {
        twfive.classList.remove("uppercase");
    } else {
        twfive.classList.add("uppercase");
    }
}

function updateZ() {
    if (twsix.classList.contains("uppercase")) {
        twsix.classList.remove("uppercase");
    } else {
        twsix.classList.add("uppercase");
    }
}