export async function delay(time){
    return await new Promise(resolve=>{
        setTimeout(resolve,1000*time);
    })
}
export function getRandomTime(){
    return 1.5*Math.random()+0.5;
}