import styled from "styled-components";
import { useEffect, useState } from "react";

const ShopsListWrap = styled.div`
    display: block;
    height: 80vh;
    width: 360px;
    padding: 20px 40px;
    border: 1px solid black;
    border-radius: 10px
`
const StyleTitel = styled.h3`
    margin: auto;
    text-align: center;
`

const StyledList = styled.ul`
    list-style: none;
    padding-inline-start: 0;
`

const StyledListItem = styled.li`
    margin-left: auto;
    margin-right: auto;

    :not(:first-child){
        margin-top: 20px;
    }
`
const StyledListButton = styled.button`
    display: block;
    padding: 10px 20px;
    width: 160px;
    height: 50px;
    border: none;
    border-radius: 10px;
    outline: 1px solid black;
    cursor: pointer;
    background: ${({color}) => (color ? 'grey' : 'transparent')};

    :hover{
        background: grey;
        box-shadow: 10px 5px 5px black
    }
`

export const ShopsList = ({list, products, callback}) => {
    const [isActive, setIsActive] = useState(list[0])


    useEffect(() => {
        callback(products.filter(product => product.shopName === isActive))
    },[isActive])

    const onClickButton = (e) => {
        console.log(e.currentTarget.dataset.id)
        setIsActive(e.currentTarget.dataset.id)
    }

    const onChangeColor = (item) => {
        if (item === isActive){
            return 'grey'
        }
        return
    }

    return (
        <ShopsListWrap>
            <StyleTitel>Shops:</StyleTitel>
            <StyledList>
                {list.map(item => {
                    return(
                        <StyledListItem key={item}>
                            <StyledListButton type="button" data-id={item} onClick={onClickButton} color={onChangeColor(item)}>
                                {item}
                            </StyledListButton>
                        </StyledListItem>
                    )
                })}
            </StyledList>
        </ShopsListWrap>
    )
}