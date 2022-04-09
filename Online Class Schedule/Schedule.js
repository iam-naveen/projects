document.getElementById('button').style.userSelect = "none";

        function startTime() {
        //   const today= new Date();
        //   let h = today.getHours();
        //   let m = today.getMinutes();
        //   let s = today.getSeconds();
        //   m = checkTime(m);
        //   s = checkTime(s);
        //   h = checkTime(h);
        //   document.getElementById('clock').innerHTML =  h + " : " + m + " : " + s;
        //   setTimeout(startTime, 1000);
        // }
        // function checkTime(i) {
        //   i < 10 ? i="0"+i: i=0+i;
        //   return i;
        // }

        var today= new Date();
        let d = today.toLocaleTimeString(['en-in'], hour12=true);
        document.getElementById("clock").innerHTML = d;
        setTimeout(startTime, 100);
        }