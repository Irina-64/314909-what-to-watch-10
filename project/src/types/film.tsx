import { Genre } from '../const/enums';

type Film = {
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: Genre;
  released: number;
  id: string;
  isFavorite: boolean;
  videoLink: string;
  previewVideoLink: string;
};

export default Film;
