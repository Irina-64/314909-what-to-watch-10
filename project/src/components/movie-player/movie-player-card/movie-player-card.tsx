import { useEffect, useRef, useState } from 'react';
import Film from '../../../types/film';
import VideoPlayer from '../../video-player/video-player';

const VIDEO_LOADED_DATA = 'loaded data';

const MoviePlayerCard = ({ movie, isPlaying = false, isPreview = true }: { movie: Film, isPlaying: boolean, isPreview: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener(VIDEO_LOADED_DATA, () => setIsLoading(!isLoading));
    videoRef.current.muted = true;

    if (isPlaying && !isLoading) {
      setTimeout(() => videoRef.current?.play(), 1000);
      return;
    }

    videoRef.current.pause();
  }, [isLoading, isPlaying]);

  return <VideoPlayer ref={videoRef} {...{ movie, isPlaying, isPreview }} />;
};

export default MoviePlayerCard;
