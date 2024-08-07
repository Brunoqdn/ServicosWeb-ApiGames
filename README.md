# API de Games

Esta é uma API simples de games que permite realizar operações CRUD (Create, Read, Update, Delete) utilizando Node.js, MySQL e JWT para autenticação.

Pré-requisitos:

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js (versão 14 ou superior)
- MySQL Server
- Um editor de texto ou IDE de sua preferência

Instale as dependências: npm install

Configuração do Banco de Dados

Crie um banco de dados MySQL com o nome que preferir:

- Execute o script SQL para criar as tabelas e inserir dados iniciais.

- Substitua seu_usuario pelo seu usuário do MySQL e digite sua senha quando solicitado.

Variáveis de Ambiente:

- Renomeie o arquivo .env_test para .env e ajuste as variáveis de ambiente conforme necessário:

Uso da API:
A API se encontra na seguinte documentação: https://documenter.getpostman.com/view/37283258/2sA3rzJXU4

Obs: É necessário criar um usuário no /register, após isso, utilizar o /log para obter o token e seguir utilizando ele para os outros endpoints.
