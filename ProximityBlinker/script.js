var led = 0,
sensor = 0,
id = '',
timer = 0;

function UpdateLED(){
  digitalRead(sensor, id);
  var r = document.getElementById('output');
  if (r == 0) {
    digitalWrite(led, 'LOW');
  }
  else {
    digitalWrite(led, 'HIGH');
  }
};

function setUpdate(l, s, i, time) {
  led = l;
  sensor = s;
  id = i;
  timer = setInterval(UpdateLED, time);
}

function clearUpdate() {
  clearInterval(timer);
  timer = 0;
}
