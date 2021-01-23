import React from 'react';
import { Headers, NavItem, ButtonApp } from "./styles";
import logoImg from '../../image/logo.png';

function Header() {
  return (
    <Headers>
      <img src={logoImg} alt="Logo" />
      <NavItem>
        <a href="What is Coding?">What is Coding</a>
        <a href="Pricing">Pricing</a>
        <a href="About Us">About Us</a>
        <a href="Faq">FAQ</a>

        <ButtonApp>Get the APP</ButtonApp>
      </NavItem>
    </Headers>
  );
}

export default Header;