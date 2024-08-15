import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Certifique-se de que o caminho está correto
import '../styles/Navbar.css'; // Importando o CSS corretamente

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/login'); // Redireciona para a página de login após o logout
    }).catch((error) => {
      console.error('Erro ao deslogar: ', error);
    });
  };

  return (
    <div className="navbar">
      <ul>
        <li><Link to="/dashboard">Início</Link></li>
        <li><Link to="/tasks">Tarefas</Link></li>
        <li><Link to="/members">Membros</Link></li>
        <li><Link to="/usertasks">Usuários e Atividades</Link></li>
      </ul>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Navbar;
