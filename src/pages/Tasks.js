import React from 'react';
import { Link } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import '../styles/global.css'; // Certifique-se de que o CSS está no caminho certo

const Tasks = () => {
  return (
    <div>
      
      <TaskForm />

      {/* Botão para Voltar ao Dashboard */}
      <div className="go-back-container">
        <Link to="/dashboard" className="go-back-button">Voltar para o Início</Link>
      </div>
    </div>
  );
};

export default Tasks;
