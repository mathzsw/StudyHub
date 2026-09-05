<div align="center">

<img src="assets/StudyHub.png" alt="StudyHub" width="900">

# 📚 StudyHub

### Organize seus estudos. Mantenha sua rotina sob controle.

Sistema web para centralizar matérias, tarefas e provas em um único lugar.

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-3B82F6?style=flat-square)](https://github.com/mathzsw/StudyHub)
[![Node.js](https://img.shields.io/badge/Node.js-runtime-3B82F6?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-backend-151A23?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![License](https://img.shields.io/badge/license-ISC-8B5CF6?style=flat-square)](https://opensource.org/licenses/ISC)

</div>

---

<div align="center">

**Organize. Estude. Evolua.**

</div>

## 🔷 Sobre o StudyHub

O **StudyHub** é uma aplicação web criada para transformar a organização acadêmica em uma experiência simples e centralizada.

A ideia é reunir, em um só lugar, aquilo que o estudante precisa acompanhar no dia a dia: **matérias, tarefas, provas e evolução dos estudos**.

Além do produto, o projeto também funciona como um laboratório prático de desenvolvimento web, aplicando **backend, banco de dados, arquitetura em camadas e desenvolvimento incremental**.

## 🚀 Funcionalidades

### ✅ Disponível

- 📚 Cadastro, visualização, edição e exclusão de matérias
- 📝 API de cadastro, consulta, edição e exclusão de tarefas
- 🔗 Associação de tarefas às matérias
- 💾 Persistência de dados com SQLite + Sequelize
- 🔎 Validação de campos obrigatórios e dados de tarefas
- 📱 Interface responsiva

### 🔜 Próximos recursos

- 📝 Interface de gerenciamento de tarefas
- 📅 Cadastro e gerenciamento de provas
- 📊 Dashboard de estudos
- 📈 Estatísticas e indicadores de desempenho

## 🛠️ Stack

| Tecnologia | Papel no projeto |
|---|---|
| **Node.js** | Runtime da aplicação |
| **Express** | Servidor e API |
| **Handlebars** | Renderização das páginas |
| **Sequelize** | ORM e acesso ao banco |
| **SQLite** | Persistência dos dados |
| **JavaScript** | Lógica e interações |
| **HTML5** | Estrutura da interface |
| **CSS3** | Estilização e responsividade |

## 🏗️ Arquitetura

```text
StudyHub/
├── assets/
│   └── StudyHub.png
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

A aplicação separa responsabilidades entre **routes, controllers, models, views e arquivos públicos**, mantendo o código organizado e preparado para novas funcionalidades.

## 💻 Executando localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- Git instalado

### 1. Clone o repositório

```bash
git clone https://github.com/mathzsw/StudyHub.git
cd StudyHub
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o projeto

Para desenvolvimento:

```bash
npm run dev
```

Ou, para execução normal:

```bash
npm start
```

Acesse:

```text
http://localhost:3001
```

## 📋 Fluxo de desenvolvimento

O StudyHub é desenvolvido de forma incremental, seguindo um fluxo organizado:

```text
Issue → Branch → Desenvolvimento → Testes → Commit → Pull Request → Review → Merge
```

As funcionalidades são planejadas através de **User Stories** e tarefas técnicas, mantendo o desenvolvimento rastreável e permitindo evoluir o projeto por etapas.

## 🗺️ Roadmap

### 🚀 Sprint 1 — Core

- [x] Estrutura inicial
- [x] Gerenciamento de matérias
- [x] Backend de tarefas
- [ ] Interface de gerenciamento de tarefas
- [ ] Gerenciamento de provas

### 🎯 Sprint 2 — Dashboard & UX

- [ ] Dashboard de estudos
- [ ] Melhorias de UX e navegação
- [ ] Calendário acadêmico

### 📊 Sprint 3 — Desempenho

- [ ] Estatísticas de desempenho
- [ ] Indicadores de evolução
- [ ] Visão geral da rotina acadêmica

## 📌 Status

> 🔵 **Em desenvolvimento — Sprint 1**

O núcleo de **Matérias** está funcionando e o backend de **Tarefas** já possui modelo, relacionamentos e operações CRUD. O próximo passo é construir a interface de tarefas, depois avançar para provas e, posteriormente, para o dashboard e os recursos de acompanhamento de desempenho.

## 👨‍💻 Autor

**Matheus Augusto Rodrigues de Alencar**

[![GitHub](https://img.shields.io/badge/GitHub-@mathzsw-151A23?style=flat-square&logo=github)](https://github.com/mathzsw)

---

<div align="center">

**StudyHub** · Organize. Estude. Evolua.

⭐ Se você curtir o projeto, acompanhe sua evolução.

</div>
