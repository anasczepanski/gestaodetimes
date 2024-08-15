import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { messaging } from "../firebaseConfig";  // Importe o Firebase Messaging
import { getToken, onMessage } from "firebase/messaging";

const Dashboard = () => {

  useEffect(() => {
    // Solicita permissão para notificações
    getToken(messaging, { vapidKey: "YOUR_PUBLIC_VAPID_KEY" })
      .then((currentToken) => {
        if (currentToken) {
          console.log("Token received: ", currentToken);
          // Envie este token para o seu back-end e associe-o ao usuário
        } else {
          console.log("No registration token available.");
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });

    // Escuta mensagens enquanto o app está em primeiro plano
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      // Mostre a notificação ao usuário aqui
    });
  }, []);

  return (
    <div>
      <h2>Gestão de Times</h2>
      <nav>
        <ul>
          <li><Link to="/members">Cadastro de Membros</Link></li>
          <li><Link to="/tasks">Gestão de Tarefas</Link></li>
          <li><Link to="/usertasks">Ver Atividades dos Usuários</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
