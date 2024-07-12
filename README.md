# Password Generator 

Este projeto é uma API para geração de senhas, desenvolvida com .NET C# e integrada com um frontend Ionic.
Link para o projeto da API: https://github.com/CaroolSantos/password-generator-api

## Descrição

O Password Generator API é uma aplicação backend que oferece uma API RESTful para gerar senhas personalizadas com base em parâmetros fornecidos pelo usuário. A API é construída utilizando .NET C# e está configurada para se conectar a um banco de dados SQL Server. Este projeto é complementado por um frontend desenvolvido em Ionic, que permite aos usuários configurar e gerar senhas através de uma interface amigável.

## Requisitos do Sistema

- .NET SDK 7.0 ou superior
- SQL Server
- Node.js (para o frontend)
- Ionic CLI (para o frontend)

## Configuração do Ambiente
  ### Clonar o Repositório

  1) Clone o repositório do backend:
  ```
  git clone https://github.com/CaroolSantos/password-generator-api.git
  cd password-generator-api
  ```

  2) Clone o repositório do frontend:
  ```
  git clone https://github.com/CaroolSantos/password-generator-app.git
  cd password-generator-app
  ```
  
 ### Configurar o Backend

1) Navegue até o diretório do projeto backend:
  ```
  cd path/to/password-generator-api
```
2) Configure a string de conexão com o banco de dados no arquivo appsettings.json:
  ```
  {
    "ConnectionStrings": {
      "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=PasswordGeneratorDb;Trusted_Connection=True;"
    }
  }
```
3) Restaure as dependências do projeto:
  ```
  dotnet restore
```
4) Aplique as migrações do banco de dados:
  ```bash
  dotnet ef migrations add InitialCreate
  dotnet ef database update
```


### Configurar o Frontend

1) Navegue até o diretório do projeto frontend.
  
2) Instale as dependências do projeto:
```
npm install
```

3) Configure o serviço HTTP para apontar para o backend. No arquivo src/app/services/password.service.ts, defina a URL da API:
```
private apiUrl = 'https://localhost:5001/api/password';
```

## Endpoints da API

+ `POST /api/password/generate`: Gera uma nova senha com as configurações especificadas.

### Parâmetros de Query:

+ length (int): Comprimento da senha.
+ includeUpperCase (bool): Incluir letras maiúsculas.
+ includeNumbers (bool): Incluir números.
+ includeSpecialCharacters (bool): Incluir caracteres especiais.
