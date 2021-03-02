import React from "react"
import styles from "./shoppingCard.module.css"
import { Product } from "../models/product"


interface ShoppingCardProps {
    ProductsListProp: Product[]
}

const ShoppingCard: React.FC<ShoppingCardProps> = ({ ProductsListProp }) => {
    return (
        <div>
            <h1> I am the Shopping Card</h1>
            {ProductsListProp.map(p =>
                <div className={styles.shoppingCardContianer}>
                    <div style={{ marginRight: '50px' }}>
                        Name: {p.name}
                    </div>
                    <div>
                        Price:  {p.price}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShoppingCard