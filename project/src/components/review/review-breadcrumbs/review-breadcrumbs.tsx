import { Link } from 'react-router-dom';
import Film from '../../../types/film';

const ReviewBreadcrumbsElm = ({ id, name }: Film) => (
  <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
      </li>
      <li className="breadcrumbs__item">
        <Link to={`/films/${id}/review`} className="breadcrumbs__link">Add review</Link>
      </li>
    </ul>
  </nav>
);

export default ReviewBreadcrumbsElm;
