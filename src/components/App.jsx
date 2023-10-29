import { Routes, Route } from 'react-router-dom';

import Layout from '../layout/layout';
import { Signin, Signup, Start } from '../pages/index';

export const App = () => {
  const isAuth = false

  return (
    <>
      {isAuth ? (
          <></>
      ) : (
        <Routes>
              <Route path='/' element={<Layout/>}>
                <Route path='/welcome' element={<Start />} />
                <Route path='/welcome/signup' element={<Signup />} />
                <Route path='/welcome/signin' element={<Signin />} />
                <Route path='/home' element={<div><h1>HOME</h1></div>} />
                <Route path='/drinks' element={<div><h1>DRINKS</h1></div>} />
                <Route path='/add-drink' element={<div><h1>ADD-DRINK</h1></div>} />
                <Route path='/my-drinks' element={<div><h1>MY-DRINKS</h1></div>} />
                <Route path='/favorites' element={<div><h1>FAVORITES</h1></div>} />
              </Route>
          </Routes>
      )}
    </>
  );
};