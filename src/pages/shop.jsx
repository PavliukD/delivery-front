import styled from "styled-components"
import { Container } from "../components/container"
import { useSelector } from "react-redux/es/exports"
import { ShopsList } from "../components/shopsList"
import {ProductsList} from '../components/productsList'
import { useState } from "react"

export const Shop = () => {

    const [products, setProducts] = useState([])

    const {productsList, shopList} = useSelector((state) => state.slice)
    

    const changeProductsList = (data) => {
        console.log(data)
        setProducts(data)
    }

    return(
        <Container>
            <ShopsList list={shopList} products={productsList} callback={changeProductsList}/>
            <ProductsList products={products}></ProductsList>
        </Container>
    )
}