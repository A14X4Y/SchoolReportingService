import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes.data';
import useAuth from '../hooks/useAuth';
import NotFound from '../screens/NotFound/NotFound';
import Auth from '../screens/Auth/Auth';

const Router = () => {
  const { isAuth } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
