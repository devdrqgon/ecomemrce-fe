import { Product } from "../../models/product";
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type DemoActions = ActionType<typeof actions>;

export interface IDemoState {
    productsInventory: Product[]
    shoppingCardProducts: Product[]
}

export enum Constants {
    ADD_ITEM = 'ADD_ITEM'
}