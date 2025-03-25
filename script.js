var now = new Date;
var hour = now.getHours;
/*var minute = now.getMinutes
Will be in use later.*/
var darp = window.document.getElementById('goodmessage');
if (hour < 13) {
darp.innerText = "Good Morning!"}
else {
    darp.innerText = "Good Afternon!"
}
if (hour > 18) {darp.innerText = "Good Night!"}