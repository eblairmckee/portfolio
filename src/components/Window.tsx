import React, { useCallback } from 'react';
import { styled } from '@linaria/react';
import { css, cx } from '@linaria/core';
import Draggable from 'react-draggable';
import { Navbar, navbarClassName } from './Navbar';
import { colors, roundedBorder as roundedBorderStyle } from '../styles/theme';
// TODO: figure out why this doesn't work
// import { scrollbarStyles } from '../styles/scrollbar';

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
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`;

export type WindowProps = {
  roundedBorder?: boolean;
  title: string;
  children: React.ReactNode;
  /** @default min-content */
  height?: number | string;
  /** @default min-content */
  width?: number | string;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  /** @default  */
  zIndex?: number;
  onDrag?: () => void;
  /** When Window is actively being dragged, has focus, or was the last window to have focus  */
  isActive?: boolean;
  /** Callback fired when window attains focus */
  onFocus?: () => void;
};

// TODO: scroll doesn't work on mobile
export const Window = ({
  children,
  title,
  roundedBorder,
  height = 'min-content',
  width = 'min-content',
  onDrag,
  isActive,
  onFocus,
  ...styleProps
}: WindowProps) => {
  const onStartDrag = useCallback(() => {
    onDrag?.();
  }, [onDrag]);

  const handleContentClick = useCallback(() => {
    onFocus?.();
  }, [onFocus]);

  return (
    <Draggable onStart={onStartDrag} handle={`.${navbarClassName}`}>
      <Wrapper
        className={cx(roundedBorder ? roundedBorderClass : undefined)}
        style={{
          height,
          width,
          ...styleProps,
        }}
      >
        <Navbar title={title} isActive={isActive} />
        <Content style={{ padding: '10px 10px 10px 20px' }} onClick={handleContentClick}>
          {children}
        </Content>
      </Wrapper>
    </Draggable>
  );
};
