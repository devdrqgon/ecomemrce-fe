import React from "react"
import { Dispatch } from "redux"
import { DemoActions } from "../../../store/demo/types"
import styles from "./productItem.module.css"
import * as actions from '../../../store/actions';
import { Product } from "../../../models/product";
import { connect } from "react-redux";
import { Button } from "antd";

interface ProductItemProps{
    product: Product,
    addItem: (item : Product) => void
}


const ProductItem: React.FC<ProductItemProps> = ({product,addItem}) => {

return(
    
    <div onClick={()=> addItem(product)} className={styles.itemContainer}>
        <div className={styles.imgStyle}>

        </div>
        <div className={styles.detailsStyle}>
            name : {product.name}
        </div>
        <div className={styles.itemPriceStyle}>
            price: {product.price}
        </div>
        <div>
           <Button type='primary'> Add to card</Button>
        </div>
    </div>
)
}

const mapDispatcherToProps = (dispatch: Dispatch<DemoActions>) => {
    return {
        addItem: (item: Product) => dispatch(actions.addItemToList(item))
    }
}

export default connect(null, mapDispatcherToProps)(ProductItem);
