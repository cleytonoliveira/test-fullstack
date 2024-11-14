<div>
  <a href="README.pt.md">🇧🇷 Português</a> |
  <a href="README.en.md">🇺🇸 Inglês</a>
</div>

<h1 align="center">
  <img width="224px"/><br/>
    UOL - Painel de Clientes - Teste Fullstack
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
  <a href="#como-iniciar">Como Iniciar</a> •
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#licença">Licença</a>
</h2>

---

## Visão Geral

Este projeto é um aplicativo de gerenciamento de clientes desenvolvido como um sistema fullstack, com frontend e backend integrados. Ele permite que os usuários visualizem, cadastrem e editem informações de clientes. O frontend fornece uma interface intuitiva e validação de dados, enquanto o backend gerencia a persistência e integridade das informações dos clientes através de uma API. O projeto foi desenvolvido para simular um sistema de CRM básico, sendo uma base sólida para expandir com funcionalidades adicionais em gestão de clientes.

![imagem do projeto em funcionamento](assets/client-management.gif)

<!-- O projeto está hospedado no GitHub e pode ser acessado através do seguinte link: https://github.com/cleytonoliveira/client-management -->

## Como iniciar

1. Clone este repositório em sua máquina local:

```bash
git clone git@github.com:uoldevs/test-fullstack.git
```

2. Navegue até o diretório do projeto:

```bash
cd test-fullstack
```

3. Acesse a branch `cleyton-oliveira-test-fullstack`:

```bash
git checkout cleyton-oliveira-test-fullstack
```

4. Instale as dependências para o backend:

```bash
cd backend
npm install
```

5. Inicie o servidor backend:

```bash
npm start
```

6. Em um novo terminal, instale as dependências para o frontend:

```bash
cd ../frontend
npm install
```

7. Inicie o servidor frontend:

```bash
npm start
```

8. Agora, abra seu navegador e acesse o frontend no endereço indicado pelo terminal (geralmente `http://localhost:5173`), onde você deverá ver o aplicativo de gerenciamento de clientes em execução.

## Funcionalidades

### Páginas

#### Tela inicial

![tela inicial em funcionamento](/assets/tela-inicial.gif)

#### Tela de criação

![tela de criação em funcionamento](/assets/tela-criacao.gif)

#### Tela de edição

![tela de edição em funcionamento](/assets/tela-edicao.gif)

### Rotas

#### POST /customers

Para cadastrar um novo cliente no banco de dados é utilizado a rota POST `/customers`.

```http
POST /customers
Host: localhost:3001
Content-Type: application/json
```

Entrada:

```json
{
  "name": "Jay Doe",
  "email": "jay_doe@test.com",
  "cpf": "054.470.590-46",
  "phone": "(11) 2727-2333",
  "status": "Ativo"
}
```

Saída _(status: 201)_:

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

Para obter a `listagem de clientes` no banco de dados é utilizado a rota GET `/customers`.

```http
GET /customers
Host: localhost:3001
Content-Type: application/json
```

Saída _(status: 200)_:

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

Para obter as `informações específicas` de um cliente no banco de dados é utilizado a rota GET `/customers/:{customerId}`.

```http
GET /customers/5
Host: localhost:3001
Content-Type: application/json
```

Saída _(status: 200)_:

```json
{
  "message": "Customer fetched successfully",
  "data": {
    "id": 5,
    "name": "Jay Doe",
    "email": "jay_doe@test.com",
    "cpf": "054.470.590-46",
    "phone": "(67) 92727-2333",
    "status": "Ativo"
  }
}
```

#### PUT /customers/:{customerId}

Para `atualizar` as informações do cliente no banco de dados é utilizado a rota PUT `/customers/:{customerId}`.

```http
PUT /customers/5
Host: localhost:3001
Content-Type: application/json
```

Entrada:

```json
{
  "name": "Jay Doe",
  "email": "jay_doe@test.com",
  "cpf": "054.470.590-46",
  "phone": "(67) 92727-2333", // Altera o DDD
  "status": "Ativo"
}
```

Saída _(status: 200)_:

```json
{
  "message": "Customer updated successfully",
  "data": {
    "id": 5,
    "name": "Jay Doe",
    "email": "jay_doe@test.com",
    "cpf": "054.470.590-46",
    "phone": "(67) 92727-2333",
    "status": "Ativo"
  }
}
```

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
