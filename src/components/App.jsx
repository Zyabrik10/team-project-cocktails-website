import { StartPages } from 'layout/StartPages/StartPages';
import { Routes, Route } from 'react-router-dom';
import {SecMyDrinks} from '../pages/my-drinks/sec-my-drinks/SecMyDrinks';

import { Signin, Signup, Start } from '../pages/index';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPages />} >
        <Route path="/" element={<Start />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/my" element={<SecMyDrinks />} />
      </Route>
    </Routes>
  );
};
