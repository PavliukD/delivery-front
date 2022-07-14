import styled from 'styled-components'
import { OrderListItem } from './orderListItem'

const OrderListWrap = styled.div`
    margin-left: 10px;
    padding: 20px 40px;
    width: 50%;
    height: 480px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: auto;
`

const OrderList = styled.ul`
    display: block;
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
`



export const CartList = ({order, callback}) => {
    return(
        <OrderListWrap>
            <OrderList>
                {order.map(product => {
                    return(
                        <OrderListItem 
                            key={`${product.shopName}-${product.productName}`}
                            product={product}>
                        </OrderListItem>
                    )
                })}
            </OrderList>
        </OrderListWrap>
    )
}