import styled from "styled-components";
import { ProductCard } from "./cardProduct";

const ProductsListWrap = styled.div`
display: block;
margin-left: 10px;
height: 80vh;
width: 100%;
padding: 20px 40px;
border: 1px solid black;
border-radius: 10px;
overflow: auto;
`

const StyledList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-inline-start: 0;
`

const ProductsListItem = styled.li`
    display: block;
    margin-left: 25px;
    margin-bottom: 15px;
    width: 45%;
    height: 300px;
    border: 1px solid black;
    border-radius: 10px;
`

export const ProductsList = ({products, shop}) => {
    return(
        <ProductsListWrap>
            <StyledList>
                {products.map(product => 
                    <ProductsListItem key={product.productName}>
                        <ProductCard product={product} shop={shop}></ProductCard>
                    </ProductsListItem>
                )}
            </StyledList>
        </ProductsListWrap>
    )
}