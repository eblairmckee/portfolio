import React from 'react';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { colors, navbarHeight } from '../styles/theme';

export type NavItemLinkProps = {
  name: string;
  to: string;
};

export type NavbarProps = {
  links?: NavItemLinkProps[];
  title?: string; 
}

const Wrapper = styled.div`
  background-color: ${colors.background};
  display: flex;
  align-items: center;
  gap: 25px;
  height: ${navbarHeight}px;
  padding: 0 40px;
  border-bottom: 2px solid ${colors.foreground};
`;

const Heading = styled.h3`
  font-size: 24px;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${colors.foreground};
`;

const centerTitleStyles = css`
  justify-content: center;
`

// TODO: draggable header styles
// TODO: show current time
export const Navbar: React.FC<NavbarProps> = ({links, title}) => {
  const renderLinks = () =>
    links?.map(({ name, to }, index) => (
      <Link href={to} rel="noreferrer" target="_blank">
        <Heading key={index}>{name}</Heading>
      </Link>
    ));
  return (
    <Wrapper className={!links ? centerTitleStyles : undefined}>
      {title ? <Heading>title</Heading> : null}
      {links ? renderLinks() : null}
    </Wrapper>
  );
};

