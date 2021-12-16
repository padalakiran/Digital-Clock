function show(){

var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var session = "PM";

if (h==0){
    h=12;
}
if(h<12){
 h=h-11;
 session="AM"
}

if(h<10){
    h="0"+h;
}

if(m<10){
    m="0"+m;
}

if(s<10){
    s="0"+s;
}

document.getElementById("id").innerHTML = h + ":" + m + ":" + s + ":" +session;

setTimeout(show,1000);

}

show();