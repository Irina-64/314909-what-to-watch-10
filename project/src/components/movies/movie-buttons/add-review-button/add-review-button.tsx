import { Link } from 'react-router-dom';
import Film from '../../../../types/film';

const AddReviewButton = ({id}: Film) => <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>;

export default AddReviewButton;
