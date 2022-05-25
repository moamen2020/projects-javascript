class Item {
  shape;
  x;
  y;

  constructor(shape, x, y) {
    this.shape = shape;
    this.x = x;
    this.y = y;
    this.shape.style.left = x + "px";
    this.shape.style.top = y + "px";
  }
}

class Food extends Item {
  constructor(shape, x, y) {
    super(shape, x, y);
  }

  recreate() {
    this.x = getRandom20(window.innerWidth - 20);
    this.y = getRandom20(window.innerHeight - 20);
    this.shape.style.left = this.x + "px";
    this.shape.style.top = this.y + "px";
  }
}

class Player extends Item {
  constructor(shape, x, y) {
    super(shape, x, y);
  }

  moveUp() {
    this.y -= 20;
    this.shape.style.top = this.y + "px";
  }

  moveDown() {
    this.y += 20;
    this.shape.style.top = this.y + "px";
  }

  moveLeft() {
    this.x -= 20;
    this.shape.style.left = this.x + "px";
  }

  moveRight() {
    this.x += 20;
    this.shape.style.left = this.x + "px";
  }
}

function getRandom20(end) {
  let value = Math.round(Math.random() * end);
  return value - (value % 20);
}

let food = new Food(
  document.querySelector("#food"),
  getRandom20(window.innerWidth - 20),
  getRandom20(window.innerHeight - 20)
);

let player = new Player(
  document.querySelector("#player"),
  getRandom20(window.innerWidth - 20),
  getRandom20(window.innerHeight - 20)
);

window.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 38: {
      if (player.y > 0) player.moveUp();
      break;
    }
    case 40: {
      player.moveDown();
      break;
    }
    case 37: {
      if (player.x > 0) player.moveLeft();
      break;
    }
    case 39: {
      player.moveRight();
      break;
    }
  }

  if (player.x === food.x && player.y === food.y) food.recreate();
});
