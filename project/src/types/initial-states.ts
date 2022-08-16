import { Genre } from '../const/enums';
import Film from './film';

export type MainPageInitialState = {
  promo: Film,
  movies: Film[],
  selectedGenre: Genre,
};
