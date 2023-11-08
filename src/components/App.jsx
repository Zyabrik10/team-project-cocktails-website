import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from '../hooks/PrivateRoute';
import { RestrictedRoute } from '../hooks/RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks';

import { Layout } from '../layout/layout';
import { Signin, Signup, Start } from 'pages';
import { ErrorComponent } from './ErrorComponent/ErrorComponent';

import { getThemeColor } from 'redux/theme/selectors';

import { useSelector } from 'react-redux';

import css from './App.module.css';
import Loader from './Loader';

const HomePage = lazy(() => import('../pages/home/Home'));
const DrinksPage = lazy(() => import('../pages/drinks/Drinks'));
const AddDrinkPage = lazy(() => import('../pages/add-drink/AddDrinks'));
const MyDrinksPage = lazy(() => import('../pages/my-drinks/MyDrinks'));
const FavoritesPage = lazy(() => import('../pages/favorites/Favorites'));
const SingleDrinkPage = lazy(() => import('../pages/my-drinks/my-drink/Drink'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const theme = useSelector(getThemeColor);
  const themeClass = theme === 'dark' ? 'main' : 'main light';

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    // <RefreshLoader/>
    <Loader
      size={20}
      margin={10}
      position={{
        marginTop: '100px',
        marginLeft: '50%',
        transform: 'translateX(-8%)',
      }}
    />
  ) : (
    <div className={`${css['bg']} ${themeClass}`}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute redirectTo="/welcome" component={<Layout />} />
          }
        >
          <Route path="/home" element={<HomePage />} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/add" element={<AddDrinkPage />} />
          <Route path="/my" element={<MyDrinksPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/drink/:drinkId" element={<SingleDrinkPage />} />
          <Route path="*" element={<ErrorComponent />} />
        </Route>

        <Route
          path="/welcome"
          element={<RestrictedRoute redirectTo="/home" component={<Start />} />}
        />
        <Route
          path="/signup"
          element={
            <RestrictedRoute redirectTo="/home" component={<Signup />} />
          }
        />
        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/home" component={<Signin />} />
          }
        />
      </Routes>
    </div>
  );
};
