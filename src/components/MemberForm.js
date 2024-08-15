import React, { useState } from 'react';
import api from '../api';
import Notification from './Notification';
import '../styles/global.css'; // Certifique-se de importar o CSS

const MemberForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);

  const validate = () => {
    const errors = {};
    if (!name) errors.name = 'Nome é obrigatório';
    if (!email) {
      errors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Formato de email inválido';
    }
    if (!role) errors.role = 'Função é obrigatória';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      try {
        await api.post('/members', { name, email, role });
        setNotification({ message: 'Membro adicionado com sucesso!', type: 'success' });
        setName('');
        setEmail('');
        setRole('');
        setErrors({});
      } catch (error) {
        console.error('Error adding member:', error);
        setNotification({ message: 'Falha ao adicionar membro.', type: 'error' });
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="member-form-container">
      
      <form onSubmit={handleSubmit}>
        <Notification message={notification?.message} type={notification?.type} />
        <div className="member-form-group">
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        <div className="member-form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="member-form-group">
          <label>Função:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={errors.role ? 'input-error' : ''}
          />
          {errors.role && <p className="error-text">{errors.role}</p>}
        </div>
        <button type="submit" className="submit-button">Cadastrar</button>
      </form>
    </div>
  );
};

export default MemberForm;
