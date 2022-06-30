import styled from "styled-components";

const ContainerWrap = styled.div`
    padding: 30 40;
`

export const Container = ({children}) => {
    return (
        <ContainerWrap>
            {children}
        </ContainerWrap>
    )
}