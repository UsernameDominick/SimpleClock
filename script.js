// clock refresh function 
function startTime() {
    var today = new Date();
    var month = today.getMonth()+1;
    var year = today.getFullYear();
    var day = today.getDate();
    var hour24 = today.getHours();
    var hour12 = today.getHours() % 12;
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var milisecond = today.getMilliseconds();
    
    if (minute < 10 ) {
        minute = "0" + minute;
    } 
    
    if (second < 10) {
        second = "0" + second;
    }

    const dateTime = (month + "." + day + "." + year + " " + hour12 + ":" + minute + ":" + "" + second + ":" + milisecond);
    console.log(dateTime);

    // get's id's, function to manipulate it 
    document.getElementById("dt").innerHTML = dateTime;
    if(dateTime.indexOf()) {
        console.log("It works!!")
    }

}

// timer to call startTime() every second and refresh clock
startTime();
var intervalId = window.setInterval(function(){
    startTime();
  }, 1000);


