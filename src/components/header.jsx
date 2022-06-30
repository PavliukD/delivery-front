import { NavLink } from "react-router-dom";
import styled from "styled-components"

const NavList = styled.div`
    display: flex;
`

const StyledNavLink = styled(NavLink)`
font-size: 20px;
`

export const Header = () => {
    return(
        <NavList>
                <NavLink to='/'>Shop</NavLink>
                <NavLink to='/cart'>Shopping Cart</NavLink>
        </NavList>
    )
}