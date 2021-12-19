import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import { Context } from '../context/context';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AUTH_ROUTE, CHAT_ROUTE } from '../utils/routerConsts';

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return user ? (
    <Routes>
      {privateRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path={'*'} element={<Navigate to={CHAT_ROUTE} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path={'*'} element={<Navigate to={AUTH_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
