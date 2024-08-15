import React from 'react';
import { Link } from 'react-router-dom';
import MemberForm from '../components/MemberForm';
import '../styles/global.css'; // Certifique-se de que o CSS está no caminho certo

const Members = () => {
  return (
    <div>
      <h2>Cadastro de Membros</h2>
      <MemberForm />

      {/* Botão para Voltar ao Dashboard */}
      <div className="go-back-container">
        <Link to="/dashboard" className="go-back-button">Voltar para o Início</Link>
      </div>
    </div>
  );
};

export default Members;
