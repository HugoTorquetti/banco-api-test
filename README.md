# 🧪 Banco API Test

Projeto de automação de testes para a API REST do repositório https://github.com/juliodelimas/banco-api.

## 📌 Objetivo

Este projeto tem como objetivo validar o comportamento da API REST do sistema bancário, checando se suas funcionalidades estão funcionando corretamente por meio de testes automatizados.

Os testes cobrem operações como autenticação, transferências e demais endpoints protegidos e públicos da API.

---

## 🚀 Stack utilizada

- **JavaScript (Node.js)**
- **Mocha** → Framework de testes
- **Chai** → Biblioteca de asserções
- **Supertest** → Testes de API HTTP
- **Mochawesome** → Geração de relatórios em HTML
- **Dotenv** → Gerenciamento de variáveis de ambiente

---

## 📂 Estrutura do projeto

banco-api-test/
│
├── fixtures/                     # Massa de dados para os testes
│   ├── postLogin.json
│   └── postTransferencias.json
│
├── helpers/                     # Funções auxiliares
│   └── autenticacao.js
│
├── test/                        # Arquivos de testes
│   ├── login.test.js
│   └── transferencia.test.js
│
├── mochawesome-report/          # Relatórios HTML gerados automaticamente pelos testes
│
├── .env                         # Variáveis de ambiente (não versionado)
├── .gitignore
├── package.json
├── package-lock.json

---

## ⚙️ Configuração do ambiente

### 1. Clonar o repositório

```bash
git clone https://github.com/HugoTorquetti/banco-api-test.git
cd banco-api-test
```

### 2. Instalar dependências

```bash
npm install
```

---

## 🔐 Configuração do `.env`

Este projeto utiliza variáveis de ambiente para definir a URL base da API.

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
BASE_URL=http://localhost:3000
```

> ⚠️ Certifique-se de que a API esteja rodando nesse endereço antes de executar os testes.

---

## ▶️ Execução dos testes

Para rodar os testes:

```bash
npm test
```

---

## 📊 Relatórios com Mochawesome

Após a execução dos testes, um relatório em HTML será gerado automaticamente no diretório:

/mochawesome-report

Para visualizar o relatório:

1. Acesse a pasta `mochawesome-report`
2. Abra o arquivo `.html` no navegador

Exemplo:

mochawesome-report/mochawesome.html

---

## 📚 Documentações utilizadas

- Mocha: https://mochajs.org/
- Chai: https://www.chaijs.com/
- Supertest: https://github.com/ladjs/supertest
- Mochawesome: https://github.com/adamgruber/mochawesome
- Dotenv: https://github.com/motdotla/dotenv

---

## 📎 Observações

- O projeto depende da API estar ativa e acessível via `BASE_URL`
- O arquivo `.env` não é versionado por segurança
- Os relatórios são gerados automaticamente a cada execução dos testes e podem ser sobrescritos
