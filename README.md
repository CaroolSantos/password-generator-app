# Password Generator App

## Descrição

O Password Generator App é uma aplicação para geração, armazenamento e atualização de senhas. O frontend é desenvolvido usando Ionic e o backend é implementado em Java com Spring Boot. A aplicação utiliza um banco de dados MySQL para armazenar as senhas geradas.

## Estrutura do Projeto

- **Frontend**: Ionic 5
- **Backend**: Java 17 com Spring Boot 3.3.1
- **Banco de Dados**: MySQL

## Configuração

### Backend

1. **Clone o Repositório**

   ``
   git clone https://github.com/CaroolSantos/password-generator-app.git
   cd password-generator-app/backend
  ``

2. **Configurar o Banco de Dados**

+ Instale e configure o MySQL.
+ Crie um banco de dados:

  ```
  CREATE DATABASE password_generator_db;
  CREATE USER 'password_user'@'localhost' IDENTIFIED BY 'password';
  GRANT ALL PRIVILEGES ON password_generator_db.* TO 'password_user'@'localhost';
  FLUSH PRIVILEGES;
   ```

3. **Configurar o Spring Boot**

Atualize o arquivo src/main/resources/application.properties com as configurações do banco de dados:

```
spring.datasource.url=jdbc:mysql://localhost:3306/password_generator_db
spring.datasource.username=password_user
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA Configurations
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```

4. **Executar a Aplicação**
   
Compile e execute a aplicação Spring Boot:

`
mvn spring-boot:run
`


### FrontEnd

1. **Instalar Dependências**

Navegue para o diretório do frontend e instale as dependências:

`
cd ../frontend
npm install
`

2. **Executar a Aplicação Ionic**

Inicie o servidor de desenvolvimento:
`
ionic serve
`


### Endpoints da API

Gerar Senha
+ URL: /api/passwords/generate-password
+ Método: POST
+ Descrição: Gera uma nova senha com os parâmetros especificados.
+ Corpo da Requisição:

```
 {
  "length": 12,
  "includeUppercase": true,
  "includeLowercase": true,
  "includeNumbers": true,
  "includeSpecial": false
}
```

+ Resposta:
  ```
  {
  "id": 1,
  "password": "generatedPassword",
  "generatedAt": "2023-07-12T12:34:56.789Z"
  }


Histórico de Senhas
+ URL: /api/passwords/password-history
+ Método: GET
+ Descrição: Retorna o histórico de senhas geradas, ordenadas por ID em ordem decrescente.
+ Resposta:
  ```
  [
  {
    "id": 2,
    "password": "anotherPassword",
    "generatedAt": "2023-07-13T12:34:56.789Z"
  },
  {
    "id": 1,
    "password": "generatedPassword",
    "generatedAt": "2023-07-12T12:34:56.789Z"
  }
  ]


### Parâmetros de Query:

+ length (int): Comprimento da senha.
+ includeUpperCase (bool): Incluir letras maiúsculas.
+ includeNumbers (bool): Incluir números.
+ includeSpecialCharacters (bool): Incluir caracteres especiais.
