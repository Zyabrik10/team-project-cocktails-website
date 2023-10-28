import { StartPages } from 'layout/StartPages/StartPages';
import { Routes, Route } from 'react-router-dom';

import { AddDrinks, Signin, Signup, Start } from '../pages/index';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPages />}>
        <Route path="/" element={<Start />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Route>
      <Route path="/add" element={<AddDrinks />} />
    </Routes>
  );
};
