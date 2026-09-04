# 📚 StudyHub

> **Organize your studies. Keep your routine under control.**

Sistema web para organização de estudos, desenvolvido para centralizar **matérias, tarefas e provas** em um único lugar.

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)](https://github.com/mathzsw/StudyHub)
[![Node.js](https://img.shields.io/badge/Node.js-runtime-green)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-ISC-lightgrey)](https://opensource.org/licenses/ISC)

---

## 🎯 Sobre o projeto

O **StudyHub** é um projeto de portfólio criado para praticar desenvolvimento web e aplicar, na prática, conceitos de **backend, banco de dados, arquitetura em camadas e desenvolvimento incremental**.

A proposta é simples: oferecer ao estudante um espaço para organizar sua rotina acadêmica sem depender de várias ferramentas diferentes.

## ✨ Funcionalidades

### ✅ Implementadas

- 📚 Cadastro, visualização, edição e exclusão de matérias
- 💾 Persistência das matérias em SQLite através do Sequelize
- 🔎 Validação do nome obrigatório da matéria
- 📱 Interface responsiva para gerenciamento de matérias

### 🚧 Em desenvolvimento

- 📝 Gerenciamento de tarefas
- 📅 Cadastro e gerenciamento de provas
- 📊 Dashboard de estudos
- 📈 Estatísticas e indicadores de desempenho

## 🛠️ Tecnologias

| Tecnologia | Utilização |
|---|---|
| **Node.js** | Runtime da aplicação |
| **Express** | Servidor e rotas HTTP |
| **Handlebars** | Templates das páginas |
| **Sequelize** | ORM e persistência de dados |
| **SQLite** | Banco de dados |
| **HTML5** | Estrutura das páginas |
| **CSS3** | Estilização e responsividade |
| **JavaScript** | Interações no frontend |

## 🏗️ Estrutura do projeto

```text
studyhub/
├── database/
│   └── database.js
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── views/
│   └── public/
│       ├── css/
│       └── js/
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

A aplicação utiliza uma separação entre **rotas, controllers, models, views e arquivos públicos**, permitindo evoluir o projeto sem concentrar toda a lógica em um único arquivo.

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- Git instalado

### Instalação

```bash
git clone https://github.com/mathzsw/StudyHub.git
cd StudyHub
npm install
```

### Desenvolvimento

```bash
npm run dev
```

### Execução normal

```bash
npm start
```

A aplicação ficará disponível em:

```text
http://localhost:3001
```

## 📋 Metodologia de desenvolvimento

O projeto segue um fluxo inspirado em boas práticas de desenvolvimento colaborativo:

```text
Issue → Branch → Desenvolvimento → Testes → Commit → Push → Pull Request → Review → Merge
```

As funcionalidades são organizadas em **User Stories**, enquanto as tarefas técnicas são acompanhadas separadamente para manter o backlog rastreável.

## 🗺️ Roadmap

### 🚀 Sprint 1 — Core

- [x] Estrutura inicial do projeto
- [x] Cadastro e gerenciamento de matérias
- [ ] Gerenciamento de tarefas
- [ ] Cadastro e gerenciamento de provas

### 🎯 Sprint 2 — Dashboard & UX

- [ ] Dashboard de estudos
- [ ] Melhorias de interface e experiência do usuário

### 📊 Sprint 3 — Desempenho

- [ ] Estatísticas de desempenho
- [ ] Indicadores de evolução acadêmica

## 📌 Status atual

**Em desenvolvimento — Sprint 1**

O núcleo do gerenciamento de matérias já está implementado. O próximo foco é ampliar o sistema com tarefas e provas antes de avançar para dashboard e estatísticas.

## 👨‍💻 Autor

**Matheus Augusto Rodrigues de Alencar**

- GitHub: [@mathzsw](https://github.com/mathzsw)

---

⭐ Se o projeto for útil ou interessante, considere acompanhar sua evolução.
