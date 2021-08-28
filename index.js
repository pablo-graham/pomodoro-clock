let timeChoosen = 25;
let seconds = 59
let start = true;
function setCountDown(n){
    if(start){
        var countdown = setInterval(function(){
            document.getElementById("timer").innerHTML = n + ':' + seconds
            seconds--;
            if(n == 0 && seconds == 0){
                document.getElementById("timer").innerHTML = 'times up!'
                clearInterval(countdown);
                start = true;
            } 
            if(seconds == 0){
                n--;
                seconds = 59;
            }
        }, 1000)
    }
    
}



//changing display when the buttons are pressed
function pomodoroBtn(){
    document.getElementById("timer").innerHTML = "25:00"
    timeChoosen = 25;
}
function shortBreakBtn(){
    document.getElementById("timer").innerHTML = "5:00"
    timeChoosen = 5;
}
function longBreakBtn(){
    document.getElementById("timer").innerHTML = "15:00"
    timeChoosen = 15;
}

//what happens when you click start
let startBtn = function(){
    if(start){
        timer();
        document.getElementById('start').innerHTML = "<h3>get started</h3>"
        start = false;
    }
}


//timer function
function timer(){
    if(start){
        if(timeChoosen == 25){
            let pTime = 25;
            setCountDown(pTime);
        }else if(timeChoosen == 5){
            let sbTime = 5;
            setCountDown(sbTime);
        }else if(timeChoosen == 15){
            let lbTime = 15;
            setCountDown(lbTime);
        }
    }
}