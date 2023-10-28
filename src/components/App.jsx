import { StartPages } from 'layout/StartPages/StartPages';
import { Routes, Route } from 'react-router-dom';

import { Signin, Signup, Start } from '../pages/index';
import { Home } from '../pages/index';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPages />} >
        <Route path="/" element={<Start />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home/>}/>
      </Route>
    </Routes>
  );
};
