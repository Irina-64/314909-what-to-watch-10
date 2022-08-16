export enum AppRoute {
  FilmId = ':id',
  AddReview = 'films/:id/review',
  Main = '/',
  SignIn = '/sign-in/',
  Films = '/films/',
  Film = '/films/:id',
  Player = 'player',
  FilmPlayer = '/player/:id',
  MyList = '/mylist',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum PosterSize {
  Big = 'big',
  Small = 'small',
}

export enum RatingName {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export enum RatingValue {
  Normal = 3,
  Good = 5,
  VeryGood = 8,
  Awesome = 10,
}

export enum HeaderStyle {
  UserPage = 'user-page__head',
  FilmCard = 'film-card__head',
}

export enum FilmNavigation {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum ApiAddress {
  Movies = 'https://10.react.pages.academy/wtw/films/'
}
