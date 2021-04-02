import * as actionTypes from "./actionTypes"

export function addProductToScACTIONCREATOR(product: IProduct) {
  const action: ProductAction = {
    type: actionTypes.ADD_PRODUCT_TO_SHOPPING_CART,
    product,
  }

  return  (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}

export function decreaseSCItemQuantityACTIONCREATOR(scItem: IShoppingCartItem) {
  const action: SCAction = {
    type: actionTypes.DECREASE_SHOPPING_CART_ITEM_QUANITY,
    scItem
  }
  return  (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}



export function removeSCItemACTIONCREATOR(scItem: IShoppingCartItem) {
  const action: SCAction = {
    type: actionTypes.REMOVE_SC_ITEM,
    scItem
  }
  return  (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}

