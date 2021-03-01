import { Product } from "./product"

export class ShoppingCard {
    id: string
    productList: Product[]

    constructor(_idParam: string, _productListParam: Product[]) {
        this.id = _idParam
        this.productList = _productListParam
    }

    addProduct(productParam: Product){
        this.productList.push(productParam)
    }
}