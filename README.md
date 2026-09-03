# 📚 StudyHub

> **Organize your studies. Keep your routine under control.**

Sistema web para organização de estudos, desenvolvido para centralizar **matérias, tarefas e provas** em um único lugar.

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)](https://github.com/mathzsw/studyhub)
[![Node.js](https://img.shields.io/badge/Node.js-runtime-green)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-TBD-lightgrey)](https://github.com/mathzsw/studyhub)

---

## 🎯 Sobre o projeto

O **StudyHub** é um projeto de portfólio criado para praticar desenvolvimento web e aplicar, na prática, conceitos de **backend, banco de dados, organização de projeto e desenvolvimento incremental**.

A proposta é simples: oferecer ao estudante um espaço para acompanhar sua rotina acadêmica sem depender de várias ferramentas diferentes.

## ✨ Funcionalidades

### Planejadas

- 📚 Cadastro e gerenciamento de matérias
- 📝 Cadastro e gerenciamento de tarefas
- 📅 Cadastro e gerenciamento de provas
- 📊 Dashboard com resumo da rotina de estudos
- 📈 Acompanhamento de desempenho acadêmico
- 📱 Interface responsiva e intuitiva

> O projeto está em desenvolvimento. As funcionalidades serão liberadas conforme cada etapa do roadmap for concluída.

## 🛠️ Tecnologias

| Tecnologia | Utilização |
|---|---|
| **Node.js** | Runtime da aplicação |
| **Express** | Servidor e rotas |
| **Handlebars** | Templates das páginas |
| **Sequelize** | ORM e persistência de dados |
| **SQLite** | Banco de dados |
| **HTML5** | Estrutura das páginas |
| **CSS3** | Estilização e responsividade |
| **JavaScript** | Comportamento da aplicação |

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
└── README.md
```

A arquitetura será expandida conforme novas funcionalidades forem implementadas.

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- Git instalado

### Instalação

```bash
git clone https://github.com/mathzsw/studyhub.git
cd studyhub
npm install
```

### Executar em desenvolvimento

```bash
npm run dev
```

A aplicação será iniciada em:

```text
http://localhost:3001
```

### Executar normalmente

```bash
npm start
```

## 📋 Metodologia de desenvolvimento

O projeto segue uma organização inspirada em **Scrum e boas práticas de desenvolvimento colaborativo**.

O fluxo principal é:

```text
Issue → Branch → Desenvolvimento → Testes → Commit → Push → Pull Request → Review → Merge
```

As funcionalidades são organizadas em **User Stories**, enquanto tarefas de implementação são registradas separadamente para manter o backlog rastreável.

## 🗺️ Roadmap

### 🚀 Sprint 1 — Core

- [x] Estrutura inicial do projeto
- [ ] Cadastro e gerenciamento de matérias
- [ ] Gerenciamento de tarefas
- [ ] Cadastro de provas

### 🎯 Sprint 2 — Dashboard & UX

- [ ] Dashboard de estudos
- [ ] Melhorias de interface e experiência do usuário

### 📊 Sprint 3 — Desempenho

- [ ] Estatísticas de desempenho
- [ ] Indicadores de evolução acadêmica

## 📌 Status

**Em desenvolvimento — Sprint 1**

> O objetivo atual é entregar o núcleo funcional do sistema antes de avançar para recursos de dashboard e análise de desempenho.

## 👨‍💻 Autor

**Matheus Augusto Rodrigues de Alencar**

- GitHub: [@mathzsw](https://github.com/mathzsw)

---

⭐ Se o projeto for útil ou interessante, considere acompanhar sua evolução.
