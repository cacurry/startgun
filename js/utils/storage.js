import { AsyncStorage } from 'react-native';
import { getRandomTime } from './common';
const { setItem, getAllKeys, getItem,removeItem } = AsyncStorage;
export async function saveData(obj) {
    await Promise.all(Object.keys(obj).map(async key => {
        return await setItem(key, JSON.stringify(obj[key]));
    }));
}
export async function getData() {
    const keys = await getAllKeys();
    let obj = {
        holdTime: getRandomTime(),
        event: 'SPRINTS',
        sound: 'Voice',
        time: 5,
        random : true
    };
    await Promise.all(keys.map(async key => {
        try {
            obj[key] = JSON.parse(await getItem(key));
        } catch (e) {
            obj[key] = await getItem(key);
        }
    }));
    return obj;
}
export async function clearData(){
    const keys = await getAllKeys();
    await Promise.all(keys.map(async key=>{
        return await removeItem(key);
    }))
}