/** @jsxImportSource react */
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

export const FooterWrapper = ({
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
