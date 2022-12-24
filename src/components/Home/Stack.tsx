import { css } from '@linaria/core';
import React from 'react';
import { colors } from '../../styles/theme';
import { DesktopIcon } from '../DesktopIcon';
import { Window, WindowProps } from '../Window';

const navigationStyles = css`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  border-bottom: 2px solid ${colors.foreground};
  > p {
    font-size: 14px;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
`;

const wrapperStyles = css`
  min-height: 200px;
`;

export const Stack = (props: Omit<WindowProps, 'title' | 'children'>) => {
  const topRowYOffset = 70;
  const secondRowYOffset = 160;
  const thirdRowYOffset = 250;
  const firstColumnXOffset = 20;
  const secondColumnXOffset = 140;
  const thirdColumnXOffset = 280;

  return (
    <Window
      title="My Stack"
      width="50vw"
      maxWidth="420px"
      navigationNode={
        <div className={navigationStyles}>
          <p>7 items</p>
          <p>775K in disk</p>
          <p>4k available</p>
        </div>
      }
      {...props}
    >
      <ul className={wrapperStyles}>
        <DesktopIcon height={60} label="Typescript" name="folder" top={topRowYOffset} left={firstColumnXOffset} />
        <DesktopIcon height={60} label="React Native" name="folder" top={topRowYOffset} left={secondColumnXOffset} />
        <DesktopIcon height={60} label="React" name="folder" top={topRowYOffset} left={thirdColumnXOffset} />
        <DesktopIcon height={60} label="GraphQL" name="folder" top={secondRowYOffset} left={firstColumnXOffset} />
        <DesktopIcon height={60} label="Next" name="folder" top={secondRowYOffset} left={secondColumnXOffset} />
        <DesktopIcon height={60} label="Typescript" name="folder" top={secondRowYOffset} left={thirdColumnXOffset} />
        <DesktopIcon height={60} label="CSS" name="folder" top={thirdRowYOffset} left={firstColumnXOffset} />
        <DesktopIcon height={60} label="NX" name="folder" top={thirdRowYOffset} left={secondColumnXOffset} />
        <DesktopIcon height={60} label="Node" name="folder" top={thirdRowYOffset} left={thirdColumnXOffset} />
      </ul>
    </Window>
  );
};
