import appReducer from './AppReducer';
import { combineReducers } from 'redux';
import { DESTROY_SESSION } from '../types/StoreTypes';

const mainReducer = combineReducers({
    appReducer,
});


const rootReducer = (state: any, action: any) => {
    if (action.type === DESTROY_SESSION)
        state = {
            appReducer: undefined,
            awardedLane: undefined,
            oneClick: undefined,
            history: undefined
        };

    return mainReducer(state, action);
}


export default rootReducer;
