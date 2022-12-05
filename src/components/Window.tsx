import React, { useCallback, useState } from 'react';
import { styled } from '@linaria/react';
import { css, cx } from '@linaria/core';
import Draggable from 'react-draggable';
import { Navbar } from './Navbar';
import { colors, roundedBorder as roundedBorderStyle } from '../styles/theme';
import { scrollbarStyles } from '../styles/scrollbar';

// TODO: decide on sizing.. based on children? or random
const Wrapper = styled.div`
  border: 3px solid ${colors.foreground};
  box-shadow: 2px 2px 0 0px ${colors.foreground};
  background-color: ${colors.background};
  height: 200px;
  width: 200px;
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
`;

const roundedBorderClass = css`
  border-radius: ${roundedBorderStyle}px;
`;

const Content = styled.div`
  padding: 20px;
`;

type WindowProps = {
  roundedBorder?: boolean;
  title: string;
  children: React.ReactNode;
  /** When true navbar gets active treatment */
  isDragging?: boolean;
  /** @default min-content */
  height?: number | string;
  /** @default min-content */
  width?: number | string;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  maxHeight?: number | string;
};

export const Window = ({
  children,
  title,
  roundedBorder,
  height = 'min-content',
  width = 'min-content',
  isDragging: isDraggingProp = false,
  ...styleProps
}: WindowProps) => {
  const [isDragging, setIsDragging] = useState(isDraggingProp);

  const onStartDrag = useCallback(() => {
    setIsDragging(true);
  }, []);
  const onStopDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <Draggable onStart={onStartDrag} onStop={onStopDrag}>
      <Wrapper
        className={cx(roundedBorder ? roundedBorderClass : undefined, scrollbarStyles)}
        style={{
          height,
          width,
          ...styleProps,
        }}
      >
        <Navbar title={title} isActive={isDragging} />
        <Content style={{ padding: '10px 10px 10px 20px' }}>{children}</Content>
      </Wrapper>
    </Draggable>
  );
};
