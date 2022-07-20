import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    height: 10vh;
    left: 0;
    right: 0;
    border: 1px solid;
    padding: 0 4rem;
    background-color: beige;
    z-index: 1;
`;

const HeaderMenu = styled.ul`
    display: flex;
    align-items: center;

    li {
        padding: 25px;
    }
`;

const itemList = [
    { id: 0, Title: "About", path: "/about" },
    { id: 1, Title: "MyInfo", path: "/myinfo" },
    { id: 2, Title: "Story", path: "/story" },
];

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <Link to="/">Header Area</Link>
            </div>

            <HeaderMenu>
                {itemList.map((info) => {
                    return (
                        <li key={info.id}>
                            <Link to={info.path}>{info.Title}</Link>
                        </li>
                    );
                })}
            </HeaderMenu>
        </HeaderContainer>
    );
};

export default Header;
