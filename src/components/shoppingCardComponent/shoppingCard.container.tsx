import React from "react"
import { Product } from "../../models/product"
import styles from "./shoppingCard.module.css"

interface ShoppingCardPageProps{
    prodListProp: Product[]
}


const ShoppingCardPage: React.FC<ShoppingCardPageProps>= ({prodListProp}) => {
    //Daten Vearbeitung Teil
   
    function calculateSum(_inputList: Product[]){
        let sum = 0
        prodListProp.forEach(p => {
            sum = sum + p.price
        });
        return sum
    }
    let itemsCount = prodListProp.length
    let totalprice = calculateSum(prodListProp)

    //output
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
                        prodListProp.map(p => 
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


