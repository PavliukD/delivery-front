import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createOrder } from "../redux/operations/operations";

const Item = styled.li`
    display: flex;
    width: 100%;
    height: 240px;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 10px;

    :not(:first-child){
        margin-top: 10px;
    }
`
const Image = styled.img`
    display: block;
    width: 60%;
    height: 100%;
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

const Info = styled.div`
    display: block;
    padding: 0 15px;
    max-width: 40%;
    min-width: 30%;
    outline: 1px solid tomato;
`

const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    outline: 1px solid tomato;
`

const InputWrap = styled.div`
    margin-top: 20px;
    position: relative;
`

const Input = styled.input`
    width: 200px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 5px;
    border: none;
    outline: 1px solid black;
    text-align: center;
`

const IncButton = styled.button`
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    top: -1px;
    right: -6px;
    border-radius: 0 5px 0 0;
    border: 1px solid black;

    :hover{
        border: 2px solid black;
        z-index: 999;
    }
`

const DecButton = styled.button`
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    bottom: -1px;
    right: -6px;
    border-radius: 0 0 5px 0;
    border: 1px solid black;

    :hover{
        border: 2px solid black;
    }
`

export const OrderListItem = ({product}) => {

    const [value, setValue] = useState(product.quantity)
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        console.log(e.currentTarget.value)
        const check  = Number(e.currentTarget.value)
        if (!check){
            return
        }
        // setValue(e.currentTarget.value)
        dispatch(createOrder({
            ...product,
            quantity: e.currentTarget.value,
        }))
    }

    return(
        <Item>
            <Image src='' alt={`This is image of`}></Image>
            <Info>
                <TextWrap>
                    <Title>{product.productName}</Title>
                    <Text>{`Price: ${product.price}`}</Text>
                </TextWrap>
               <InputWrap>
                    <Input
                        value={value}
                        onChange={handleChange}></Input>
                    <IncButton></IncButton>
                    <DecButton></DecButton>
               </InputWrap>
            </Info>
        </Item>
    )
}