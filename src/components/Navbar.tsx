import React from 'react';
import { styled } from '@linaria/react';
import { css, cx } from '@linaria/core';
import { colors, navbarHeight } from '../styles/theme';
import { Link } from './Link';

export type NavItemLinkProps = {
  name: string;
  to: string;
};

export type NavbarProps = {
  links?: NavItemLinkProps[];
  title?: string;
  /** Surfaces a special treatment when true */
  isActive?: boolean;
};

const Wrapper = styled.div`
  background-color: ${colors.background};
  display: flex;
  align-items: center;
  gap: 25px;
  height: ${navbarHeight}px;
  padding: 0 40px;
  border-bottom: 2px solid ${colors.foreground};
  cursor: pointer;
  min-width: 0;
`;

const Heading = styled.h3`
  font-size: 24px;
  background: ${colors.background}
  padding: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const centerTitleStyles = css`
  justify-content: center;
`;

// TODO: fix this so the background position is right
const activeStyles = css`
  background-image: linear-gradient(${colors.foreground} 2px, transparent 1px);
  background-size: auto 5px;
`;

// TODO: draggable header styles
// TODO: show current time
export const Navbar: React.FC<NavbarProps> = ({ links, title, isActive }) => {
  const renderLinks = () =>
    links?.map(({ name, to }, index) => (
      <Link href={to} rel="noreferrer">
        <Heading key={index}>{name}</Heading>
      </Link>
    ));

  return (
    <Wrapper className={cx(!links ? centerTitleStyles : undefined, isActive ? activeStyles : undefined)}>
      {title ? <Heading>{title}</Heading> : null}
      {links ? renderLinks() : null}
    </Wrapper>
  );
};
