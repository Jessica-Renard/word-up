
const caseAll = document.getElementById("cases-all");
let ul = document.getElementById("alphabet");

caseAll.addEventListener("click", () => {
    if (ul.classList.contains("uppercase")) {
        ul.classList.remove("uppercase");
    } else {
        ul.classList.add("uppercase");
    }
});

/* does not lowercase uniquely from an all-uppercase setting (whereas all appear lowercase upon load)
 event delegation leaves one uppercase letter in bunch
 button to RELOAD independent of browser, could be least-frustrating on-page courtesy. 
 can also utilize .toLowerCase() on selectedLi.innerText */

function updateAll() {
    if (allAlpha.classList.contains("uppercase")) {
        allAlpha.classList.remove("uppercase");
    } else {
        allAlpha.classList.add("uppercase");
    }
} 
/* tried delegating classList changes per div elements, let alone utilizing unique id's... 
 converted to UL/LI tagNames from table tag examples; more congruent */

let selectedLi;

ul.onclick = function(e) {
    let target = e.target;
    if (target.tagName != 'LI') return;
    caseIt(target);
};
    function caseIt(li) {
        if (selectedLi) {
            selectedLi.classList.remove("uppercase");
        }
        selectedLi = li;
        selectedLi.classList.add("uppercase");
    };
