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
    let number = document.getElementById('num');

    navigator.clipboard.writeText(number.textContent);

    alert("Copied: "+ number.textContent);
    console.log("COPIED");
}