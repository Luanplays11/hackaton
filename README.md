# Roadmap Escolar - Sistema de Acompanhamento Acadêmico

Este README fornece instruções sobre como configurar e executar o sistema Roadmap Escolar, uma plataforma educacional que oferece roadmaps de estudo, aulas e avaliações para alunos.

## 📋 Visão Geral

O Roadmap Escolar é uma aplicação web que permite:
- Visualização de matérias e suas aulas
- Roadmaps de aprendizado com recursos educacionais
- Sistema de avaliação de aulas pelos alunos
- Autenticação de professores e alunos

## 🔧 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- Editor de código (recomendado: [Visual Studio Code](https://code.visualstudio.com/))

## 🚀 Instalação

cd hackaton

# Navegar para a pasta do backend
cd backend

# Instalar dependências
npm install

# Criar banco de dados e aplicar migrações
npx prisma migrate reset --force

# Popular o banco de dados com dados iniciais
node prisma/seed.js

# Na pasta backend
npm start

# Para rodar o front use a extenção live server do vscode no arquivo login




