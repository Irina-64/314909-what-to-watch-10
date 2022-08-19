export enum AppRoute {
  FilmId = ':id',
  AddReview = 'films/:id/review',
  Main = '/',
  SignIn = '/sign-in/',
  Films = '/films/',
  Film = '/films/:id',
  Player = 'player',
  MoviePlayerPage = '/player/:id',
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

export enum Action {
  ChangeGenre = 'movies/genre/changeGenre',
  ResetGenre = 'movies/genre/resetGenre',
  GetMovies = 'movies/getMovies',
  FilterMovies = '/movies/filterMovies',
  ResetMovies = '/movies/resetMovies',
  SetRenderedMovieCount = '/movies/setRendereMovieCount',
  ResetRenderedMovieCount = '/movies/resetRenderedMovieCount',
  SetActiveMovie = 'movies/setActiveMovie'
}

export enum FetchAction {
  FetchMovies = 'data/fetchMovies',
  FetchPromo = 'data/fetchPromo',
  FetchFavorites = 'data/fetchFavorites',
  FetchReviews = 'data/fetchReviews',
  FetchSimilarMovies = '/data/fetchSimilarMovies',
  FetchCurrentMovie = 'data/fetchCurrentMovie',
}

export enum LoadAction {
  LoadMovies = 'movies/loadMovies',
  LoadPromo = 'movies/loadPromo',
  LoadFavorites = 'movies/loadFavorites',
  LoadUserData = 'user/setUserData',
  LoadReviews = 'review/loadReviews',
  LoadCurrentMovie = 'movies/loadCurrentMovie',
  LoadSimilarMovies = 'movies/loadSimilarMovies',
}

export enum ChangeAction {
  AddReview = 'review/addReview',
  ChangeReview = 'review/changeReview',
  ToggleFavorite = 'movies/setFavorite',
  ResetFavorites = 'movies/resetFavorites',
  ChangeGenre = 'movies/genre/changeGenre',
  ResetGenre = 'movies/genre/resetGenre',
  ClearError = 'app/clearError',
}

export enum UserAction {
  SetAuth = 'user/setAuthorization',
  ReqAuth = 'user/requireAuthorization',
  CheckAuth = 'user/checkAuthorizattion',
  Login = 'user/login',
  Logout = 'user/logout',
}

export enum AppAction {
  SetDataLoaded = 'data/setDataLoaded',
  RedirectToRoute = 'app/redirectToRoute',
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

export enum Favorite {
  SetFavorite = 1,
  SetNotFavorite = 0
}

export enum ErrorMessage {
  ReviewError = 'Please choose rating and type in your review',
  SimilarError = 'Failed to load similar movies',
  CurrentError = 'Failed to load movie',
  PromoError = 'Failed to load promo',
  FavoritesError = 'Failed to load favorites',
  AddFavoriteError = 'Couldn`t add to favorites',
}
