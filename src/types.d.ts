interface IProduct {
    id: string
    title: string
    price: number
  }

  type AppState = {
    products: IProduct[]
  }

  type ProductAction = {
    type: string
    product: IProduct
  }

  type DispatchType = (args: ArticleAction) => ArticleAction
  