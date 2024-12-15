import { Navigate } from 'react-router-dom';
import { useAuth } from './Hooks';

export const PrivateRoute = ({ Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

