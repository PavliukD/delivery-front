import styled from "styled-components"
import { Container } from "../components/container"
import { useSelector } from "react-redux/es/exports"
import { ShopsList } from "../components/shopsList"
import {ProductsList} from '../components/productsList'
import { useState, useEffect } from "react"

export const Shop = () => {

    const [shop, setShop] = useState()
    const [products, setProducts] = useState([])

    const {productsList, shopList} = useSelector((state) => state.slice)

    useEffect(() => {
        setProducts(productsList.filter(product => product.shopName === shop))
    }, [shop])
    

    const changeProductsList = (data) => {
        console.log(data)
        setShop(data)
    }

    return(
        <Container>
            <ShopsList list={shopList} products={productsList} callback={changeProductsList}/>
            <ProductsList products={products} shop={shop}></ProductsList>
        </Container>
    )
}