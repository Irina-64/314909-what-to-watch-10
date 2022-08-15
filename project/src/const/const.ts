const FilmTypeList = [
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
] as const;

const Rating = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'] as const;

const MOVIE_CARD_COUNT = 15;

const RATING_ID_PREFIX = 'star-';

const PLAYER_TIME_STYLE = {
  left: '30%'
};

export {
  RATING_ID_PREFIX,
  MOVIE_CARD_COUNT,
  PLAYER_TIME_STYLE,
  FilmTypeList,
  Rating
};
