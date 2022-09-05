import FilmCardsList from '../../components/film-list/film-list';
import FooterElement from '../../components/common/footer/footer';
import { ComponentTestID, ComponentText, HeaderStyle, PageTestID, PosterSize } from '../../const/enums';
import LoadingPage from '../loading/loading';
import FilmBackground from '../../components/movies/images/film-background/film-card-backgr';
import WTWElement from '../../components/common/wtw/wtw';
import HeaderElement from '../../components/common/header/header-element';
import LogoElement from '../../components/common/logo/logo';
import UserBlock from '../../components/common/user-block/user-block';
import FilmCardDescription from '../../components/movies/card-description/card-description';
import FilmButtons from '../../components/movies/movie-buttons/movie-buttons';
import FilmPoster from '../../components/movies/images/film-poster/film-poster';
import FilmTabs from '../../components/movies/movie-tabs/movie-tabs';
import useCurrentFilm from '../../hooks/use-current-movie/use-current-movie';

const MoviePage = () => {
	const {movie, reviews, similar, isLoading} = useCurrentFilm();

	return !movie || isLoading
	  ? <LoadingPage />
	  : (
		<>
		  <section className="film-card film-card--full" data-testid={ComponentTestID.MoviePageCard}>
			<div className="film-card__hero">
			  <FilmBackground movie={movie} />
			  <WTWElement />
			  <HeaderElement style={HeaderStyle.MovieCard}>
				<LogoElement />
				<UserBlock />
			  </HeaderElement>
			  <div className="film-card__wrap">
				<FilmCardDescription movie={movie}>
				  <FilmButtons id={movie.id} />
				</FilmCardDescription>
			  </div>
			</div>
			<div className="film-card__wrap film-card__translate-top">
			  <div className="film-card__info">
				<FilmPoster {...movie} size={PosterSize.Big} />
				<FilmTabs movie={movie} reviews={reviews}/>
			  </div>
			</div>
		  </section>
		  <div className="page-content" data-testid={PageTestID.MoviePage}>
			<section className="catalog catalog--like-this">
			  <h2 className="catalog__title">{ComponentText.MoreLikeThis}</h2>
			  <FilmCardsList movies={similar} testId={ComponentTestID.SimilarMovies}/>
			</section>
			<PageFooter />
		  </div>
		</>
	  );
  };

export default MoviePage;
