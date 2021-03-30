import * as actionTypes from "./actionTypes"

const initialState: AppState = {
  products: [
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
  ],
}

const reducer = (
    state: AppState = initialState,
    action: ProductAction
  ): AppState => {
    switch (action.type) {
      
        
      case actionTypes.REMOVE_ARTICLE:
        const updatedProducts: IProduct[] = state.products.filter(
          article => article.id !== action.product.id
        )
        return {
          ...state,
          products: updatedProducts,
        }
    }
    return state
  }
  
  export default reducer