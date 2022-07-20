import styled from "@emotion/styled";
import React from "react";

// import FlexMixin from "../styles/mixin";

const HeaderContainer = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10vh;
    border: 1px solid;
    background-color: beige;
    z-index: 1;
`;

const Header = () => {
    return <HeaderContainer>Header Area</HeaderContainer>;
};

export default Header;
