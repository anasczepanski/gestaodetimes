Projeto de Gerenciamento de Equipe e Tarefas
Este é um aplicativo web para gerenciamento de equipe e tarefas, desenvolvido para facilitar a atribuição e monitoramento de tarefas em um ambiente de trabalho colaborativo. O projeto utiliza uma interface front-end reativa, um back-end em Node.js, e Firebase para armazenamento e autenticação.

Funcionalidades
Gestão de Tarefas: Criação, visualização, edição e exclusão de tarefas.
Atribuição de Tarefas: Atribuição de tarefas a membros da equipe.
Notificações: Notificações em tempo real sobre tarefas e prazos.
Autenticação de Usuário: Autenticação segura com Firebase.
Armazenamento: Armazenamento de dados no Firebase Firestore.
Instalação
Siga estas etapas para configurar o ambiente de desenvolvimento:

Clone o Repositório:


git clone (https://github.com/anasczepanski/gestaodetimes.git)
Navegue até o Diretório do Projeto:


cd nome-do-projeto
Instale as Dependências:


npm install
Configure o Ambiente:

Crie um arquivo .env na raiz do projeto.
Adicione suas variáveis de ambiente:
makefile
Copiar código
API_KEY=suachave
AUTH_DOMAIN=seudominio.firebaseapp.com
PROJECT_ID=seuprojeto
STORAGE_BUCKET=seubucket.appspot.com
MESSAGING_SENDER_ID=seuID
APP_ID=seuAppID
VAPID_KEY=suachaveVAPID
Inicie o Servidor:


npm start
Uso
Para iniciar o projeto em modo de desenvolvimento:


npm start
Para executar os testes:


npm test
Para construir o projeto para produção:


npm run build
Contribuição
Contribuições são bem-vindas! Para contribuir com o projeto, siga estas etapas:

Faça um fork do repositório.
Crie uma branch para sua modificação:

git checkout -b minha-modificacao
Faça as alterações e adicione testes se necessário.
Envie um pull request para revisão.
