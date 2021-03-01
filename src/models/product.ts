export class Product{
    id: string
    name: string
    price: number

    constructor(_idParam: string, _nameParam: string, _priceParam: number  ){
        this.id = _idParam
        this.name = _nameParam
        this.price = _priceParam
    }

    

}