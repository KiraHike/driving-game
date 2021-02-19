var $car = document.querySelector('.car');

var drive = {
  direction: 'east'
};

function turn(event) {
  if (event.code === 'KeyW') {
    $car.className = 'car north';
    drive.direction = 'north';
  } else if (event.code === 'KeyS') {
    $car.className = 'car south';
    drive.direction = 'south';
  } else if (event.code === 'KeyA') {
    $car.className = 'car west';
    drive.direction = 'west';
  } else if (event.code === 'KeyD') {
    $car.className = 'car east';
    drive.direction = 'east';
  }
}

document.addEventListener('keydown', turn);
