import styled from "styled-components"
import { Container } from "../components/container"
import { Form } from "../components/form"
import { CartList } from "../components/cartList"
import { useSelector, useDispatch } from 'react-redux'

export const ShoppingCart = () => {
    const {order} = useSelector((state) => state.slice)
    console.log(order)

    return(
        <Container>
            <Form></Form>
            <CartList></CartList>
        </Container>
    )
}