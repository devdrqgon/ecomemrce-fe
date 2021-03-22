import React from "react"
import { Product } from "../../models/product"
import styles from "./shoppingCard.module.css"


interface ShoppingCardProps {
   
}

const ShoppingCardPage: React.FC<ShoppingCardProps> = ({}) => {
    const prodOne = new Product("sadoiuad","bnlabl",23,"sadad")
    const prodTwo = new Product("sadoiuasd2ad","ztz",23,"sadad")
    const prodThree = new Product("sadoiuaasdd","bnladabl",23,"sadad")
    const prodFour = new Product("sadoiua213sd2ad","2387ze",23,"sadad")
    const prodList = [prodOne,prodTwo, prodThree, prodFour]
    return (
        <div className={styles.shoppingCardPageContainer}>
            <div className={styles.productsListContainer}>
                <div className={styles.titleContainer}>
                    shopping Card
                </div>
            </div>
            <div className={styles.checkoutContainer}>
                checkout
            </div>
            
        </div>
    )
}

export default ShoppingCardPage


// {ProductsListProp.map(p =>
//     <div className={styles.shoppingCardContianer}>
//         <div style={{ marginRight: '50px' }}>
//             Name: {p.name}
//         </div>
//         <div>
//             Price:  {p.price}
//         </div>
//     </div>
// )}