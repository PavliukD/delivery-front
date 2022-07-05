import styled from "styled-components";

const ContainerWrap = styled.div`
    display: flex;
    margin: auto;
    padding: 40px 20px;
    width: 1200px;
    height: 100vh;
`

export const Container = ({children}) => {
    return (
        <ContainerWrap>
            {children}
        </ContainerWrap>
    )
}