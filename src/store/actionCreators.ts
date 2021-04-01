import * as actionTypes from "./actionTypes"

export function addProductToSC(product: IProduct) {
  const action: ProductAction = {
    type: actionTypes.ADD_PRODUCT_TO_SHOPPING_CART,
    product,
  }

  return simulateHttpRequest(action)
}

export function removeProduct(product: IProduct) {
  const action: ProductAction = {
    type: actionTypes.REMOVE_SHOPPING_CART_ITEM,
    product,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ProductAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}