import React from 'react';
import { styled } from '@linaria/react';
import {css} from '@linaria/core';
import { Navbar } from './Navbar';
import { colors } from '../styles/theme';

// TODO: decide on sizing.. based on children? or random
const Wrapper = styled.div`
  border: 3px solid ${colors.foreground};
  box-shadow: 2px 2px 0 0px ${colors.foreground};
  background-color: ${colors.background};
  height: 200px;
  width: 200px;
`;

const roundedBorderStyle = css`
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`

type WindowProps = {
  roundedBorder?: boolean;
  title: string;
  children: React.ReactNode;
  // draggable?: boolean;
  // minWidth?: number;
  // minHeight?: number;
}

// TODO: customize scrollbar
export const Window = ({children, title, roundedBorder}: WindowProps) =>  (
    <Wrapper className={roundedBorder ? roundedBorderStyle : undefined}>
      <Navbar title={title} />
      {children}
    </Wrapper>
  );

