import { css } from '@linaria/core';
import { colors } from './theme';

const { background, foreground } = colors;

export const scrollbarStyles = css`
  &::-webkit-scrollbar-button:horizontal:decrement {
    background: linear-gradient(
          90deg,
          ${foreground} 9.090909091%,
          ${background} 0,
          ${background} 90.909090909%,
          transparent 0
        )
        49% 49%/11px 1px no-repeat,
      linear-gradient(
          90deg,
          transparent 9.090909091%,
          ${foreground} 0,
          ${foreground} 18.181818182%,
          ${background} 0,
          ${background} 90.909090909%,
          transparent 0
        )
        49% 49%/11px 3px no-repeat,
      linear-gradient(
          90deg,
          transparent 18.181818182%,
          ${foreground} 0,
          ${foreground} 27.272727273%,
          ${background} 0,
          ${background} 90.909090909%,
          ${foreground} 0,
          ${foreground}
        )
        49% 49%/11px 5px no-repeat,
      linear-gradient(
          90deg,
          transparent 27.272727273%,
          ${foreground} 0,
          ${foreground} 36.363636364%,
          ${background} 0,
          ${background} 54.545454545%,
          ${foreground} 0,
          ${foreground}
        )
        49% 49%/11px 7px no-repeat,
      linear-gradient(
          90deg,
          transparent 36.363636364%,
          ${foreground} 0,
          ${foreground} 45.454545455%,
          ${background} 0,
          ${background} 54.545454545%,
          ${foreground} 0,
          ${foreground} 63.636363636%,
          transparent 0
        )
        49% 49%/11px 9px no-repeat,
      linear-gradient(90deg, transparent 45.454545455%, ${foreground} 0, ${foreground} 63.636363636%, transparent 0) 49%
        49%/11px 11px no-repeat,
      linear-gradient(90deg, transparent 54.545454545%, ${foreground} 0, ${foreground} 63.636363636%, transparent 0) 49%
        49%/11px 13px no-repeat,
      ${background};
  }
  &::-webkit-scrollbar-button:horizontal:increment {
    background: linear-gradient(
          270deg,
          ${foreground} 9.090909091%,
          ${background} 0,
          ${background} 90.909090909%,
          transparent 0
        )
        51% 49%/11px 1px no-repeat,
      linear-gradient(
          270deg,
          transparent 9.090909091%,
          ${foreground} 0,
          ${foreground} 18.181818182%,
          ${background} 0,
          ${background} 90.909090909%,
          transparent 0
        )
        51% 49%/11px 3px no-repeat,
      linear-gradient(
          270deg,
          transparent 18.181818182%,
          ${foreground} 0,
          ${foreground} 27.272727273%,
          ${background} 0,
          ${background} 90.909090909%,
          ${foreground} 0,
          ${foreground}
        )
        51% 49%/11px 5px no-repeat,
      linear-gradient(
          270deg,
          transparent 27.272727273%,
          ${foreground} 0,
          ${foreground} 36.363636364%,
          ${background} 0,
          ${background} 54.545454545%,
          ${foreground} 0,
          ${foreground}
        )
        51% 49%/11px 7px no-repeat,
      linear-gradient(
          270deg,
          transparent 36.363636364%,
          ${foreground} 0,
          ${foreground} 45.454545455%,
          ${background} 0,
          ${background} 54.545454545%,
          ${foreground} 0,
          ${foreground} 63.636363636%,
          transparent 0
        )
        51% 49%/11px 9px no-repeat,
      linear-gradient(270deg, transparent 45.454545455%, ${foreground} 0, ${foreground} 63.636363636%, transparent 0)
        51% 49%/11px 11px no-repeat,
      linear-gradient(270deg, transparent 54.545454545%, ${foreground} 0, ${foreground} 63.636363636%, transparent 0)
        51% 49%/11px 13px no-repeat,
      ${background};
    width: 15px;
    border-right: none;
  }
  &::-webkit-scrollbar-track {
    background: radial-gradient(circle at 0.5px 0.5px, ${foreground} 0.5px, transparent 0) 0/4px 2px repeat,
      radial-gradient(circle at 2.5px 1.5px, ${foreground} 0.5px, transparent 0) 0/4px 2px repeat, ${background};
  }
  &::-webkit-scrollbar-track:vertical {
    border-left: 1px solid ${foreground};
    border-right: 1px solid ${foreground};
  }
  &::-webkit-scrollbar-track:horizontal {
    border-top: 1px solid ${foreground};
    border-bottom: 1px solid ${foreground};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${background};
    width: 14px;
    border: 1px solid ${foreground};
  }
  &::-webkit-scrollbar-thumb:vertical {
    border-left: 2px solid ${foreground};
    border-right: 2px solid ${foreground};
  }
  &::-webkit-scrollbar-thumb:horizontal {
    border-top: 2px solid ${foreground};
    border-bottom: 2px solid ${foreground};
  }
  &::-webkit-scrollbar-corner {
    border-top: 1px solid ${foreground};
    border-left: 1px solid ${foreground};
  }
`;
