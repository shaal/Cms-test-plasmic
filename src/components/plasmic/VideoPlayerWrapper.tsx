import React from 'react';
import '@lit-labs/react';
import { VideoPlayer as LitVideoPlayer } from '../VideoPlayer';
import { createComponent } from '@lit/react';

// Create React wrapper for Lit component
export const VideoPlayer = createComponent({
  tagName: 'app-video-player',
  elementClass: LitVideoPlayer,
  react: React,
});

export interface VideoPlayerProps {
  videoUrl?: string;
  posterUrl?: string;
  title?: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  width?: string;
  maxWidth?: string;
  className?: string;
}

export const VideoPlayerWrapper: React.FC<VideoPlayerProps> = ({
  videoUrl = '',
  posterUrl = '',
  title = '',
  controls = true,
  autoplay = false,
  loop = false,
  width = '100%',
  maxWidth = '800px',
  className,
}) => {
  return (
    <VideoPlayer
      videoUrl={videoUrl}
      posterUrl={posterUrl}
      title={title}
      controls={controls}
      autoplay={autoplay}
      loop={loop}
      width={width}
      maxWidth={maxWidth}
      className={className}
    />
  );
};
