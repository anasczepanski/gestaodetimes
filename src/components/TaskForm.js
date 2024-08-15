import React, { useState } from 'react';
import api from '../api';
import '../styles/TaskForm.css'; // Supondo que você tenha um arquivo CSS para os estilos

const TaskForm = () => {
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!description) errors.description = 'Descrição é obrigatória';
    if (!deadline) errors.deadline = 'Prazo é obrigatório';
    if (!priority) errors.priority = 'Prioridade é obrigatória';
    if (!estimatedTime || isNaN(estimatedTime)) errors.estimatedTime = 'Tempo estimado deve ser um número';
    if (!assignedTo) errors.assignedTo = 'Responsável é obrigatório';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      try {
        const response = await api.post('/tasks', { description, deadline, priority, estimatedTime, assignedTo });
        console.log('Task added:', response.data);
        setDescription('');
        setDeadline('');
        setPriority('');
        setEstimatedTime('');
        setAssignedTo('');
        setErrors({});
      } catch (error) {
        console.error('Error adding task:', error);
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="task-form-container">
      <h2>Criar Nova Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Descrição:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={errors.description ? 'input-error' : ''}
          />
          {errors.description && <p className="error-text">{errors.description}</p>}
        </div>
        <div className="form-group">
          <label>Prazo:</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className={errors.deadline ? 'input-error' : ''}
          />
          {errors.deadline && <p className="error-text">{errors.deadline}</p>}
        </div>
        <div className="form-group">
          <label>Prioridade:</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className={errors.priority ? 'input-error' : ''}
          >
            <option value="">Selecione...</option>
            <option value="Alta">Alta</option>
            <option value="Média">Média</option>
            <option value="Baixa">Baixa</option>
          </select>
          {errors.priority && <p className="error-text">{errors.priority}</p>}
        </div>
        <div className="form-group">
          <label>Tempo Estimado (horas):</label>
          <input
            type="number"
            value={estimatedTime}
            onChange={(e) => setEstimatedTime(e.target.value)}
            className={errors.estimatedTime ? 'input-error' : ''}
          />
          {errors.estimatedTime && <p className="error-text">{errors.estimatedTime}</p>}
        </div>
        <div className="form-group">
          <label>Responsável:</label>
          <input
            type="text"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            className={errors.assignedTo ? 'input-error' : ''}
          />
          {errors.assignedTo && <p className="error-text">{errors.assignedTo}</p>}
        </div>
        <button type="submit" className="submit-button">Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TaskForm;
