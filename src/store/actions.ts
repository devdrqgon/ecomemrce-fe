import { action } from 'typesafe-actions';
import { Product } from '../models/product';
import { Constants } from './types';



export function addItemToList(item: Product) {
    return action(Constants.ADD_ITEM,
                                    {
                                    item}
        );
}