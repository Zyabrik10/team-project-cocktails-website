import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// import { PrivateRoute } from '../hooks/PrivateRoute';
import { RestrictedRoute } from '../hooks/RestrictedRoute';
// import { refreshUser } from '../redux/auth/operations';
// import { useAuth } from '../hooks';

import { Layout } from '../layout/layout';
import { StartPages } from 'layout/StartPages/StartPages';


const StartPage = lazy(() => import('../pages/start/Start'));
const SignupPage = lazy(() => import('../pages/signup/Signup'));
const SigninPage = lazy(() => import('../pages/signin/Signin'));
const HomePage = lazy(() => import('../pages/home/Home'));
// const AddDrinkPage = lazy(() => import('../pages/add-drink/AddDrinks'));
// const MyDrinksPage = lazy(() => import('../pages/my-drinks/MyDrinks'));
// const FavoritesPage = lazy(() => import('../pages/favorites/Favorites'));
// const DrinksPage = lazy(() => import('../pages/drinks/Drinks'));






export const App = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();
  const isAuth = false

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  
  return !isAuth ? (
    <Routes>
      <Route path="/welcome" element={<StartPages />}>
        <Route index element={ <StartPage/>} />
        <Route
          path="/welcome/signup"
          element={
            <RestrictedRoute redirectTo="/home" component={<SignupPage />} />
          }
        />
        <Route
          path="/welcome/signin"
          element={
            <RestrictedRoute redirectTo="/home" component={<SigninPage />} />
          }
        />
      </Route>
    </Routes> 
  ) : (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index  path="/home" element={<HomePage/>} />
        </Route>
      </Routes>
  );
};

// Rabotaet
      // <Routes>
      //   <Route path='/' element={<Layout/>}>
      //     <Route index  path="/home" element={<HomePage/>} />
      //   </Route>
      // </Routes>
      // <Routes>
      //   <Route path="/welcome" element={<StartPages />}>
      //     <Route index element={ <StartPage/>} />
      //     <Route
      //       path="/welcome/signup"
      //       element={
      //         <RestrictedRoute redirectTo="/home" component={<SignupPage />} />
      //       }
      //     />
      //     <Route
      //       path="/welcome/signin"
      //       element={
      //         <RestrictedRoute redirectTo="/home" component={<SigninPage />} />
      //       }
      //     />
      //   </Route>
      // </Routes>
