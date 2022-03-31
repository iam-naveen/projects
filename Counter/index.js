let count = 0;
function increment() {
    if (count>=0) {
        document.getElementById("counter").innerHTML = ++count;
        document.getElementById("error").textContent = ""
    }
}
function decrement() {
    if (count!=0) {
        document.getElementById("counter").innerHTML = --count;
    }else{
        document.getElementById("error").textContent = "* Counter cannot be less than Zero"
    }

}
