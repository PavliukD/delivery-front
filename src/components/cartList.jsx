import styled from 'styled-components'

const CartListWrap = styled.div`
    display: block;
    margin-left: 10px;
    padding: 20px 40px;
    width: 100%;
    height: 480px;
    border: 1px solid black;
    border-radius: 10px;
`

const OrderList = styled.ul`
    padding-inline-start: 0;
`

const OrderListItem = styled.li`
`

export const CartList = ({order, callback}) => {
    return(
        <CartListWrap>
            
        </CartListWrap>
    )
}