import { Layout, Menu } from 'antd';
import styles from "./masterLayout.module.css"
import React from 'react'
import { Product } from '../../models/product';
import ProductsPage from '../productsPage/productsPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShoppingCardPage from '../shoppingCardComponent/shoppingCard.container';


const { Header, Content } = Layout;


const MasterLayout: React.FC = () => {

 
return(
   <Router>
      <Layout className="layout">
        <Header>
         
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="2">
              Products
              <Link to="/products" />
             
            </Menu.Item>
            <Menu.Item key="3">
              Shopping Cart
              <Link to="/shoppingcart" />
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>    
          <div className={styles.siteLayoutContent}>
            <Route  exact path="/" component={ProductsPage} />
            <Route exact path="/products" component={ProductsPage} />
            <Route  exact path="/shoppingcart" component={ShoppingCardPage} />       
          </div>
        </Content>
  </Layout>
   </Router>
)
}

export default MasterLayout