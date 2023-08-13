//JAVA SCRIPT CODES


//Before Start

function key1(event) {

    idleWorker = setInterval(images/idle, 100);
}





//idle animation

var idleImage = 1;
var idleWorker = 0;

function idle() {

    idleImage = idleImage + 1;

    if (idleImage == 11) {

        idleImage = 1;
    }

    document.getElementById("boy").src = "images/Idle (" + idleImage + ").png";
}






//After Press ENTER


function key(event) {

    if (event.which == 13) {

        if (runWorker == 0) {

            clearInterval(idleWorker);
            runWorker = setInterval(run, 100);
            junglesoundclip.play();
            runsoundclip.play();
            backgroundWorker = setInterval(background, 70);
            countS = setInterval(score, 100);
            count1 = setInterval(timeMinutes1, 60000);
            count2 = setInterval(timeSeconds, 1000);
            count3 = setInterval(timeSeconds1, 10000)
            boxId = box();
            boxWorker = setInterval(move, 100);

        }

    }

    if (event.which == 32) {

        if (jumpWorker == 0) {

            clearInterval(idleWorker);
            clearInterval(runWorker);
            runsoundclip.pause();
            jumpWorker = setInterval(jump, 100);
            jumpsoundclip.play();
        }

    }

}






//Run Animation


var runImage = 1;
var runWorker = 0;

function run() {

    runImage = runImage + 1;

    if (runImage == 9) {

        runImage = 1;
    }

    document.getElementById("boy").src = "images/Run (" + runImage + ").png";
}


//Jump Animation


var jumpImage = 1;
var jumpWorker = 0;
var bmt = 23;

function jump() {

    if (jumpImage <= 5) {

        bmt = bmt - 2;
        document.getElementById("boy").style.marginTop = bmt + "%";
    }

    if (jumpImage >= 6) {

        bmt = bmt + 2;
        document.getElementById("boy").style.marginTop = bmt + "%";
    }

    jumpImage = jumpImage + 1;

    if (jumpImage == 11) {

        jumpImage = 1;
        clearInterval(jumpWorker);
        runWorker = setInterval(run, 100);
        junglesoundclip.play();
        runsoundclip.play();
        jumpWorker = 0;

        if (backgroundWorker == 0) {

            backgroundWorker = setInterval(background, 100);
        }

        if (countS == 0) {

            countS = setInterval(score, 100);
        }

        if (count1 == 0) {

            count1 = setInterval(timeMinutes1, 60000);
        }

        if (count2 == 0) {

            count2 = setInterval(timeSeconds, 1000);
        }

        if (count3 == 0) {

            count3 = setInterval(timeSeconds1, 10000);
        }
        if (boxId == 0) {

            boxId = box();
        }
        if (boxWorker == 0) {

            boxWorker = setInterval(move, 100);
        }

    }

    document.getElementById("boy").src = "images/Jump (" + jumpImage + ").png";
}


//Dead Animation


var deadImage = 1;
var deadWorker = 0;

function dead() {

    deadImage = deadImage + 1;

    if (deadImage == 11) {

        deadImage = 10;
        document.getElementById("boy").style.marginTop = "23%";
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = Counts;
    }

    document.getElementById("boy").src = "images/Dead (" + deadImage + ").png";
}






//Background Motion


var backgroundWorker = 0;
var backgroundImage = 0;

function background() {

    backgroundImage = backgroundImage - 20;
    document.getElementById("background").style.backgroundPositionX = backgroundImage + "px";
}






//Barriers


var boxId = 0;
var bml = 200;

function box() {

    for (var a = 0; a < 50; a++) {

        var box = document.createElement("div");
        box.className = "box";
        box.id = "d" + a;

        if (a <= 5) {

            bml = bml + 1000;
        }

        if (a >= 6 & a <= 10) {

            bml = bml + 800;
        }

        if (a >= 11 & a <= 15) {

            bml = bml + 600;
        }

        if (a >= 16 & a <= 20) {

            bml = bml + 400;
        }

        if (a< 25) {

            bml = bml + 200;
        }

        

        box.style.marginLeft = bml + "px";
        document.getElementById("background2").appendChild(box);
    }

}

var boxWorker = 0;

function move() {

    for (var a = 0; a < 20; a++) {

        var x = getComputedStyle(document.getElementById("d" + a));
        var p = parseInt(x.marginLeft) - 30;
        document.getElementById("d" + a).style.marginLeft = p + "px";


        //100 240
        if (p >= 20 & p <= 220) {

            if (bmt > 21) {

                clearInterval(runWorker);
                runWorker = -1;
                runsoundclip.pause();
                clearInterval(jumpWorker);
                jumpWorker = -1;
                jumpsoundclip.pause();
                junglesoundclip.pause();
                clearInterval(countS);
                clearInterval(count1);
                clearInterval(count2);
                clearInterval(count3)
                clearInterval(backgroundWorker);
                clearInterval(backgroundWorker);
                clearInterval(boxWorker);
                setInterval(dead, 100);
                deadsoundclip.play();
            }

        }

    }

}






//Score Count

var countS = 0;
var Counts = 0;

function score() {

    Counts = Counts + 1;
    document.getElementById("score").innerHTML = Counts;
}


//Time Minutes

var count1 = 0;
var Count1 = 0;

function timeMinutes1() {

    Count1 = Count1 + 1;
    document.getElementById("timeMinutes1").innerHTML = Count1;
}


//Time Seconds

var count2 = 0;
var Count2 = 0;

function timeSeconds1() {

    Count2 = Count2 + 1;

    if (Count2 == 6) {

        Count2 = 0;
    }

    document.getElementById("timeSeconds").innerHTML = Count2;
}

var count3 = 0;
var Count3 = 0;

function timeSeconds() {

    Count3 = Count3 + 1;

    if (Count3 == 10) {

        Count3 = 0;
    }

    document.getElementById("timeSeconds1").innerHTML = Count3;
}






//New Game

function reload() {
    location.reload();
}





//MUSICS


//background music

var junglesoundclip = new Audio("audios/jungle-6432.mp3");
junglesoundclip.loop = true;
junglesoundclip.volume = 0.5;

//run sound

var runsoundclip = new Audio("audios/run.mp3");
runsoundclip.loop = true;
runsoundclip.volume = 1;

//jump sound

var jumpsoundclip = new Audio("audios/jump.mp3");
jumpsoundclip.volume = 1;

//Dead Sound

var deadsoundclip = new Audio("audios/dead.mp3");
deadsoundclip.volume = 1;