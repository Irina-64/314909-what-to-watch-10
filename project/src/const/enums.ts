export enum AppRoute {
  AddReview = '/films/:id/review',
  SignIn = '/sign-in/',
  Main = '/',
  Films = '/films/',
  Film = '/films/:id',
  Player = '/player/',
  MoviePlayer = '/player/:id',
  MyList = '/mylist',
  NotFound = '*',
}

export enum MovieList {
  MainPage = 'MAIN',
  MoviePage = 'SIMILAR',
  MyListPage = 'MY_LIST',
}

export enum AuthStatus {
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

export enum AppAction {
  RedirectToRoute = 'app/redirectToRoute',
}

export enum FetchAction {
  FetchPromo = 'data/fetchPromo',
  FetchFilms = 'data/fetchMovies',
  FetchFilm = 'data/fetchCurrentMovie',
  FetchSimilarFilms = '/data/fetchSimilarMovies',
  FetchReviews = 'data/fetchReviews',
  FetchUserInfo = 'data/fetchUserInfo',
  FetchFavorites = 'data/fetchFavorites',
}

export enum LoadAction {
  LoadReviews = 'review/loadReviews',
  LoadCurrentMovie = 'movies/loadCurrentMovie',
  LoadSimilarMovies = 'movies/loadSimilarMovies',
}

export enum ChangeAction {
  AddReview = 'review/addReview',
  SetReview = 'review/changeReview',
  ToggleFavorite = 'movies/setFavorite',
  ChangeGenre = 'movies/genre/changeGenre',
}

export enum UserAction {
  SetAuth = 'user/setAuthorization',
  CheckAuth = 'user/checkAuthorizattion',
  Login = 'user/login',
  Logout = 'user/logout',
}

export enum Genre {
  AllGenres = 'AllGenres',
  Adventure = 'Adventure',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Horror = 'Horror',
  Family = 'Family',
  Romance = 'Romance',
  SciFi = 'SciFi',
  Thriller = 'Thriller',
  Fantasy = 'Fantasy'
}

export enum GenreName {
  AllGenres = 'All Genres',
  Adventure = 'Adventure',
  Comedy = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Dramas',
  Horror = 'Horror',
  Family = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thriller = 'Thrillers',
  Fantasy = 'Fantasy'
}

export enum APIRoute {
  Promo = '/promo',
  Movies = '/films',
  Favorites = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Review = '/comments'
}

export enum ErrorMessage {
  ReviewError = 'Please choose rating and type in your review',
  SimilarError = 'Failed to load similar movies',
  CurrentError = 'Failed to load movie',
  PromoError = 'Failed to load promo',
  FavoritesError = 'Failed to load favorites',
  AddFavoriteError = 'Couldn`t add to favorites',
}
