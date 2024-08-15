import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Tasks from './pages/Tasks';
import Login from './components/Login';
import Register from './components/Register';
import UserTasks from './components/UserTasks';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar'; // Importando o componente Navbar corretamente

function App() {
  return (
    <>
      <Navbar /> {/* Navbar fixo no topo */}
      <div style={{ paddingTop: '60px' }}> {/* Ajuste o padding-top para evitar sobreposição */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/members" element={<Members />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/usertasks" element={<UserTasks />} />
          </Route>
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
