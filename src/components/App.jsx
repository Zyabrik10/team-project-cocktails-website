import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from '../hooks/PrivateRoute';
import { RestrictedRoute } from '../hooks/RestrictedRoute';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks';

import { Layout } from '../layout/layout';
// import { Signin, Signup, Start, Home, AddDrinks, MyDrinks, Favorites, Drinks } from '../pages/index';
import { StartPages } from 'layout/StartPages/StartPages';


const StartPage = lazy(() => import('../pages/start/Start'));
const SignupPage = lazy(() => import('../pages/signup/Signup'));
const SigninPage = lazy(() => import('../pages/signin/Signin'));
const HomePage = lazy(() => import('../pages/home/Home'));
const AddDrinkPage = lazy(() => import('../pages/add-drink/AddDrinks'));
const MyDrinksPage = lazy(() => import('../pages/my-drinks/MyDrinks'));
const FavoritesPage = lazy(() => import('../pages/favorites/Favorites'));
const DrinksPage = lazy(() => import('../pages/drinks/Drinks'));






export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const isAuth = false

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  
  return isAuth ? (
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














      {/* {isAuth ? (
        <Routes>
          <Route path="/" element={<StartPages />} >
            <Route path="/" element={<Start />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Route>
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path='/home' element={<div><h1>HOME</h1></div>} />
            <Route path='/drinks' element={<div><h1>DRINKS</h1></div>} />
            <Route path='/add-drink' element={<div><h1>ADD-DRINK</h1></div>} />
            <Route path='/my-drinks' element={<div><h1>MY-DRINKS</h1></div>} />
            <Route path='/favorites' element={<div><h1>FAVORITES</h1></div>} />
          </Routes>
        </Layout>
      )} */}

  {/* <Route
        path="/add-drink"
        element={
          <PrivateRoute redirectTo="/start" component={<AddDrinkPage />} />
        }
          />
      <Route
        path="/my-drinks"
        element={
          <PrivateRoute redirectTo="/start" component={<MyDrinksPage />} />
        }
      />
      <Route
        path="/favorites"
        element={
          <PrivateRoute redirectTo="/start" component={<FavoritesPage />} />
        }
      />
      <Route
        path="/drinks"
        element={
          <PrivateRoute redirectTo="/start" component={<DrinksPage />} />
        }
      />    
    </Route> */}