import React from 'react';
import { styled } from '@linaria/react';
import { navbarHeight } from '../styles/theme';

type DropdownProps = {
  children: React.ReactNode;
  content: React.ReactNode;
};

const Wrapper = styled.div`
  position: relative;
`;

const Subject = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Content = styled.div`
  position: absolute;
  top: ${navbarHeight};
`;

export const Dropdown = ({ children, content }: DropdownProps) => (
  <Wrapper>
    <Subject>{children}</Subject>
    <Content>{content}</Content>
  </Wrapper>
);
