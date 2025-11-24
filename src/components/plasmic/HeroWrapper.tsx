import React from 'react';
import '@lit-labs/react';
import { Hero as LitHero } from '../Hero';
import { createComponent } from '@lit/react';

// Create React wrapper for Lit component
export const Hero = createComponent({
  tagName: 'app-hero',
  elementClass: LitHero,
  react: React,
});

export interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaUrl?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

export const HeroWrapper: React.FC<HeroProps> = ({
  title = 'Welcome to Our Site',
  subtitle = 'Build amazing experiences with Astro and Plasmic',
  ctaText = 'Get Started',
  ctaUrl = '#',
  backgroundImage = '',
  backgroundColor = '#f5f5f5',
  textColor = '#333333',
  className,
}) => {
  return (
    <Hero
      title={title}
      subtitle={subtitle}
      ctaText={ctaText}
      ctaUrl={ctaUrl}
      backgroundImage={backgroundImage}
      backgroundColor={backgroundColor}
      textColor={textColor}
      className={className}
    />
  );
};
