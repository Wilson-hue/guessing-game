var randomNumber;
var count = 0;
var prev = 0;
var cur;
startNew();

function startn(){
    document.getElementById("guess").disabled = true;
    document.getElementById("btn").disabled = true;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showToast(txt) {
    var toast = document.getElementById('toast');
    toast.innerText = txt;
    toast.style.display = 'block';

    setTimeout(function () {
        toast.style.display = 'none';
    }, 3000); // Hide the toast after 3 seconds
}

function guessn(){
    count++;
    document.getElementById("nguess").innerText = "No of Guess : " + count;
    cur = parseInt(document.getElementById("guess").value);
    prev = cur;
    document.getElementById("prev").innerText = "Previous guess: " + prev;
    if (cur<randomNumber){
        document.getElementById("result").innerText = "Status: Wrong";
        document.getElementById("result").style.backgroundColor = "red";
        document.getElementById("Alert").innerText = "Alert: Guess is lesser than no.";
    }else if(cur>randomNumber){
        document.getElementById("result").innerText = "Status: Wrong";
        document.getElementById("result").style.backgroundColor = "red";
        document.getElementById("Alert").innerText = "Alert: Guess is greater than no.";
    }else{
        document.getElementById("result").innerText = "Status: Correct";
        document.getElementById("result").style.backgroundColor = "green";
        document.getElementById("Alert").innerText = "Alert: You have found it.";
        showToast("You have won. Congrats!");
        document.getElementById("guess").disabled = true;
        document.getElementById("btn").disabled = true;
    }
    if (count==10){
        showToast("Sorry! You didn't find it in 10 times.");
        document.getElementById("guess").disabled = true;
        document.getElementById("btn").disabled = true;
    }
}

function startNew(){
    randomNumber = getRandomInt(1, 101);
    count = 0;
    showToast("New Random number is generated.");
    document.getElementById("nguess").innerText = "No of Guess : " + count;
    document.getElementById("prev").innerText ="";
    document.getElementById("guess").value=0;
    document.getElementById("guess").disabled = false;
    document.getElementById("btn").disabled = false;
}
