import { stat } from "node:fs"
import * as actionTypes from "./actionTypes"

//the intial state of our store that our app starts with
const initialState: AppState = {
  shoppingCartItems: [],
  inventoryProducts: [
    {
      id: "ss3",
      title: "prod 1",
      price: 23
  },
  {
    id: "ss4",
    title: "prod 2",
    price: 234
  },
  ]
}

const reducer = (
    state: AppState = initialState,
    action: any
  ): AppState => {
    switch (action.type) {
      
      case actionTypes.ADD_PRODUCT_TO_SHOPPING_CART:
        let index = state.shoppingCartItems.findIndex(s=> s.id == action.product.id)
        if(index === -1){
          const newScItem: IShoppingCartItem = {
            id: action.product.id, 
            title: action.product.title,
            price: action.product.price,
            quanity: 1
          }
        
          return {
            ...state,
            shoppingCartItems: state.shoppingCartItems.concat(newScItem),
          }
        
        }
        else{
          const updatedSCItems = state.shoppingCartItems.map(
            (item) => 
              item.id === action.product.id ? 
                              {...item, quanity: item.quanity +1}
                            :
                             item
          )
          return { 
            ...state, 
            shoppingCartItems: updatedSCItems
          }
        }
        
      case actionTypes.REMOVE_SHOPPING_CART_ITEM:

        if(action.scItem.quanity === 1){
          const updatedShoppingCart: IShoppingCartItem[] = state.shoppingCartItems.filter(
            arrayItem => arrayItem.id !== action.scItem.id
          )
          return {
            ...state,
            shoppingCartItems: updatedShoppingCart,
          }
          
        }
        else if(action.scItem.quanity > 1)
        { 
          const updatedSCItems = state.shoppingCartItems.map(
            (item) => 
              item.id === action.scItem.id ? 
                              {...item, quanity: item.quanity -1}
                            :
                             item
        )
          return { 
            ...state, 
            shoppingCartItems: updatedSCItems
        }
      }
        else{
          throw Error("quantity was less than 1")
        }
        
    }
    return state
  }
  
  export default reducer


                                                             