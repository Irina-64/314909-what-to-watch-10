import React from 'react';
import { humanizeTime } from '../../../utilites/utilites';

const FilmPlayerTimeValue = ({time}: {time: number}) => {
  const movieTime = humanizeTime(Number(time.toFixed()));

  return <div className="player__time-value">{movieTime}</div>;
};

export default React.memo(FilmPlayerTimeValue);
