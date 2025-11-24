// Plasmic component exports
import { HeaderWrapper } from '../components/plasmic/HeaderWrapper';
import { FooterWrapper } from '../components/plasmic/FooterWrapper';
import { HeroWrapper } from '../components/plasmic/HeroWrapper';
import { VideoPlayerWrapper } from '../components/plasmic/VideoPlayerWrapper';

// Export wrappers for use in pages
export { HeaderWrapper, FooterWrapper, HeroWrapper, VideoPlayerWrapper };

// This function registers components with Plasmic Host
// It will be called from the plasmic-host page
export function registerComponents(registerComponent: any) {
  // Register Header component
  registerComponent(HeaderWrapper, {
    name: 'Header',
    props: {
      logo: {
        type: 'string',
        defaultValue: 'Logo',
        description: 'The logo text or brand name',
      },
      menuItems: {
        type: 'array',
        defaultValue: ['Home', 'About', 'Contact'],
        description: 'Array of menu item labels',
      },
      backgroundColor: {
        type: 'string',
        defaultValue: '#ffffff',
        description: 'Background color of the header',
      },
      textColor: {
        type: 'string',
        defaultValue: '#333333',
        description: 'Text color for the header',
      },
    },
    importPath: './components/plasmic/HeaderWrapper',
  });

  // Register Footer component
  registerComponent(FooterWrapper, {
    name: 'Footer',
    props: {
      copyright: {
        type: 'string',
        defaultValue: '© 2024 Your Company',
        description: 'Copyright text',
      },
      socialLinks: {
        type: 'array',
        defaultValue: [],
        description: 'Array of social media links with name and url',
      },
      backgroundColor: {
        type: 'string',
        defaultValue: '#333333',
        description: 'Background color of the footer',
      },
      textColor: {
        type: 'string',
        defaultValue: '#ffffff',
        description: 'Text color for the footer',
      },
    },
    importPath: './components/plasmic/FooterWrapper',
  });

  // Register Hero component
  registerComponent(HeroWrapper, {
    name: 'Hero',
    props: {
      title: {
        type: 'string',
        defaultValue: 'Welcome to Our Site',
        description: 'Main heading text',
      },
      subtitle: {
        type: 'string',
        defaultValue: 'Build amazing experiences with Astro and Plasmic',
        description: 'Subtitle or description text',
      },
      ctaText: {
        type: 'string',
        defaultValue: 'Get Started',
        description: 'Call-to-action button text',
      },
      ctaUrl: {
        type: 'string',
        defaultValue: '#',
        description: 'Call-to-action button URL',
      },
      backgroundImage: {
        type: 'string',
        defaultValue: '',
        description: 'URL of background image (optional)',
      },
      backgroundColor: {
        type: 'string',
        defaultValue: '#f5f5f5',
        description: 'Background color (used if no image)',
      },
      textColor: {
        type: 'string',
        defaultValue: '#333333',
        description: 'Text color',
      },
    },
    importPath: './components/plasmic/HeroWrapper',
  });

  // Register Video Player component
  registerComponent(VideoPlayerWrapper, {
    name: 'VideoPlayer',
    props: {
      videoUrl: {
        type: 'string',
        defaultValue: '',
        description: 'URL of the video file',
      },
      posterUrl: {
        type: 'string',
        defaultValue: '',
        description: 'URL of the poster image',
      },
      title: {
        type: 'string',
        defaultValue: '',
        description: 'Video title (optional)',
      },
      controls: {
        type: 'boolean',
        defaultValue: true,
        description: 'Show video controls',
      },
      autoplay: {
        type: 'boolean',
        defaultValue: false,
        description: 'Autoplay video',
      },
      loop: {
        type: 'boolean',
        defaultValue: false,
        description: 'Loop video',
      },
      width: {
        type: 'string',
        defaultValue: '100%',
        description: 'Video width',
      },
      maxWidth: {
        type: 'string',
        defaultValue: '800px',
        description: 'Maximum width of video container',
      },
    },
    importPath: './components/plasmic/VideoPlayerWrapper',
  });
}
