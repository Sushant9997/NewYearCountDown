function countDowm(){
    var now = new Date();
    // var now = new Date(miliseconds);
    // var now = new Date(dateString);
    var eventDate = new Date(2021, 00, 01);
    console.log(eventDate)
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime ;
    var s = (Math.floor(remTime/1000));
    var m = (Math.floor(s/60));
    var h = (Math.floor(m/60));
    var d = (Math.floor(h/24));

//    console.log(d);
    h %= 24;
    m %= 60;
    s %= 60;

    h=(h<10)?"0" + h :h;
    m=(m<10)?"0" + m :m;
    s=(s<10)?"0" + s :s;

document.getElementById("days").textContent = d;
 document.getElementById("days").innerText = d;
document.getElementById("minutes").textContent = m;
document.getElementById("hours").textContent = h;
document.getElementById("seconds").textContent = s;
setTimeout(countDowm, 1000);
}
countDowm();
