export async function delay(time){
    return await new Promise(resolve=>{
        setTimeout(resolve,1000*time);
    })
}