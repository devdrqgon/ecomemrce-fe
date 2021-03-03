export class Product{
    id: string
    name: string
    price: number
    category: string

    constructor(_idParam: string, _nameParam: string, _priceParam: number ,_categoryParam :string ){
        this.id = _idParam
        this.name = _nameParam
        this.price = _priceParam
        this.category = _categoryParam
    }

    

}