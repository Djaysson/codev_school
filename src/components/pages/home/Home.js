import React from 'react';
import { Container, ButtonAp, ContainerHome } from "./stytes";
import backgroudImg from '../../../image/background.png';
import Content from '../content/Content';


function Home() {
  return (

    <Container>
      <img src={backgroudImg} alt="background" />
      <ContainerHome>
        <h1>Become a</h1>
        <h1>Expert</h1>
        <h2>Developer</h2>
        <p>
          Join our Experts School for families
          to learn everything about staries and how
          to tell them. For free in aur app!
      </p>
        <ButtonAp>Enroll on the Free course</ButtonAp>
      </ContainerHome>

      <Content />
    </Container>

  );
}

export default Home;