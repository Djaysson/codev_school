import React from 'react';
import { Contents, Title, Paragraph, ContainerContent } from './styles';
import { FaRegDotCircle } from "react-icons/fa";

function Content() {
  return (
    <ContainerContent>
      <Contents>
        <Title> <FaRegDotCircle size={20} color="#FE6C4D" />{' '} What is it about?</Title>
        <Paragraph>

          There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration in some.
        </Paragraph>

      </Contents>
      <Contents>
        <Title> <FaRegDotCircle size={20} color="#FE6C4D" />{' '}What is it for?</Title>
        <Paragraph>

          There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration in some.
        </Paragraph>
      </Contents>
    </ContainerContent>

  );
}

export default Content;