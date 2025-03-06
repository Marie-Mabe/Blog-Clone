'use client';

import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface MdxYouTubeProps {
  id: string;
  className?: string;
  opts?: YouTubeProps['opts'];
}

export const MdxYouTube = ({ 
  id, 
  className, 
  opts 
}: MdxYouTubeProps) => {
  const defaultOpts: YouTubeProps['opts'] = {
    height: '315',
    width: '560',
    playerVars: {
      // Paramètres supplémentaires optionnels
      autoplay: 0,
    },
    ...opts
  };

  return (
    <div className={`youtube-embed ${className || ''}`}>
      <YouTube 
        videoId={id} 
        opts={defaultOpts} 
      />
    </div>
  );
};