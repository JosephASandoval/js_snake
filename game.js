let lastRenderTime = 0;
const SNAKE_SPEED = 2;

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return; // number of seconds between each move, so 2 time per second would be 1 move every 0.5 seconds

  console.log("Render");
  lastRenderTime = currentTime;
}


window.requestAnimationFrame(main);
