//Whoever you are, whatever you do, you do not belong here, 
//this is the number manufactoring factory, stay away and whatever
//you do, do not change anything, I REPEAT DO NOT CHANGE anything

//Time Element
let interval;
let time = 1000;
let seconds = 0;

//Main Num
let mainNum = 0;
let mainNumPS = 0;

//Game States
let state = 0;
let pauseState = 1;
let playState = 2;

//Auto Increment
let autoIncrementNum = 1;
let currentAutoIncrement = 1;

//Increments
let increment = 1;
let currentIncrement;

//Upgrade Costs
let incrementCost = 10;
let upgradeCost = 10;
let pauseCost = 1000;

//Game Loop
function incrementNum(){
    //Start Game Loop
    if(mainNum == 0){
        interval = setInterval(() => {
            mainNum = mainNum + autoIncrementNum;
            document.getElementById("mainNum").innerText = mainNum;
            document.getElementById("mainNumPS").innerText = mainNumPS; 
            seconds++
        }, time);
    }
    mainNum += increment;
    mainNumPS = 
    document.getElementById("mainNum").innerText = mainNum;
}

//Upgrades
function upgradeIncrement(){
    if(mainNum >= incrementCost){
        increment+=1;
        currentIncrement = increment;
        mainNum -= incrementCost;
        incrementCost = incrementCost * 2;
        document.getElementById("upgradeClickCostText").innerText = incrementCost;
    }
}

function upgradeAuto(){
    if(mainNum >= upgradeCost){
        autoIncrementNum+=1;
        currentAutoIncrement = autoIncrementNum;
        mainNumPS = currentAutoIncrement;
        mainNum-= upgradeCost;
        upgradeCost = upgradeCost * 2;
        document.getElementById("upgradeCostText").innerText = upgradeCost;
    } 
}

//Game States
function changePauseText(){
    button = document.getElementById("pauseButton");
    button.innerText = button.innerText === "Pause" ? "Play" : "Pause";
}

function play(){
    state = playState;
    autoIncrementNum = currentAutoIncrement;
    changePauseText();
}

function pause(){
    state = pauseState;
    autoIncrementNum = 0;
    changePauseText();
}

function checkState(){
    if(mainNum >= pauseCost){
        mainNum -= pauseCost;
        state === pauseState ? play() : pause();
    }
}



