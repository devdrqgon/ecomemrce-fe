import { combineReducers, createStore } from 'redux';
import { demoReducer } from './demo/reducer';
import { AppStateType } from './demo/types';


//type of our reducers
export interface AppState {
    state: AppStateType
}
const store = createStore<AppState, any, any, any>(
    combineReducers({
        state: demoReducer,
}));
export default store;