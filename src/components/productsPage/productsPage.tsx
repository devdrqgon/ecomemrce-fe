import React from 'react'
import styles from './productsPage.module.css'
import { Product } from '../../models/product'
import ProductItem from '../common/productItem/productItem'

interface ProductsPageProps {
    productsListProp: Product[]
}
const ProductsPage: React.FC= () => {
    const prodOne = new Product("sadoiuad","bnlabl",23,"sadad")
     const prodTwo = new Product("sadoiuasd2ad","ztz",54,"sadad")
     const prodThree = new Product("sadoiuaasdd","bnladabl",230,"sadad")
     const prodList = [prodOne,prodTwo, prodThree]
    return(
        <div className={styles.ProductsListContainer}>
                
            {
                prodList.map(p=>
                <ProductItem nameProduct={p.name} priceProduct={p.price}/>
                    
                )
            }
        </div>
    )
}
export default ProductsPage