import { Product } from '../../models/product';
import { Constants, DemoActions, AppStateType } from './types';

const prodOne = new Product("sadoiuad","zit",23,"sadad")
const prodTwo = new Product("sadoiuasd2ad","7lib",54,"sadad")
const prodThree = new Product("sadoiuaasdd","chocotom",230,"sadad")
const prodList = [prodOne,prodTwo, prodThree]

const initialState: AppStateType = {
    productsInventory: prodList,
    shoppingCardProducts: [],
    
};


export function demoReducer(state: AppStateType = initialState, action: DemoActions): 
AppStateType {
    switch (action.type) {

        case Constants.ADD_ITEM:{
            let temp = state.shoppingCardProducts
            temp.push(action.payload.item)
            let s = {
                ...state,
                shoppingCardProducts: temp
            }

            return s
        }
           
        default:
            return state;
    }
}
