import React from 'react';
import { ContainerCoding, TitleCoding, ParagraphCoding } from './styles';
import backgroundCoding from '../../../image/backgroundCoding.png';
import LinkIcons from '../../linkIcons/LinkIcons';
import About from '../about/About';
function Coding() {
  return (
    <React.Fragment>
      <ContainerCoding>
        <img src={backgroundCoding} alt="plano de fundo" />
        <TitleCoding>What is Coding?</TitleCoding>
        <ParagraphCoding>
          Coding is the act and the result of coding.
          This verb, on the other hand, can refer to the
          modification of the expression of a message or
          the registration of something through the rules
          of a code. It can also refer to the formation of
          a body of laws that is constituted as a system.
      </ParagraphCoding>
        <ParagraphCoding>
          To understand what coding is, therefore,
          it is necessary to first make clear what
          a code is. It is a combination of symbols
          (numbers, letters, etc.) that have a certain
          value in the context of a system or that allows
          the reformulation and understanding of a secret
          message. The codes are also compilations of laws.
      </ParagraphCoding>
      </ContainerCoding>
      <LinkIcons />
      <About />
    </React.Fragment>

  );
}

export default Coding;