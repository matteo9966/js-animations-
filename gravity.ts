export function gravityProgress(time: number, gravity: number, height: number) {
  const gravConst = (1 / 2) * gravity;
  return height - gravConst * time * time;
}

function animateFall(
  height: number,
  gravityProgress: (time: number, gravity: number, height: number) => number,
  draw: (an: number) => void
) {
  let time = 0;
  let curTime = performance.now();
  function animate(timing: number) {
    let freshTime = performance.now();
    // console.log({curTime,timing,freshTime})
    time = (freshTime - curTime) / 200;
    // console.log(time)
    const currentPos = Math.max(gravityProgress(time, 9.8, height), 0);
    console.log(currentPos);
    // console.log(currentPos);
    draw(currentPos);
    if (currentPos > 0) {
      requestAnimationFrame(animate);
    }
  }
  requestAnimationFrame(animate);
}

export { animateFall };
