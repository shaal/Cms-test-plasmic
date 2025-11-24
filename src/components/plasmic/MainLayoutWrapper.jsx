// MainLayout Wrapper - Provides consistent layout with centralized menu
// This component wraps your Header and Footer, creating a unified layout
// that can be reused across all Plasmic pages

import React, { useEffect, useRef } from 'react';
import '../Header.ts';
import '../Footer.ts';

export function MainLayoutWrapper({
  logo = 'MyBrand',
  menuItems = ['Home', 'About', 'Services', 'Contact'],
  headerBackgroundColor = '#4a5568',
  headerTextColor = '#ffffff',
  footerCopyright = '© 2024 MyBrand. All rights reserved.',
  footerBackgroundColor = '#2d3748',
  footerTextColor = '#ffffff',
  children,
}) {
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Create header element
    const header = document.createElement('app-header');
    header.setAttribute('logo', logo);
    header.setAttribute('backgroundColor', headerBackgroundColor);
    header.setAttribute('textColor', headerTextColor);
    // Set menu items as a property (arrays can't be set via attributes)
    header.menuItems = menuItems;

    if (headerRef.current) {
      headerRef.current.innerHTML = '';
      headerRef.current.appendChild(header);
    }

    // Create footer element
    const footer = document.createElement('app-footer');
    footer.setAttribute('copyright', footerCopyright);
    footer.setAttribute('backgroundColor', footerBackgroundColor);
    footer.setAttribute('textColor', footerTextColor);

    if (footerRef.current) {
      footerRef.current.innerHTML = '';
      footerRef.current.appendChild(footer);
    }

    return () => {
      if (headerRef.current) headerRef.current.innerHTML = '';
      if (footerRef.current) footerRef.current.innerHTML = '';
    };
  }, [logo, menuItems, headerBackgroundColor, headerTextColor, footerCopyright, footerBackgroundColor, footerTextColor]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div ref={headerRef}></div>
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <div ref={footerRef}></div>
    </div>
  );
}
