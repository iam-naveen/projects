
function generateNum(len) {
    var arr
    for (let i = 1; i <= len; i++) {
        var number = Math.floor(Math.random()*10 + 5);
        var ele = document.getElementById(i);
        ele.textContent = number;
    }
}


function showSorted(){

    var arr = [
        document.getElementById("1").value,
        document.getElementById("2").value,
        document.getElementById("3").value,
        document.getElementById("4").value,
        document.getElementById("5").value,
        document.getElementById("6").value,
        document.getElementById("7").value,
        document.getElementById("8").value,
        document.getElementById("9").value,
        document.getElementById("10").value
    ]

    var sorted = sort(arr);
    console.log(sorted.length);
    console.log(sorted[0]);
    for (let i = 0; i < sorted.length; i++) {
        document.getElementById(i+10).textContent = sorted[i];
    }
}

function sort(arr){
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
