import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const PrivateRoute = () => {
  const [user, loading] = useAuthState(auth);

  // Se estiver carregando, você pode mostrar um loading ou retornar null
  if (loading) {
    return <div>Loading...</div>;
  }

  // Se o usuário não estiver autenticado, redireciona para a tela de login
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
