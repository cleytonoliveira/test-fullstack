<div>
  <a href="README.en.md">🇺🇸 English</a> |
  <a href="README.pt.md">🇧🇷 Portuguese</a>
</div>

<h1 align="center">
  <img width="224px"/><br/>
    UOL - Client Dashboard - Fullstack Test
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-5.6.3-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-20.15.0-green?style=for-the-badge&logo=node.js" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-4.21.1-lightgrey?style=for-the-badge&logo=express" alt="Express" />
  <img src="https://img.shields.io/badge/SQLite-5.1.7-lightblue?style=for-the-badge&logo=sqlite" alt="SQLite" />
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.14-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-5.4.10-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge" alt="MIT License" />
</p>

<h2 align="center">
  <a href="#getting-started">Getting Started</a> •
  <a href="#features">Features</a> •
  <a href="#license">License</a>
</h2>

---

## Overview

This project is a client management application developed as a fullstack system with integrated frontend and backend. It allows users to view, register, and edit client information. The frontend provides an intuitive interface with data validation, while the backend manages client data persistence and integrity via an API. The project simulates a basic CRM system and serves as a solid foundation for expanding with additional client management features.

![project in action](assets/client-management.gif)

<!-- The project is hosted on GitHub and can be accessed through the following link: https://github.com/cleytonoliveira/client-management -->

## Getting Started

1. Clone this repository to your local machine:

```bash
git clone git@github.com:uoldevs/test-fullstack.git
```

2. Navigate to the project directory:

```bash
cd test-fullstack
```

3. Checkout the `cleyton-oliveira-test-fullstack` branch:

```bash
git checkout cleyton-oliveira-test-fullstack
```

4. Install the dependencies for the backend:

```bash
cd backend
npm install
```

5. Start the backend server:

```bash
npm start
```

6. In a new terminal, install the dependencies for the frontend:

```bash
cd ../frontend
npm install
```

7. Start the frontend server:

```bash
npm start
```

8. Now, open your browser and access the frontend at the address indicated by the terminal (usually http://localhost:5173), where you should see the client management app running.

## Features

### Pages

#### Home Screen

![Home screen in action](/assets/tela-inicial.gif)

#### Creation Screen

![Creation screen in action](/assets/tela-criacao.gif)

#### Edit Screen

![Edit screen in action](/assets/tela-edicao.gif)

### Routes

#### POST /customers

To register a new customer in the database, use the POST `/customers` route.

```http
POST /customers
Host: localhost:3001
Content-Type: application/json
```

Request:

```json
{
  "name": "Jay Doe",
  "email": "jay_doe@test.com",
  "cpf": "054.470.590-46",
  "phone": "(11) 2727-2333",
  "status": "Ativo"
}
```

Response _(status: 201)_:

```json
{
  "message": "Customer created successfully",
  "data": {
    "id": 5,
    "name": "Jay Doe",
    "email": "jay_doe@test.com",
    "cpf": "054.470.590-46",
    "phone": "(11) 9931-9909",
    "status": "Ativo"
  }
}
```

#### GET /customers

To retrieve the list of customers from the database, use the GET /customers route.

```http
GET /customers
Host: localhost:3001
Content-Type: application/json
```

Response _(status: 200)_:

```json
{
  "message": "Customers fetched successfully",
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john_doe@test.com",
      "cpf": "123.456.789-00",
      "phone": "(11) 99998-8745",
      "status": "Ativo"
    },
    {
      "id": 2,
      "name": "Jane Doe",
      "email": "jane_doe@test.com",
      "cpf": "987.654.321-00",
      "phone": "(11) 99998-8745",
      "status": "Inativo"
    },
    {
      "id": 3,
      "name": "Jack Doe",
      "email": "jack_doe@test.com",
      "cpf": "456.789.123-00",
      "phone": "(11) 99998-8745",
      "status": "Aguardando ativação"
    },
    {
      "id": 4,
      "name": "Jill Doe",
      "email": "jill_doe@test.com",
      "cpf": "789.123.456-00",
      "phone": "(11) 99998-8745",
      "status": "Desativado"
    },
    {
      "id": 5,
      "name": "Jay Doe",
      "email": "jay_doe@test.com",
      "cpf": "054.470.590-46",
      "phone": "(67) 92727-2333",
      "status": "Ativo"
    }
  ]
}
```

#### GET /customers/:{customerId}

To retrieve specific customer information from the database, the route `GET /customers/:{customerId}` is used.

```http
GET /customers/5
Host: localhost:3001
Content-Type: application/json
```

Response _(status: 200)_:

```json
{
  "message": "Customer fetched successfully",
  "data": {
    "id": 5,
    "name": "Jay Doe",
    "email": "jay_doe@test.com",
    "cpf": "054.470.590-46",
    "phone": "(67) 92727-2333",
    "status": "Active"
  }
}
```

#### PUT /customers/:{customerId}

To update customer information in the database, the route `PUT /customers/:{customerId}` is used.

```http
PUT /customers/5
Host: localhost:3001
Content-Type: application/json
```

Request:

```json
{
  "name": "Jay Doe",
  "email": "jay_doe@test.com",
  "cpf": "054.470.590-46",
  "phone": "(67) 92727-2333", // Changes the area code
  "status": "Active"
}
```

Response _(status: 200)_:

```json
{
  "message": "Customer updated successfully",
  "data": {
    "id": 5,
    "name": "Jay Doe",
    "email": "jay_doe@test.com",
    "cpf": "054.470.590-46",
    "phone": "(67) 92727-2333",
    "status": "Active"
  }
}
```

## License

This project is licensed under the [MIT License](LICENSE).
