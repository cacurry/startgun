import { AsyncStorage } from 'react-native';
const { setItem, getAllKeys, getItem } = AsyncStorage;
export async function saveData(obj) {
    await Promise.all(Object.keys(obj).map(async key => {
        return await setItem(key, JSON.stringify(obj[key]));
    }));
}
export async function getData() {
    const keys = await getAllKeys();
    let obj = {
        holdTime: 0.75,
        event: 'SPRINTS',
        sound: 'Voice',
        time: 5
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