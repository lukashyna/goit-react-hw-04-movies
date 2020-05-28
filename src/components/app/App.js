import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import Nav from '../nav/Nav';

const AsyncHomePage = lazy(() => import('../../pages/HomePages' /* webpackChunkNane: "home-page" */));
const AsyncMovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage' /* webpackChunkNane: "movie-details-page" */),
);
const AsyncMoviePage = lazy(() => import('../../pages/MoviePage' /* webpackChunkNane: "movie-page" */));
const AsyncNotFoundPage = lazy(() => import('../../pages/NotFoundPage' /* webpackChunkNane: "not-found-page" */));

const App = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/" exact component={AsyncHomePage} />
          <Route path="/movies/:movieId" component={AsyncMovieDetailsPage} />
          <Route path="/movies" component={AsyncMoviePage} />
          <Route component={AsyncNotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
};
export default App;
