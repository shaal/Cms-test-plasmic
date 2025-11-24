import React from 'react';
import '@lit-labs/react';
import { Header as LitHeader } from '../Header';
import { createComponent } from '@lit/react';

// Create React wrapper for Lit component
export const Header = createComponent({
  tagName: 'app-header',
  elementClass: LitHeader,
  react: React,
});

export interface HeaderProps {
  logo?: string;
  menuItems?: string[];
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

export const HeaderWrapper: React.FC<HeaderProps> = ({
  logo = 'Logo',
  menuItems = ['Home', 'About', 'Contact'],
  backgroundColor = '#ffffff',
  textColor = '#333333',
  className,
}) => {
  return (
    <Header
      logo={logo}
      menuItems={menuItems}
      backgroundColor={backgroundColor}
      textColor={textColor}
      className={className}
    />
  );
};
