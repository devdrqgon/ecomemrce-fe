import { ActionType } from 'typesafe-actions';
import { Product } from '../models/product';
import * as actions from './actions';

export type DemoActions = ActionType<typeof actions>;

//type of our appState
export interface AppStateType {
    productsInventory: Product[]
    shoppingCardProducts: Product[]
}

export enum Constants {
    ADD_ITEM = 'ADD_ITEM'
}