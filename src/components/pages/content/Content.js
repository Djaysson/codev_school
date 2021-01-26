import React from 'react';
import { Contents, Title, Paragraph, ContainerContent } from './styles';
import { FaRegDotCircle } from "react-icons/fa";

function Content() {
  return (
    <ContainerContent>
      <Contents>
        <Title> <FaRegDotCircle size={20} color="#FE6C4D" />{' '} What the school is committed to doing?</Title>
        <Paragraph>
          Codev is committed to teaching and
          creating and developing software for
          the real world, always with the objective
          of helping its students to learn efficiently.
        </Paragraph>

      </Contents>
      <Contents>
        <Title> <FaRegDotCircle size={20} color="#FE6C4D" />{' '}What courses are available?</Title>
        <Paragraph>
          Front End development course,
          Backend development course,
          Mobile development course,
          full stack development course.
        </Paragraph>
      </Contents>
    </ContainerContent>

  );
}

export default Content;