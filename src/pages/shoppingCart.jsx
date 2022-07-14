import styled from "styled-components"
import { Container } from "../components/container"
import { Form } from "../components/form"
import { CartList } from "../components/cartList"
import { useSelector, useDispatch } from 'react-redux'
import { addOrder } from "../redux/operations/operations"

const Button = styled.button`
    display: block;
    width: 160px;
    height: 40px;
    font-size: 24px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: transparent;
    cursor: pointer;

    :hover{
        background-color: grey;
    }
`

export const ShoppingCart = () => {
    const {order} = useSelector((state) => state.slice)
    const dispatch = useDispatch()
    // console.log(order)
    const onClick = () => {
        dispatch(addOrder())
    }

    return(
        <>
            <Container>
                <Form></Form>
                <CartList order={order}></CartList>
            </Container>
            <Button type="button" onClick={onClick}>Submit</Button>
        </>

    )
}