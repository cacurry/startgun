export async function delay(time, cb) {
  return setTimeout(cb, 1000 * time);
}
export function getRandomTime() {
  //return 1.5*Math.random()+0.5;
  return parseFloat((Math.random() * (2.5 - 1.5) + 1.5).toFixed(2));
}
