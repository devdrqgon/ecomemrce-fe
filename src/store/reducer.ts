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
    action: ProductAction
  ): AppState => {
    switch (action.type) {
      
        
      case actionTypes.REMOVE_SHOPPING_CART_ITEM:
        const updatedProducts: IProduct[] = state.shoppingCartItems.filter(
          article => article.id !== action.product.id
        )
        return {
          ...state,
          shoppingCartItems: updatedProducts,
        }
    }
    return state
  }
  
  export default reducer