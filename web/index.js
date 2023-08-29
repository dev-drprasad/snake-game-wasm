import init, { greet, Snake, World } from "snake_game";

const CELL_SIZE = 20;
const WORLD_SIZE = 10;
const WORLD_WIDTH = WORLD_SIZE * CELL_SIZE;
const WORLD_HEIGHT = WORLD_SIZE * CELL_SIZE;

const drawWorld = (ctx) => {
  ctx.beginPath();
  ctx.strokeStyle = "white";

  for (let i = 0; i <= WORLD_SIZE; i++) {
    ctx.moveTo(0, i * CELL_SIZE);
    ctx.lineTo(WORLD_WIDTH, i * CELL_SIZE);
    ctx.moveTo(i * CELL_SIZE, 0);
    ctx.lineTo(i * CELL_SIZE, WORLD_HEIGHT);
  }

  ctx.stroke();
};

const drawSnake = (ctx, snake) => {
  ctx.beginPath();
  ctx.fillStyle = "aquamarine";

  for (let i = 0; i < snake.getBody().length; i++) {
    const snakeCell = snake.getBody()[i];
    ctx.fillRect(
      (snakeCell % WORLD_SIZE) * CELL_SIZE + 1,
      Math.floor(snakeCell / WORLD_SIZE) * CELL_SIZE + 1,
      CELL_SIZE - 2,
      CELL_SIZE - 2
    );
  }

  ctx.stroke();
};

init().then((wasm) => {
  const world = World.new();
  const snake = Snake.new();

  const canvas = document.getElementsByTagName("canvas")[0];
  canvas.width = WORLD_WIDTH;
  canvas.height = WORLD_HEIGHT;
  const ctx = canvas.getContext("2d");

  drawWorld(ctx);
  drawSnake(ctx, snake);
});
