import React, { useCallback } from 'react';
import { styled } from '@linaria/react';
import Draggable from 'react-draggable';
import { colors } from '../styles/theme';

type IconNames = 'folder' | 'garbage' | 'save';

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
`;

const Label = styled.div`
  background: ${colors.background};
  padding: 2px;
  text-align: center;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

type DesktopIconProps = {
  name: IconNames;
  to?: string;
  label: string;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  /** @default 80 */
  height?: number;
};

export const DesktopIcon = ({ name, to, label, height = 80, ...styleProps }: DesktopIconProps) => {
  const handleDoubleClick = useCallback(() => {
    if (to) {
      window.open(to, '_blank');
    }
  }, [to]);

  return (
    <Draggable>
      <Wrapper style={{ ...styleProps }}>
        <Button onDoubleClick={handleDoubleClick}>
          <img draggable={false} src={`/images/${name}.svg`} alt={label} height={height} />
        </Button>
        <Label>{label}</Label>
      </Wrapper>
    </Draggable>
  );
};
