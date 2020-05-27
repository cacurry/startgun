import { ActionNames } from '../actions';
import { saveData } from '../../utils/storage';
export default function (state = {}, action) {
    const { type, payload } = action;
    let newState=JSON.parse(JSON.stringify(state));
    switch (type) {
        case ActionNames.SET_UI_PROPERTY: {
            const { name, value } = payload;
            newState[name] = value;
            break;
        }
        case ActionNames.DELETE_UI_PROPERTY: {
            const { name } = payload;
            delete newState[name];
            break;
        }
        case ActionNames.SET_UI_DATA: {
            Object.keys(payload).forEach(key => {
                newState[key] = payload[key];
            });
            break;
        }
    }
    saveData(newState).catch(console.log);
    return newState;
}