import { StartPages } from 'layout/StartPages/StartPages';
import { Routes, Route } from 'react-router-dom';

import Layout from '../layout/layout';
import { AddDrinks, Signin, Signup, Start } from '../pages/index';

export const App = () => {
  const isAuth = false;

  return (
    <>
      {isAuth ? (
        <Routes>
          <Route path="/" element={<StartPages />}>
            <Route index element={<Start />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/home"
              element={
                <div>
                  <h1>HOME</h1>
                </div>
              }
            />
            <Route
              path="/drinks"
              element={
                <div>
                  <h1>DRINKS</h1>
                </div>
              }
            />
            <Route path="/add" element={<AddDrinks />} />
            <Route
              path="/my-drinks"
              element={
                <div>
                  <h1>MY-DRINKS</h1>
                </div>
              }
            />
            <Route
              path="/favorites"
              element={
                <div>
                  <h1>FAVORITES</h1>
                </div>
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
