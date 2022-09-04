import React from 'react';
import Film from '../../types/film';
import { ElementTestID } from '../../const/enums';

const VIDEO_PLAYER_DISPLAY_NAME = 'Video Element';

type VideoItemProps = {
  movie: Film;
  isPreview?: boolean;
  handleProgressUpdate?: () => void;
}

const VideoItem = React.forwardRef<HTMLVideoElement, VideoItemProps>(
  ({
    movie: {
      previewImage,
      previewVideoLink,
      videoLink
    },
    isPreview,
    handleProgressUpdate
  },
  ref) => (
    <video
      src={isPreview
        ? previewVideoLink
        : videoLink}
      ref={ref}
      className="player__video"
      poster={previewImage}
      onTimeUpdate={handleProgressUpdate}
      data-testid={ElementTestID.Video}
    />
  )
);

VideoItem.displayName = VIDEO_PLAYER_DISPLAY_NAME;

export default React.memo(VideoItem);
