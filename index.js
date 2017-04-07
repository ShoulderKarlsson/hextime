var clock = document.querySelector('.clock');
var clockContainer = document.querySelector('.clock-container');
var transform = function (time) { return time < 10 ? "0" + time : "" + time; };
var getTime = function (d) {
    return "" + transform(d.getHours()) + transform(d.getMinutes()) + transform(d.getSeconds());
};
var setBackground = function (element, hex) {
    element.style.background = "#" + hex;
};
var updateClock = function (element, time) {
    element.textContent = "#" + time;
};
var update = function () {
    var d = new Date();
    var time = getTime(d);
    updateClock(clock, time);
    setBackground(clockContainer, time);
};
var run = function () {
    setInterval(update, 1000);
};
run();
