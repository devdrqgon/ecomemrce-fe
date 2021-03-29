import { combineReducers, createStore } from 'redux';
import { demoReducer } from './reducer';
import { AppStateType } from './types';


//type of our reducers
export interface AppState {
    state: AppStateType
}
const store = createStore<AppState, any, any, any>(
    combineReducers({
        state: demoReducer,
}));
export default store;