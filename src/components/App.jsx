import { Routes, Route } from 'react-router-dom';

import { Signin, Signup, Start } from '../pages/index';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};
