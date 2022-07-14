import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux"
import {createOrder} from '../redux/operations/operations'


const ProductCardWrap = styled.div`
    display: block;
    position: relative;
    wtdth: 100%;
    height: 95%;
    padding: 5px 10px;
`

const Image = styled.img`
    display: block;
    width: 100%;
    height: 50%;
    border: 1px solid black;
    border-radius: 10px;
`

const Title = styled.h4`
    margin: 0;
    margin-top: 10px;

`
const Text = styled.p`
    margin: 0;
    margin-top: 10px;
`

const Button = styled.button`
    position: absolute;
    bottom: 20px;
    right: 10px;
    padding: 5px 25px;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;

    :hover{
        background: grey;
    }
`

export const ProductCard = ({product, shop}) => {
    const dispatch = useDispatch()
    const {order} = useSelector((state) => state.slice)

    const onClickButton = (e) => {
        const res = order.find(item => item.productName === product.productName)
        if (res) {
            return
        }
        dispatch(createOrder({
            price: product.price,
            productName: product.productName,
            shopName: product.shopName,
            quantity: 1,
        }))
    }

    return (
       <ProductCardWrap>
            <Image src="" alt={`This is image of ${product.productName}`}></Image>
            <Title>{product.productName}</Title>
            <Text>Price: {product.price}</Text>
            <Button 
                type="button" 
                onClick={onClickButton} 
                >add to cart</Button>
       </ProductCardWrap>
    )
}