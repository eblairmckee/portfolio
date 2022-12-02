import React, { MouseEventHandler, useCallback } from 'react';
import { styled } from '@linaria/react';
import Draggable from 'react-draggable';
import { Link } from './Link';
import { colors } from '../styles/theme';

type IconNames = 'folder' | 'garbage' | 'save';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
`

const Label = styled.div`
  background: ${colors.background};
  padding: 5px;
  text-align: center;
`

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`

type DesktopIconProps = {
  name: IconNames;
  to: string;
  label: string;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
};

export const DesktopIcon = ({name, to, label, ...styleProps}: DesktopIconProps) => {
  const handleDoubleClick = useCallback(
    () => {
      window.open(
        to,
        '_blank'
      );
    },
    [],
  )

  return (
    <Draggable>
      <Wrapper style={{ ...styleProps }}>
        <Button onDoubleClick={handleDoubleClick}>
          <img
            draggable={false}
            src={`/images/${name}.svg`}
            alt={label}
            height="80px"
          />
        </Button>
        <Label>{label}</Label>
      </Wrapper>
    </Draggable>
  );
  
};
