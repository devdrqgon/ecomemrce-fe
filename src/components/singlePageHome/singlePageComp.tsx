import React, { useState } from 'react'
import { Product } from '../../models/product'
import ProductsOverview from '../productsOverviewComp/productsOverview'
import ShoppingCard from '../shoppingCardComponent/shoppingCard.container'
import styles from './singlePageComp.module.css'



const SinglePage: React.FC = () => {
    const Omo = new Product("1", "Omo Matic", 5, "Cleaning")
    const Dixan = new Product("15", "Dixan", 24, "Cleaning")
    const Nadhif = new Product("F534HG", "Nadhif", 7, "Cleaning")
    
    const kouraPo = new Product("asda", "Koura po", 7, "Sports")
    const kouraTennis = new Product("sdsds", "kouraTennis", 7, "Sports")

    const graindor = new Product("45", "graindoor", 7, "Food")
    
    const kosksi = new Product("8445", "kosksi", 7, "Food")
    const ProductsList: Product[] = [Omo, Dixan, Nadhif,kouraPo,kouraTennis,graindor,kosksi]

    //useStatehook to store addedToSC-products
    const [shoppingCardItems,setShoppingCardItems] = useState<Product[]>([])

    return (
        <div className={styles.SinglePageContainer}>
            <div>
                <ProductsOverview _productsProp={ProductsList} />
            </div>
            <div>
                <ShoppingCard ProductsListProp={shoppingCardItems} />
            </div>
        </div>

    )
}

export default SinglePage