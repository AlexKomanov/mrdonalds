import React from 'react';
import styled from 'styled-components';
import logoSvg from '../image/navbar-logo.svg';
import signinSvg from '../image/sign-in-button.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const LoginButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  color: white;
  font-size: 16px;
`;

const Navbar = () => {

    return (
        <NavBarStyled>
            <Logo>
                <ImgLogo src={logoSvg} alt={'logo'}/>
                <H1>M R D O N A L D S</H1>
            </Logo>
            <LoginButton>
                <img src={signinSvg} alt={'sign in'}/>
                <p>Login</p>
            </LoginButton>

        </NavBarStyled>
    );
};

export default Navbar;
