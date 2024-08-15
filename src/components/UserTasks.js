import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import '../styles/global.css'; // Certifique-se de que o CSS está no caminho certo

const UserTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksSnapshot = await getDocs(collection(db, 'tasks'));
      const tasksList = tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTasks(tasksList);
    };

    const fetchUsers = async () => {
      const usersSnapshot = await getDocs(collection(db, 'members'));
      const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(usersList);
    };

    fetchTasks();
    fetchUsers();
  }, []);

  const getTasksByUser = (userName) => {
    return tasks.filter(task => task.assignedTo === userName);
  };

  return (
    <div>
      <h2>Usuários e Atividades</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Tarefa</th>
              <th>Prazo</th>
              <th>Tempo Estimado</th>
              <th>Prioridade</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              const userTasks = getTasksByUser(user.name);
              return userTasks.length > 0 ? (
                userTasks.map((task, index) => (
                  <tr key={task.id}>
                    {index === 0 && (
                      <td rowSpan={userTasks.length}>
                        {user.name}
                      </td>
                    )}
                    <td>{task.description}</td>
                    <td>{task.deadline}</td>
                    <td>{task.estimatedTime}</td>
                    <td>{task.priority}</td>
                  </tr>
                ))
              ) : (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td colSpan="4">Sem tarefas atribuídas</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Botão para Voltar ao Dashboard */}
      <div className="go-back-container">
        <Link to="/dashboard" className="go-back-button">Voltar para o Início</Link>
      </div>
    </div>
  );
};

export default UserTasks;
