import React from 'react';
import { ElementTestID } from '../../../../const/enums';

const FilmPlayerProgress = ({progress, isPlaying}: {progress: number, isPlaying: boolean;}) => (
  <progress className="player__progress" value={isPlaying ? progress : 0} max="100" data-testid={ElementTestID.Progress}/>
);

export default React.memo(FilmPlayerProgress);
