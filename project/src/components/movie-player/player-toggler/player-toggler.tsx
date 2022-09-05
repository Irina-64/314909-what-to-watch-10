import React from 'react';
import { ComponentText } from '../../../const/enums';

const FilmPlayerToggler = ({progress, isPlaying}: {progress: number, isPlaying: boolean}) => (
  <div className="player__toggler" style={{left: `${isPlaying ? progress.toFixed() : 0}%`}}>
    {ComponentText.Toggler}
  </div>
);

export default React.memo(FilmPlayerToggler);
