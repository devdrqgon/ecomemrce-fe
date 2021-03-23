import React from "react"
import { Product } from "../../models/product"
import styles from "./shoppingCard.module.css"


interface ShoppingCardProps {
   
}

const ShoppingCardPage: React.FC<ShoppingCardProps> = ({}) => {
    const prodOne = new Product("sadoiuad","bnlabl",23,"sadad")
    const prodTwo = new Product("sadoiuasd2ad","ztz",23,"sadad")
    const prodThree = new Product("sadoiuaasdd","bnladabl",23,"sadad")
    const prodList = [prodOne,prodTwo, prodThree]
    return (
        <div className={styles.shoppingCardPageContainer}>
            <div className={styles.shoppingCardContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.titleStyle}>
                        shopping Card
                    </div>
                    <div className={styles.priceStyle}>
                        price
                    </div>
                </div>
                <div className={styles.shoppingCardItemsContainer}>
                    {
                        prodList.map(p => 
                            <div className={styles.itemContainer}>
                                <div className={styles.imgStyle}>

                                </div>
                                <div className={styles.detailsStyle}>
                                    name : {p.name}
                                </div>
                                <div className={styles.itemPriceStyle}>
                                    price: {p.price}
                                </div>
                            </div>
                            
                        )
                    }
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