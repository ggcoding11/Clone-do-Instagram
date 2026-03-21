# 📸 Clone do Instagram

Um projeto fullstack inspirado no **Instagram**, com funcionalidades essenciais de uma rede social, como autenticação de usuários, criação de posts e interação.

## 📌 Índice

* [Tecnologias utilizadas](#-tecnologias-utilizadas)
* [Modo de usar](#-modo-de-usar)
* [Funcionalidades](#-funcionalidades)
* [Estrutura do projeto](#-estrutura-do-projeto)

---

## 🔨 Tecnologias utilizadas

### Frontend

![Static Badge](https://img.shields.io/badge/React-61DAFB?style=for-the-badge\&logo=react\&labelColor=black)

![Static Badge](https://img.shields.io/badge/Bootstrap-%237952B3?style=for-the-badge\&logo=bootstrap\&labelColor=black)

![Static Badge](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge\&logo=javascript\&labelColor=black)

---

### Backend

![Static Badge](https://img.shields.io/badge/Java-%23ED8B00?style=for-the-badge\&logo=openjdk\&labelColor=black)

![Static Badge](https://img.shields.io/badge/Spring_Boot-%236DB33F?style=for-the-badge\&logo=springboot\&labelColor=black)

![Static Badge](https://img.shields.io/badge/PostgreSQL-%23316192?style=for-the-badge\&logo=postgresql\&labelColor=black)

---

## 📖 Modo de usar

### 🔧 Pré-requisitos

Antes de começar, você vai precisar ter instalado na sua máquina:

* Node.js
* Java 17+
* PostgreSQL
* Maven

---

### ▶️ Rodando o projeto

#### 1. Clone o repositório

```bash
git clone https://github.com/ggcoding11/Clone-do-Instagram.git
```

#### 2. Backend (Spring Boot)

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Configure o `application.properties` com suas credenciais do PostgreSQL.

---

#### 3. Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

---

## 💻 Funcionalidades

* 📰 Feed de publicações
* 🎨 Interface inspirada mo Instagram (layout e design)
* 📱 Stories com visualização
---

## 🗂 Estrutura do projeto

```
Clone-do-Instagram/
│
├── backend/        # API em Spring Boot
│
├── frontend/       # Interface em React
│
└── README.md
```

## 📌 Observações

Este projeto foi desenvolvido com fins educacionais, com o objetivo de praticar:

* Integração entre frontend e backend
* Autenticação de usuários
* Manipulação de banco de dados
* Estruturação de aplicações fullstack
