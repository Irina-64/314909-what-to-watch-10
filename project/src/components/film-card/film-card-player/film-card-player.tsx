import React from 'react';
import useVideoPlayer from '../../../../hooks/use-video-player/use-video-player';
import Film from '../../../../types/film';
import VideoElement from '../../../video-element/video-element';

const FilmCardPlayer = ({movie, isPlaying = false, isPreview = true}: {movie: Film, isPlaying: boolean, isPreview: boolean}) => {
  const {videoRef} = useVideoPlayer(isPreview);

  return <VideoElement ref={videoRef} {...{movie, isPlaying, isPreview}}/>;
};

export default React.memo(FilmCardPlayer);
