let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let scoreH = 0
let scoreG = 0


// Home-Score 

function addOnePointToHome(){
    let sum = scoreH + 1
    scoreHome.textContent = sum
    scoreH = sum
    console.log(sum)
}

function addTwoPointsToHome(){
    let sum = scoreH + 2
    scoreHome.textContent = sum
    scoreH = sum
    console.log(sum)   
}

function addThreePointsToHome(){
    let sum = scoreH + 3
    scoreHome.textContent = sum
    scoreH = sum
    console.log(sum)   
}

// Guest-Score 

function addOnePointToGuest(){
    let sum = scoreG + 1
    scoreGuest.textContent = sum
    scoreG = sum
    console.log(sum)
}

function addTwoPointsToGuest(){
    let sum = scoreG + 2
    scoreGuest.textContent = sum
    scoreG = sum
    console.log(sum)   
}

function addThreePointsToGuest(){
    let sum = scoreG + 3
    scoreGuest.textContent = sum
    scoreG = sum
    console.log(sum)   
}
