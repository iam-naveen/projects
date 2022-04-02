var randomNum;

function randomNumber(){
    
    showcopy();
    var power = document.querySelector('#input').value;
    randomNum = Math.floor(Math.random()*(10**power));
    document.querySelector('#num').textContent = randomNum;
}

function showcopy(){
    document.getElementById('copyButton').style.visibility = 'visible';
    console.log("launched");
}

function copy(){
    navigator.clipboard.writeText(randomNum);
    
}