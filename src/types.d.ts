interface IProduct {
    id: string
    title: string
    price: number
  }
  interface IShoppingCartItem {
    id: string
    title: string
    price: number
    quanity: number
  }

  //definition of which properties, does your state contains
  type AppState = {
    shoppingCartItems: IShoppingCartItem[]
    inventoryProducts: IProduct[]
  }

  type ProductAction = {
    type: string
    product: IProduct
  }
  type SCAction = {
    type: string
    scItem: IShoppingCartItem
  }

  type DispatchType = (args: ArticleAction) => ArticleAction
  