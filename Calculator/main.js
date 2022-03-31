
function add(){

    document.getElementById("add").setAttribute('aria-pressed', 'true');
    document.getElementById("sub").setAttribute('aria-pressed', 'false');
    document.getElementById("mul").setAttribute('aria-pressed', 'false');
    document.getElementById("div").setAttribute('aria-pressed', 'false');

    var a = document.getElementById("firstInt").value;
    var b = document.getElementById("secondInt").value;
    var ans = Number(a) + Number(b);
    document.getElementById("output").textContent = ans;
}

function sub(){

    document.getElementById("add").setAttribute('aria-pressed', 'false');
    document.getElementById("sub").setAttribute('aria-pressed', 'true');
    document.getElementById("mul").setAttribute('aria-pressed', 'false');
    document.getElementById("div").setAttribute('aria-pressed', 'false');

    var a = document.getElementById("firstInt").value;
    var b = document.getElementById("secondInt").value;
    var ans = a - b;
    document.getElementById("output").textContent = ans;
}

function mul() {

    document.getElementById("add").setAttribute('aria-pressed', 'false');
    document.getElementById("sub").setAttribute('aria-pressed', 'false');
    document.getElementById("mul").setAttribute('aria-pressed', 'true');
    document.getElementById("div").setAttribute('aria-pressed', 'false');

    var a = document.getElementById("firstInt").value;
    var b = document.getElementById("secondInt").value;
    var ans = a * b;
    document.getElementById("output").textContent = ans;
}

function div() {

    document.getElementById("add").setAttribute('aria-pressed', 'false');
    document.getElementById("sub").setAttribute('aria-pressed', 'false');
    document.getElementById("mul").setAttribute('aria-pressed', 'false');
    document.getElementById("div").setAttribute('aria-pressed', 'true');

    var a = document.getElementById("firstInt").value;
    var b = document.getElementById("secondInt").value;
    var ans = a / b;
    document.getElementById("output").textContent = ans;
}

