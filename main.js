var $car = document.querySelector('.car');

var car = {
  direction: 'east',
  xAxis: 0,
  yAxis: 0
};

function drive(event) {
  if (event.code === 'KeyW' || event.code === 'ArrowUp') {
    $car.className = 'car north';
    car.direction = 'north';
  } else if (event.code === 'KeyS' || event.code === 'ArrowDown') {
    $car.className = 'car south';
    car.direction = 'south';
  } else if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
    $car.className = 'car west';
    car.direction = 'west';
  } else if (event.code === 'KeyD' || event.code === 'ArrowRight') {
    $car.className = 'car east';
    car.direction = 'east';
  }
}

function start(event) {
  car.xAxis += 15;
  $car.style.left = car.xAxis + 'px';
}

document.addEventListener('keydown', drive);

setInterval(start, 16);
