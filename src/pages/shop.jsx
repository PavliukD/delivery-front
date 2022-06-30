import styled from "styled-components"
import { Container } from "../components/container"
import { useSelector } from "react-redux/es/exports"
import { ShopsList } from "../components/shopsList"

export const Shop = () => {

    const {productsList, shopList} = useSelector((state) => state.slice)

    const changeProductsList = (data) => {
        console.log(data)
    }

    return(
        <Container>
            <ShopsList list={shopList} products={productsList} callback={changeProductsList}/>
        </Container>
    )
}