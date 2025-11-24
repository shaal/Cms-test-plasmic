import React from 'react';
import '@lit-labs/react';
import { Footer as LitFooter } from '../Footer';
import { createComponent } from '@lit/react';

// Create React wrapper for Lit component
export const Footer = createComponent({
  tagName: 'app-footer',
  elementClass: LitFooter,
  react: React,
});

export interface FooterProps {
  copyright?: string;
  socialLinks?: Array<{name: string, url: string}>;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

export const FooterWrapper: React.FC<FooterProps> = ({
  copyright = '© 2024 Your Company',
  socialLinks = [],
  backgroundColor = '#333333',
  textColor = '#ffffff',
  className,
}) => {
  return (
    <Footer
      copyright={copyright}
      socialLinks={socialLinks}
      backgroundColor={backgroundColor}
      textColor={textColor}
      className={className}
    />
  );
};
