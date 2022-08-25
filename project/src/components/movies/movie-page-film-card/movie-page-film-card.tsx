import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute, HeaderStyle, PosterSize } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import Loading from '../../../pages/loading/loading';
import { fetchMovieAction } from '../../../store/movie/movie-api-actions';
import { getMovieState } from '../../../store/movie/movie-selectors';
import { getMovies } from '../../../store/main-page/main-page-selectors';
import { checkFilmId } from '../../../utilites/utilites';
import HeaderElement from '../../common/header/header-element';
import LogoElement from '../../common/logo/logo';
import UserBlock from '../../common/user-block/user-block';
import WTWElement from '../../common/wtw/wtw';
import FilmCardButtons from '../../movies/movie-buttons/movie-buttons';
import FilmCardDescription from '../../movies/card-description/card-description';
import FilmBackground from '../../movies/images/film-background/film-card-backgr';
import FilmPosterElement from '../../movies/images/film-poster/film-poster';
import FilmTabs from '../../movies/movie-tabs/movie-tabs';

const MoviePageFilmCard = () => {
  const id = Number(useParams().id);

  const { data: { movie } } = useAppSelector(getMovieState);

  const movies = useAppSelector(getMovies);
  const isIdOk = checkFilmId(movies, id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!movie || id !== movie.id) {
      dispatch(fetchMovieAction(id));
    }
  }, [dispatch, id, movie]);

  if (!isIdOk) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return !movie
    ? <Loading />
    : (
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <FilmBackground movie={movie} />
          <WTWElement />
          <HeaderElement style={HeaderStyle.FilmCard}>
            <LogoElement />
            <UserBlock />
          </HeaderElement>
          <div className="film-card__wrap">
            <FilmCardDescription movie={movie}>
              <FilmCardButtons movie={movie} />
            </FilmCardDescription>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmPosterElement {...movie} size={PosterSize.Big} />
            <FilmTabs movie={movie} />
          </div>
        </div>
      </section>
    );
};

export default MoviePageFilmCard;
