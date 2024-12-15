import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/contacts" />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />}
        />
      </Route>
    </Routes>
  );
}

export default App;

