import React from 'react';
import Film from '../../types/film';

const VIDEO_PLAYER_DISPLAY_NAME = 'Video Element';

type VideoPlayerProps = {
  movie: Film;
  isPreview?: boolean;
  handleProgressUpdate?: () => void;
}

const VideoPlayer = React.forwardRef<HTMLVideoElement, VideoPlayerProps>(
  (props, ref) => (
    <video
      src={props.isPreview
        ? props.movie.previewVideoLink
        : props.movie.videoLink}
      ref={ref}
      className="player__video"
      poster={props.movie.previewImage}
      onTimeUpdate={props.handleProgressUpdate}
    />
  )
);

VideoPlayer.displayName = VIDEO_PLAYER_DISPLAY_NAME;

export default VideoPlayer;
