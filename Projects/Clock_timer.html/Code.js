function currentTime(){
    
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    let session ="AM";

    if(hh > 12){
        session= "PM"
    }
    hh= (hh < 10)? "0" + hh: hh;
    mm= (mm < 10)? "0" + mm: mm;
    ss= (ss < 10)? "0" + ss: ss;

    let time = hh+ ":" + mm + ":" + ss +" " +session;
    document.getElementById("clock").innerText =time;
    let t=setTimeout(function(){ currentTime()}, 1000);
}
currentTime();

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet = 'Good Morning....';
else if (hrs >= 12 && hrs <16)
  greet = 'Good Afternoon....';
else if (hrs >= 16 && hrs <= 24)
  greet = 'Good Evening....';

document.getElementById('greetings').innerHTML ='<b>' + greet + '</b>';

var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
document.getElementById('Date').innerHTML="<b>" + day + "/" + month + "/" + year + "</b>";