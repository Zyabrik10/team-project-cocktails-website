import { StartPages } from 'layout/StartPages/StartPages';
import { Routes, Route } from 'react-router-dom';

import { Signin, Signup, Start, Drink } from '../pages/index';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPages />}>
        <Route path="/" element={<Start />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/drink/:drinkId" element={<Drink />} />
      </Route>
    </Routes>
  );
};
