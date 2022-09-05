import GenreListComponent from '../../components/genres/genre-list/genre-list';
import FilmCardPromo from '../../components/movies/movie-promo/promo';
import FilmCardsList from '../../components/film-list/film-list';
import FooterElement from '../../components/common/footer/footer';
import { ComponentTestID, ComponentText, PageTestID } from '../../const/enums';
import useMovies from '../../hooks/use-movies/use-movies';
import ShowMoreButton from '../../components/show-more/show-more';

const MainPage = () => {
	const mainPageProps = useFilms();
	return (
		<>
		  <FilmCardPromo {...mainPageProps}/>
		  <div className="page-content" data-testid={PageTestID.MainPage}>
			<section className="catalog">
			  <h2 className="catalog__title visually-hidden">{ComponentText.Catalog}</h2>
			  <GenresList {...mainPageProps}/>
			  <FilmCardsList {...mainPageProps} testId={ComponentTestID.MainFilms}>
				<ShowMoreButton {...mainPageProps} />
			  </FilmCardsList>
			</section>
			<PageFooter />
		  </div>
		</>
	  );
	};	

export default MainPage;
