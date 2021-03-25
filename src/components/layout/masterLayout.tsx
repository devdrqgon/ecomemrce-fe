import { Layout, Menu } from 'antd';
import styles from "./masterLayout.module.css"
import React from 'react'
import { Product } from '../../models/product';
const { Header, Content } = Layout;


const MasterLayout: React.FC = () => {

 const prodOne = new Product("sadoiuad","bnlabl",23,"sadad")
     const prodTwo = new Product("sadoiuasd2ad","ztz",54,"sadad")
     const prodThree = new Product("sadoiuaasdd","bnladabl",230,"sadad")
     const prodList = [prodOne,prodTwo, prodThree]
return(
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="2">Products</Menu.Item>
        <Menu.Item key="3">Shopping Cart</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>    
      <div className={styles.siteLayoutContent}>
                    <h1>this is products List page </h1>
      </div>
    </Content>
    
  </Layout>
)
}

export default MasterLayout