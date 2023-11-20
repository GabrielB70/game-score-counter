let scoreOne = 0
let scoreTwo = 0

let scoreHome = document.getElementById("scoreleft")
let scoreGuest = document.getElementById("scoreright")


function renderone() {
        scoreHome.textContent = scoreOne + 1 
        scoreOne = scoreOne + 1
}

function rendertwo() {
        scoreHome.textContent = scoreOne + 2
        scoreOne = scoreOne + 2
}
 
function renderthree() {
        scoreHome.textContent = scoreOne + 3
        scoreOne = scoreOne + 3
}

function render1() {
        scoreGuest.textContent = scoreTwo+ 1
        scoreTwo = scoreTwo + 1
}

function render2() {
        scoreGuest.textContent = scoreTwo + 2
        scoreTwo = scoreTwo + 2
}

function render3() {
        scoreGuest.textContent = scoreTwo + 3
        scoreTwo = scoreTwo + 3
}

function reset() {
        scoreHome.textContent = 0    
        scoreGuest.textContent = 0
        scoreOne = 0
        scoreTwo = 0
}