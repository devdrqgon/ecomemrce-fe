interface IProduct {
    id: string
    title: string
    price: number
  }

  //definition of which properties, does your state contains
  type AppState = {
    shoppingCartItems: IProduct[]
    inventoryProducts: IProduct[]
  }

  type ProductAction = {
    type: string
    product: IProduct
  }

  type DispatchType = (args: ArticleAction) => ArticleAction
  