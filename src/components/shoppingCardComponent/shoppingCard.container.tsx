import React from "react"
import { Product } from "../../models/product"
import styles from "./shoppingCard.module.css"



const ShoppingCardPage: React.FC= ({}) => {
    const prodOne = new Product("sadoiuad","bnlabl",23,"sadad")
    const prodTwo = new Product("sadoiuasd2ad","ztz",54,"sadad")
    const prodThree = new Product("sadoiuaasdd","bnladabl",230,"sadad")
    const prodList = [prodOne,prodTwo, prodThree]
    function calculateSum(_inputList: Product[]){
        let sum = 0
        prodList.forEach(p => {
            sum = sum + p.price
        });
        return sum
    }
    let itemsCount = prodList.length
    let totalprice = calculateSum(prodList)
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
                <div>
                    Subtotal ({itemsCount}): {totalprice} euros
                </div>
                <div>
                    <button> Checkout </button>
                </div>
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