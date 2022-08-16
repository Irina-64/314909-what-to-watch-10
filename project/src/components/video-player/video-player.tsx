import { useEffect, useRef, useState } from 'react';
import Film from '../../types/film';

const VIDEO_LOADED_DATA = 'loaded video';

type FilmPlayerProps = {
  movie: Film;
  isPlaying: boolean;
  isMuted?: boolean
  isPreview?: boolean
}

const VideoPlayer = ({ movie, isPlaying, isMuted = false, isPreview = false }: FilmPlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener(VIDEO_LOADED_DATA, () => setIsLoading(!isLoading));
    videoRef.current.muted = isMuted;

    if (isPlaying && !isLoading && isPreview) {
      setTimeout(() => videoRef.current?.play(), 1000);
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.load();
  }, [isLoading, isMuted, isPlaying, isPreview, movie]);

  return (
    <video
      src={isPreview ? movie.previewVideoLink : movie.videoLink}
      ref={videoRef} className="player__video" poster={movie.previewImage}
    />
  );
};

export default VideoPlayer;