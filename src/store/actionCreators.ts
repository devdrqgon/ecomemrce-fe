import * as actionTypes from "./actionTypes"

export function addProduct(product: IProduct) {
  const action: ProductAction = {
    type: actionTypes.ADD_ARTICLE,
    product,
  }

  return simulateHttpRequest(action)
}

export function removeProduct(product: IProduct) {
  const action: ProductAction = {
    type: actionTypes.REMOVE_ARTICLE,
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