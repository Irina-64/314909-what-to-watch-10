import React from 'react';
import { Link } from 'react-router-dom';
import TListElement from '../../../types/list-element';
import Film from '../../../types/film';
import { AppRoute } from '../../const/enums';

type FilmCardProps = TListElement<Film> & {
  handleMouseOver: (movie: Film) => void
}

const FilmCardComponent = ({value: movie, handleMouseOver}: FilmCardProps) => {
  const mouseOverHandler = (evt: React.MouseEvent<HTMLElement>) => handleMouseOver(movie);
  return (
    <article className="small-film-card catalog__films-card">
      <Link className="small-film-card__link" to={`films/${movie.id}`}>
        <div className="small-film-card__image" onMouseOver={mouseOverHandler}>
          <img src={movie.previewImage} alt={movie.name} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">{movie.name}</h3>
      </Link>
    </article>
  );
};

export default FilmCard;
