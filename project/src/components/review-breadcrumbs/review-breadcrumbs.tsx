import React from 'react';
import { Link } from 'react-router-dom';
import Film from '../../../types/film';
import { AppRoute, ComponentTestID, ComponentText, ElementTestID } from '../../const/enums';

const ReviewBreadcrumbs = ({ id, name }: Film) => (
  <nav className="breadcrumbs" data-testid={ComponentTestID.Breadcrumbs}>
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <Link to={`${AppRoute.Films}${id}`} className="breadcrumbs__link" data-testid={ElementTestID.FilmLink}>{name}</Link>
      </li>
      <li className="breadcrumbs__item">
        <a href="/" className="breadcrumbs__link">{ComponentText.AddReview}</a>
      </li>
    </ul>
  </nav>
);

export default ReviewBreadcrumbs;
