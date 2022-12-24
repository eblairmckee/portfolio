import React, { useMemo } from 'react';
import { styled } from '@linaria/react';
import { css, cx } from '@linaria/core';
import { colors, navbarHeight } from '../styles/theme';
import { Link } from './Link';

export const navbarClassName = 'navbar';

export type NavItemLinkProps = {
  name: string;
  to: string;
};

export type NavbarProps = {
  links?: NavItemLinkProps[];
  title?: string;
  /** Surfaces a special treatment when true */
  isActive?: boolean;
  children?: React.ReactNode;
};

const Wrapper = styled.div`
  background-color: ${colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${navbarHeight}px;
  padding: 0 40px;
  border-bottom: 2px solid ${colors.foreground};
  cursor: pointer;
  min-width: 0;
  position: sticky;
  top: 0;
  left: 0;
`;

const Heading = styled.h3`
  font-size: 20px;
  background: ${colors.background}
  padding: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media(max-width: 600px) {
    font-size: 14px;
  }
`;

// TODO: fix this so the background position is right
const activeStyles = css`
  background-image: linear-gradient(${colors.foreground} 2px, transparent 1px);
  background-size: auto 5px;
`;

const linkWrapperStyles = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const linkStyles = css`
  display: flex;
  gap: 25px;
`;

export const Navbar: React.FC<NavbarProps> = ({ links, title, isActive, children }) => {
  const renderedLinks = useMemo(
    () => (
      <div className={linkStyles}>
        {links?.map(({ name, to }, index) => (
          <Link href={to} rel="noreferrer">
            <Heading key={index}>{name}</Heading>
          </Link>
        ))}
      </div>
    ),
    [links]
  );

  const renderedClock = useMemo(() => {
    const date = new Date();
    const hours = date.getHours();
    const convertedHours = hours > 12 ? hours - 12 : hours;
    const isPM = hours > 12;
    const minutes = date.getMinutes();
    return (
      <Heading>
        {date.toDateString()} {convertedHours}:{minutes} {isPM ? 'PM' : 'AM'}
      </Heading>
    );
  }, []);

  return (
    <Wrapper className={cx(navbarClassName, isActive ? activeStyles : undefined)}>
      {title ? <Heading>{title}</Heading> : null}
      {links ? (
        <div className={linkWrapperStyles}>
          {links ? renderedLinks : null}
          {links ? renderedClock : null}
        </div>
      ) : null}
      {children}
    </Wrapper>
  );
};
