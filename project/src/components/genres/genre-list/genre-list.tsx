import TList from '../../../types/list';
import GenreItem from '../genre-item/genre-item';

const GenreListComponent = ({ genres }: TList<string>) => {
  const genreItems = genres.map((genre) => <GenreItem key={genre} value={genre} />);

  return (
    <ul className="catalog__genres-list">
      {genreItems}
    </ul>
  );
};

export default GenreListComponent;
