import { initPlasmicLoader, PlasmicRootProvider, PlasmicComponent } from "@plasmicapp/loader-react";
import { HeaderWrapper } from './plasmic/HeaderWrapper.jsx';
import { FooterWrapper } from './plasmic/FooterWrapper.jsx';
import { HeroWrapper } from './plasmic/HeroWrapper.jsx';
import { VideoPlayerWrapper } from './plasmic/VideoPlayerWrapper.jsx';

// Initialize Plasmic loader
const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "wYYgvLaUtsMjC29YyzEHqw",
      token: "pxFtGLabN1cBPQyz5qmP1TbtGWYyhchcRdIV5n4i0p7wzEPY5mHRAPJCHNh7vcLv3RIfso9Tkt77lwArgvA",
    },
  ],
  preview: false,
});

// Register code components
PLASMIC.registerComponent(HeaderWrapper, {
  name: 'Header',
  props: {
    logo: 'string',
    menuItems: 'array',
    backgroundColor: 'string',
    textColor: 'string',
  },
});

PLASMIC.registerComponent(FooterWrapper, {
  name: 'Footer',
  props: {
    copyright: 'string',
    socialLinks: 'array',
    backgroundColor: 'string',
    textColor: 'string',
  },
});

PLASMIC.registerComponent(HeroWrapper, {
  name: 'Hero',
  props: {
    title: 'string',
    subtitle: 'string',
    ctaText: 'string',
    ctaUrl: 'string',
    backgroundImage: 'string',
    backgroundColor: 'string',
    textColor: 'string',
  },
});

PLASMIC.registerComponent(VideoPlayerWrapper, {
  name: 'VideoPlayer',
  props: {
    videoUrl: 'string',
    posterUrl: 'string',
    title: 'string',
    controls: 'boolean',
    autoplay: 'boolean',
    loop: 'boolean',
    width: 'string',
    maxWidth: 'string',
  },
});

export default function PlasmicPage({ component }) {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component={component} />
    </PlasmicRootProvider>
  );
}
