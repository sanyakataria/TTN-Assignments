function myfunc() {
  var fulldate = new Date();

  function calculateTime() {
    var hour = fulldate.getHours();
    var min = fulldate.getMinutes();
    var sec = fulldate.getSeconds();
    var session = "AM";

    if (hour > 12) {
      hour = hour % 12;
      session = "PM";
    } else if (hour == 12) {
      hour = 12;
      session = "PM";
    } else if (hour == 0) {
      hour = 12;
      session = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    var finaltime = hour + ":" + min + ":" + sec + " " + session;
    return finaltime;
  }
  document.getElementById("time").innerHTML = calculateTime();

  function calculateDate() {
    var day = fulldate.getDate();
    var monthArr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    var monthnum = fulldate.getMonth();
    var month = monthArr[monthnum];
    var year = fulldate.getFullYear();

    if (day < 10) {
      day = "0" + day;
    }
    return day + " " + month + " " + year;
  }

  document.getElementById("date").innerHTML = calculateDate();

  function greet() {
    var hrs = fulldate.getHours();
    var greetings = "Good";

    if (hrs >= 5 && hrs < 12) {
      greetings += " Morning";
    } else if (hrs >= 12 && hrs <= 16) {
      greetings += " Afternoon";
    } else if (hrs >= 17 && hrs <= 20) {
      greetings += " Evening";
    } else {
      greetings += " Night";
    }
    return greetings;
  }

  document.getElementById("greeting").innerHTML = greet();
  // setTimeout(myfunc,1000);
}

// myfunc();
setInterval(myfunc, 1000);
