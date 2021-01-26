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
          Join our Codev School Specialists in
          software development to stay on top of
          all the technologies of the moment and
          learn everything about the web, mobile
          world.
      </p>
        <ButtonAp>Enroll on the Free course</ButtonAp>
      </ContainerHome>

      <Content />
    </Container>

  );
}

export default Home;