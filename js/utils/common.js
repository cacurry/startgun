export async function delay(time) {
    return await new Promise(resolve => {
        setTimeout(resolve, 1000 * time);
    });
}
export function poll(time, cb) {
    let i = 0;
    const interval = setInterval(() => {
        i = i + 1;
        if (i === time) {
            clearInterval(interval);
        } else {
            cb(i);
        }
    }, 1000);
}