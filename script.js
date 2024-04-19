var timer = 60;
var score = 0;
var newhitValue = 0;
function makeBubble(){
    var bubble = "";
    for(var i=1;i<97;i++){
        var random = Math.floor(Math.random()*10);
        bubble += `<div class="bubble">${random}</div>`;
    }

    document.querySelector("#pannel-bottom").innerHTML = bubble;
}

function runTimer(){
    var setTimer = document.querySelector("#timer");
    var timerInt = setInterval(function(){
        if(timer > 0){
            timer--;
            setTimer.innerHTML = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pannel-bottom").innerHTML = `<h1> Game Over </h1>`;
        }
    },1000);

}

function getNewHit(){
    newhitValue = Math.floor(Math.random()*10);
    var hitValue = document.querySelector("#hitValue");
    hitValue.innerHTML = newhitValue;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

makeBubble();
runTimer();
getNewHit();

document.querySelector("#pannel-bottom").addEventListener("click",function(details){
    var clickedValue = Number(details.target.textContent);
    if(newhitValue === clickedValue){
        increaseScore();
        getNewHit();
        makeBubble();
    }

});
