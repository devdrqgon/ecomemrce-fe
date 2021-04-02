import * as actionTypes from "./actionTypes"

export function addProductToSC(product: IProduct) {
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

export function removeSCItem(scItem: IShoppingCartItem) {
  const action: SCAction = {
    type: actionTypes.REMOVE_SHOPPING_CART_ITEM,
    scItem
  }
  return  (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}
