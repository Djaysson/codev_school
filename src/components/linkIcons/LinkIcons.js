import React from 'react';
import { FaLaptopCode, FaCode, FaCentercode, FaQrcode, FaCodepen } from 'react-icons/fa';
import { ContainerIcons } from './styles';

function LinkIcons() {
  return (
    <ContainerIcons>
      <FaLaptopCode size={60} color="#FE6C4D" />
      <FaCentercode size={60} color="#FE6C4D" />
      <FaCode size={60} color="#FFF" />
      <FaQrcode size={60} color="#FE6C4D" />
      <FaCodepen size={60} color="#FE6C4D" />
    </ContainerIcons>
  );
}

export default LinkIcons;