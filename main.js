var $car = document.querySelector('.car');

var drive = {
  direction: 'east'
};

function turn(event) {
  if (event.code === 'KeyW' || event.code === 'ArrowUp') {
    $car.className = 'car north';
    drive.direction = 'north';
  } else if (event.code === 'KeyS' || event.code === 'ArrowDown') {
    $car.className = 'car south';
    drive.direction = 'south';
  } else if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
    $car.className = 'car west';
    drive.direction = 'west';
  } else if (event.code === 'KeyD' || event.code === 'ArrowRight') {
    $car.className = 'car east';
    drive.direction = 'east';
  }
}

document.addEventListener('keydown', turn);
