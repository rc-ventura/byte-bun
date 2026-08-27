
Conversation with Gemini
crie um readme para meu projeto

🚀 Tecnologias Utilizadas
Frontend: HTML5, CSS3, JavaScript (Vanilla)

Backend: Node.js

Gerenciamento: npm (Node Package Manager)

🛠️ Como Executar o Projeto localmente
Pré-requisitos
Certifique-se de ter o Node.js instalado na sua máquina.

1. Configurando o Backend
Abra o terminal, navegue até a pasta do backend e instale as dependências:

Bash
cd byte-bun/backend
npm install
Configure as variáveis de ambiente necessárias no arquivo .env (caso existam chaves de banco de dados ou portas específicas). Em seguida, inicie o servidor:

Bash
node server.js
2. Rodando o Frontend
O frontend é composto por arquivos estáticos. Para visualizá-lo, você pode:

Abrir diretamente o arquivo byte-bun/frontend/index.html em qualquer navegador web.

Utilizar a extensão Live Server no VSCode para emular um servidor local estático.

📝 Observações
Este projeto foi gerado no contexto de um Projeto Integrador, focado em conectar uma interface de usuário com um backend funcional.
""")


Seu arquivo README (Markdown) está pronto:
[file-tag: code-generated-file-49a4136f-3a8c-408e-a893-a49aa83fcdd9]

Com base na estrutura de pastas que você enviou[cite: 1], identifiquei que se trata de um projeto chamado **Byte Bun** (um Projeto Integrador) e estruturei o arquivo da seguinte maneira:

* **Descrição e Título:** Apresentação básica do projeto.
* **Estrutura de Pastas:** Mapeamento demonstrando a divisão clara entre `/frontend` (HTML, CSS e JS) e `/backend` (Node.js com `server.js` e `.env`)[cite: 1].
* **Tecnologias Utilizadas:** Listagem das ferramentas identificadas (Node.js no backend e HTML/CSS/JS clássico no frontend)[cite: 1].
* **Guia de Instalação/Execução:** Passo a passo prático sobre como dar um `npm install` no backend, rodar o `server.js` e abrir o `index.html`[cite: 1].

Caso queira adicionar mais detalhes sobre o que a aplicação faz (qual o objetivo do app, regras de negócio ou imagens), me avise e eu atualizo o documento!
crie um readme especifico do backend e do frontend

Instale as dependências do projeto:

Bash
npm install
Configure suas variáveis de ambiente no arquivo .env (use um .env.example se existir, ou crie um arquivo .env com a porta, ex: PORT=3000).

Inicie o servidor:

Bash
node server.js
O servidor agora estará escutando as requisições do frontend!
"""

frontend_readme = """# 🎨 Byte Bun - Frontend

Este é o diretório correspondente à Interface de Usuário (UI) do projeto Byte Bun.

O frontend foi desenvolvido com tecnologias web fundamentais (Vanilla), sem a necessidade de frameworks complexos, garantindo leveza e rapidez de execução.

🚀 Tecnologias
HTML5: Estruturação semântica da página (index.html).

CSS3: Estilização, layout e responsividade (style.css).

JavaScript (Vanilla): Lógica de interação com o usuário, manipulação da DOM e consumo da API do backend (script.js).

📁 Estrutura de Arquivos
index.html: Página principal da aplicação.

style.css: Folha de estilos contendo o design da aplicação.

script.js: Script responsável pelo comportamento dinâmico e pela comunicação com o servidor backend.

🛠️ Como Executar
Como este projeto utiliza apenas arquivos web estáticos (HTML/CSS/JS puros), não é necessário um processo de build (compilação) para rodá-lo localmente.

Você tem duas opções para visualizar o projeto:

Opção 1: Execução Direta

Vá até a pasta frontend.

Dê um duplo clique no arquivo index.html para abri-lo diretamente no seu navegador de preferência.

Opção 2: Extensão Live Server (Recomendado)

Abra o projeto no VSCode (Visual Studio Code).

Instale a extensão "Live Server".

Clique com o botão direito sobre o arquivo index.html e selecione "Open with Live Server".

Isso irá gerar um servidor local (ex: http://127.0.0.1:5500), o que é ideal para evitar problemas com requisições CORS ao se comunicar com o backend.

🔗 Conexão com o Backend
Certifique-se de que o backend está rodando simultaneamente (veja as instruções na pasta /backend) para que as chamadas de API feitas no script.js funcionem corretamente.
"""

with open("README-backend.md", "w", encoding="utf-8") as f:
f.write(backend_readme)

with open("README-frontend.md", "w", encoding="utf-8") as f:
f.write(frontend_readme)


Os seus arquivos README para o backend e para o frontend estão prontos:

**README do Backend:**
[file-tag: code-generated-file-bfd76222-3b15-4061-9ffc-12bd92ea9ad7]

**README do Frontend:**
[file-tag: code-generated-file-c0ee2b23-de84-4e0f-a9cb-4d76565b1f80]

Você pode colocar cada um deles dentro de suas respectivas pastas (`byte-bun/backend/README.md` e `byte-bun/frontend/README.md`). Adicionei orientações específicas em cada um, como a importância da extensão *Live Server* no frontend para evitar erros de CORS, e o cuidado com o arquivo `.env` no backend.
adjuste esse readme vc deixou codigo

You stopped this response
adjuste esse readme vc deixou codigo

🛠️ Tecnologias Utilizadas
Backend
Node.js com Express (v5)

CORS para permissão de requisições cross-origin

Dotenv para gerenciamento de variáveis de ambiente

Frontend
HTML5 semântico com elementos de seleção (<select>)

CSS3 estilizado com paleta moderna e responsiva

JavaScript (ES6+) utilizando fetch assíncrono (async/await)

🔌 Endpoints da API (Backend)
A API roda por padrão em http://localhost:3000.

Método	Rota	Descrição
GET	/	Retorna mensagem de status da API ("Byte e Bun API no ar!")
GET	/cardapio	Retorna a lista completa de itens do cardápio
GET	/cardapio/:categoria	Retorna os itens filtrados por categoria (pao, recheio, molho)
POST	/pedido	Recebe as seleções do lanche e calcula o valor total
Exemplo de Payload para POST /pedido:
JSON
{
  "pao": "Frances",
  "recheio": "Carne",
  "molho": "Especial"
}
Exemplo de Resposta:
JSON
{
  "itens": {
    "pao": "Frances",
    "recheio": "Carne",
    "molho": "Especial"
  },
  "total": 9.5
}
📋 Cardápio Disponível
Pães: Francês (R$ 1.50), Integral (R$ 2.00), Ciabatta (R$ 2.50)

Recheios: Frango (R$ 5.00), Carne (R$ 6.50), Vegetariano (R$ 4.00)

Molhos: Maionese (R$ 0.50), Mostarda (R$ 0.50), Especial (R$ 1.50)

🚀 Como Executar o Projeto
1. Backend
Bash
cd byte-bun/backend
npm install
node server.js
O servidor iniciará na porta 3000 (http://localhost:3000).

2. Frontend
Abra o arquivo byte-bun/frontend/index.html em seu navegador ou utilize a extensão Live Server no VS Code (http://localhost:5500).

👤 Autor
Desenvolvido por Rafael Ventura.
"""

with open("README.md", "w", encoding="utf-8") as f:
f.write(main_readme)

print("Main README successfully rewritten!")


```text?code_stdout&code_event_index=3
Main README successfully rewritten!

🌐 Endpoints
Método	Endpoint	Parâmetros / Body	Descrição
GET	/	—	Verifica se a API está online
GET	/cardapio	—	Lista todos os itens do cardápio
GET	/cardapio/:categoria	:categoria (pao, recheio, molho)	Lista apenas os itens da categoria informada
POST	/pedido	{ "pao": "...", "recheio": "...", "molho": "..." }	Calcula o total do pedido
🚀 Como Executar
Entre no diretório:

Bash
cd backend
Instale as dependências:

Bash
npm install
Execute a API:

Bash
npm start
A API estará rodando em http://localhost:3000.
"""

frontend_readme_v2 = """# 🎨 Byte & Bun - Frontend

Interface de usuário interativa para a lanchonete Byte & Bun. Permite ao cliente escolher as opções de pão, recheio e molho com preços atualizados diretamente da API backend.

📌 Funcionalidades
Busca o cardápio dinamicamente via fetch ao carregar a página.

Preenche os seletores (<select>) com opções e preços atualizados em tempo real.

Interface responsiva e minimalista estilizada em CSS puro.

🛠️ Tecnologias
HTML5: Estruturação semântica da calculadora de sanduíche.

CSS3: Layout com caixa estilizada e cores personalizadas (#0f6f6b).

JavaScript (Vanilla): Funções carregarCardapio() e popularSelect() com async/await.

📁 Estrutura
Plaintext
frontend/
├── index.html   # Estrutura principal
├── script.js    # Conexão com a API backend
└── style.css    # Estilos visuais
🚀 Como Executar
Certifique-se de que o backend esteja em execução na porta 3000.

Abra o arquivo index.html diretamente no seu navegador, ou utilize o Live Server no VS Code.
"""

with open("README-backend.md", "w", encoding="utf-8") as f:
f.write(backend_readme_v2)

with open("README-frontend.md", "w", encoding="utf-8") as f:
f.write(frontend_readme_v2)

print("Backend and Frontend READMEs updated successfully!")


```text?code_stdout&code_event_index=4
Backend and Frontend READMEs updated successfully!

Ajustei os arquivos README analisando diretamente o código-fonte real do seu projeto (Byte & Bun - Lanchonete Interativa, desenvolvido pelo Rafael Ventura).

Aqui estão os arquivos atualizados e específicos para cada parte do projeto:

📄 Arquivo Principal:
MD icon
README
 MD 
Open
⚙️ Arquivos Específicos:
Backend: 
MD icon
README-backend
 MD 
Open

Frontend: 
MD icon
README-frontend
 MD 
Open

📋 Conteúdo do README Principal (README.md)
You stopped this response
crie um readme apena do backedn baseado no meu projeto

⚙️ Variáveis de Ambiente (.env)
O servidor utiliza o arquivo .env para configurar permissões de acesso via CORS.

Crie um arquivo .env na raiz da pasta backend com a seguinte variável:

Code snippet
FRONTEND_URL="http://localhost:5500"
Nota: Caso o arquivo .env esteja vazio ou não seja informado, a API adotará por padrão o valor http://localhost:5500 para autorizar chamadas originadas do frontend local.

📌 Documentação dos Endpoints (API Routes)
A API roda por padrão no endereço: http://localhost:3000

1. Verification / Status
Rota: GET /

Descrição: Verifica se a API está online e respondendo adequadamente.

Resposta de Sucesso:

Plaintext
Byte e Bun API no ar!
2. Listar Cardápio Completo
Rota: GET /cardapio

Descrição: Retorna todos os itens disponíveis no cardápio (pães, recheios e molhos).

Resposta de Sucesso (200 OK):

JSON
[
  { "categoria": "pao", "nome": "Frances", "preco": 1.5 },
  { "categoria": "pao", "nome": "Integral", "preco": 2 },
  { "categoria": "pao", "nome": "Ciabatta", "preco": 2.5 },
  { "categoria": "recheio", "nome": "Frango", "preco": 5 },
  { "categoria": "recheio", "nome": "Carne", "preco": 6.5 },
  { "categoria": "recheio", "nome": "Vegetariano", "preco": 4 },
  { "categoria": "molho", "nome": "Maionese", "preco": 0.5 },
  { "categoria": "molho", "nome": "Mostarda", "preco": 0.5 },
  { "categoria": "molho", "nome": "Especial", "preco": 1.5 }
]
3. Filtrar Cardápio por Categoria
Rota: GET /cardapio/:categoria

Descrição: Retorna os itens filtrados de acordo com a categoria informada no parâmetro (pao, recheio ou molho).

Parâmetro de URL: :categoria (ex: pao, recheio, molho)

Exemplo de Requisição: GET /cardapio/pao

Resposta de Sucesso (200 OK):

JSON
[
  { "categoria": "pao", "nome": "Frances", "preco": 1.5 },
  { "categoria": "pao", "nome": "Integral", "preco": 2 },
  { "categoria": "pao", "nome": "Ciabatta", "preco": 2.5 }
]
4. Calcular e Processar Pedido
Rota: POST /pedido

Descrição: Recebe as escolhas de pão, recheio e molho, calcula o preço total do lanche e devolve a confirmação com o valor formatado.

Cabeçalho Requerido: Content-Type: application/json

Corpo da Requisição (Body):

JSON
{
  "pao": "Frances",
  "recheio": "Carne",
  "molho": "Especial"
}
Resposta de Sucesso (200 OK):

JSON
{
  "itens": {
    "pao": "Frances",
    "recheio": "Carne",
    "molho": "Especial"
  },
  "total": 9.5
}
Resposta de Erro (Falta de campos obrigatórios):

JSON
{
  "erro": "Envie pao, recheio e molho"
}
🛠️ Como Executar o Backend Localmente
Pré-requisitos
Node.js (versão 14 ou superior recomendada)

npm (gerenciador de pacotes do Node)

Passo a Passo
Abra o terminal e entre na pasta do backend:

Bash
cd backend
Instale as dependências listadas no package.json:

Bash
npm install
Crie ou ajuste o arquivo .env conforme a sua necessidade de porta/URL do frontend.

Inicie o servidor:

Bash
npm start
# Ou diretamente:
node server.js
O servidor iniciará e exibirá no terminal:

Plaintext
Servidor Rodando em http://localhost:3000
🧪 Exemplos de Teste via cURL
Você pode testar os endpoints diretamente pelo seu terminal:

Checar se está online:

Bash
curl http://localhost:3000/
Buscar cardápio completo:

Bash
curl http://localhost:3000/cardapio
Buscar apenas os molhos:

Bash
curl http://localhost:3000/cardapio/molho
Simular um pedido via POST:

Bash
curl -X POST http://localhost:3000/pedido \\
  -H "Content-Type: application/json" \\
  -d '{"pao": "Ciabatta", "recheio": "Frango", "molho": "Maionese"}'
"""

with open("README-backend.md", "w", encoding="utf-8") as f:
f.write(readme_content)

print("Arquivo README-backend.md gerado com sucesso!")


```text?code_stdout&code_event_index=2
Arquivo README-backend.md gerado com sucesso!

Seu arquivo README específico para o Backend foi gerado com sucesso:

MD icon
README-backend
 MD 
Open
📄 Conteúdo do README gerado:
Markdown
# 🍔 Byte e Bun API - Backend

API RESTful desenvolvida para a lanchonete **Byte e Bun**. O sistema disponibiliza endpoints para consulta de cardápio, filtragem de ingredientes por categoria e cálculo do valor total de pedidos customizados.

**Autor:** Rafael Ventura  
**Versão:** 1.0.0  

---

## 🚀 Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript no servidor.
* **[Express](https://expressjs.com/):** Framework web para criação das rotas e servidor HTTP (versão `5.2.1`).
* **[CORS](https://www.npmjs.com/package/cors):** Middleware para permitir requisições de origens cruzadas (comunicação segura com o frontend).
* **[Dotenv](https://www.npmjs.com/package/dotenv):** Gerenciamento de variáveis de ambiente via arquivo `.env`.

---

## 📁 Estrutura de Arquivos do Backend

```text
backend/
├── .env                # Configurações de variáveis de ambiente (ex: FRONTEND_URL)
├── package.json        # Dependências do projeto e scripts de execução
├── package-lock.json   # Trava de versões das dependências
└── server.js           # Ponto de entrada, configuração das rotas e lógica dos pedidos
⚙️ Variáveis de Ambiente (.env)
O servidor utiliza o arquivo .env para configurar permissões de acesso via CORS.

Crie um arquivo .env na raiz da pasta backend com a seguinte variável:

Code snippet
FRONTEND_URL="http://localhost:5500"
Nota: Caso o arquivo .env esteja vazio ou não seja informado, a API adotará por padrão o valor http://localhost:5500 para autorizar chamadas originadas do frontend local.

📌 Documentação dos Endpoints (API Routes)
A API roda por padrão no endereço: http://localhost:3000

1. Verification / Status
Rota: GET /

Descrição: Verifica se a API está online e respondendo adequadamente.

Resposta de Sucesso:

Plaintext
Byte e Bun API no ar!
2. Listar Cardápio Completo
Rota: GET /cardapio

Descrição: Retorna todos os itens disponíveis no cardápio (pães, recheios e molhos).

Resposta de Sucesso (200 OK):

JSON
[
  { "categoria": "pao", "nome": "Frances", "preco": 1.5 },
  { "categoria": "pao", "nome": "Integral", "preco": 2 },
  { "categoria": "pao", "nome": "Ciabatta", "preco": 2.5 },
  { "categoria": "recheio", "nome": "Frango", "preco": 5 },
  { "categoria": "recheio", "nome": "Carne", "preco": 6.5 },
  { "categoria": "recheio", "nome": "Vegetariano", "preco": 4 },
  { "categoria": "molho", "nome": "Maionese", "preco": 0.5 },
  { "categoria": "molho", "nome": "Mostarda", "preco": 0.5 },
  { "categoria": "molho", "nome": "Especial", "preco": 1.5 }
]
3. Filtrar Cardápio por Categoria
Rota: GET /cardapio/:categoria

Descrição: Retorna os itens filtrados de acordo com a categoria informada no parâmetro (pao, recheio ou molho).

Parâmetro de URL: :categoria (ex: pao, recheio, molho)

Exemplo de Requisição: GET /cardapio/pao

Resposta de Sucesso (200 OK):

JSON
[
  { "categoria": "pao", "nome": "Frances", "preco": 1.5 },
  { "categoria": "pao", "nome": "Integral", "preco": 2 },
  { "categoria": "pao", "nome": "Ciabatta", "preco": 2.5 }
]
4. Calcular e Processar Pedido
Rota: POST /pedido

Descrição: Recebe as escolhas de pão, recheio e molho, calcula o preço total do lanche e devolve a confirmação com o valor formatado.

Cabeçalho Requerido: Content-Type: application/json

Corpo da Requisição (Body):

JSON
{
  "pao": "Frances",
  "recheio": "Carne",
  "molho": "Especial"
}
Resposta de Sucesso (200 OK):

JSON
{
  "itens": {
    "pao": "Frances",
    "recheio": "Carne",
    "molho": "Especial"
  },
  "total": 9.5
}
Resposta de Erro (Falta de campos obrigatórios):

JSON
{
  "erro": "Envie pao, recheio e molho"
}
🛠️ Como Executar o Backend Localmente
Pré-requisitos
Node.js (versão 14 ou superior recomendada)

npm (gerenciador de pacotes do Node)

Passo a Passo
Abra o terminal e entre na pasta do backend:

Bash
cd backend
Instale as dependências listadas no package.json:

Bash
npm install
Crie ou ajuste o arquivo .env conforme a sua necessidade de porta/URL do frontend.

Inicie o servidor:

Bash
npm start
# Ou diretamente:
node server.js
O servidor iniciará e exibirá no terminal:

Plaintext
Servidor Rodando em http://localhost:3000
🧪 Exemplos de Teste via cURL
Você pode testar os endpoints diretamente pelo seu terminal:

Checar se está online:

Bash
curl http://localhost:3000/
Buscar cardápio completo:

Bash
curl http://localhost:3000/cardapio
Buscar apenas os molhos:

Bash
curl http://localhost:3000/cardapio/molho
Simular um pedido via POST:

Bash
curl -X POST http://localhost:3000/pedido \
  -H "Content-Type: application/json" \
  -d '{"pao": "Ciabatta", "recheio": "Frango", "molho": "Maionese"}'

Você pode salvar esse arquivo como `README.md` diretamente dentro da pasta `backend/` do seu projeto!



Your SENAI-SC Serviço Nacional de Aprendizagem Industrial chats aren’t used to improve our models. Gemini is AI and can make mistakes. Your privacy & GeminiOpens in a new window

# 🍔 Byte e Bun API - Backend

API RESTful desenvolvida para a lanchonete **Byte e Bun**. O sistema disponibiliza endpoints para consulta de cardápio, filtragem de ingredientes por categoria e cálculo do valor total de pedidos customizados.

**Autor:** Rafael Ventura  
**Versão:** 1.0.0  

---

## 🚀 Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript no servidor.
* **[Express](https://expressjs.com/):** Framework web para criação das rotas e servidor HTTP (versão `5.2.1`).
* **[CORS](https://www.npmjs.com/package/cors):** Middleware para permitir requisições de origens cruzadas (comunicação segura com o frontend).
* **[Dotenv](https://www.npmjs.com/package/dotenv):** Gerenciamento de variáveis de ambiente via arquivo `.env`.

---

## 📁 Estrutura de Arquivos do Backend

```text
backend/
├── .env                # Configurações de variáveis de ambiente (ex: FRONTEND_URL)
├── package.json        # Dependências do projeto e scripts de execução
├── package-lock.json   # Trava de versões das dependências
└── server.js           # Ponto de entrada, configuração das rotas e lógica dos pedidos
```

---

## ⚙️ Variáveis de Ambiente (`.env`)

O servidor utiliza o arquivo `.env` para configurar permissões de acesso via CORS. 

Crie um arquivo `.env` na raiz da pasta `backend` com a seguinte variável:

```env
FRONTEND_URL="http://localhost:5500"
```

> **Nota:** Caso o arquivo `.env` esteja vazio ou não seja informado, a API adotará por padrão o valor `http://localhost:5500` para autorizar chamadas originadas do frontend local.

---

## 📌 Documentação dos Endpoints (API Routes)

A API roda por padrão no endereço: `http://localhost:3000`

### 1. Verification / Status
* **Rota:** `GET /`
* **Descrição:** Verifica se a API está online e respondendo adequadamente.
* **Resposta de Sucesso:**
  ```text
  Byte e Bun API no ar!
  ```

---

### 2. Listar Cardápio Completo
* **Rota:** `GET /cardapio`
* **Descrição:** Retorna todos os itens disponíveis no cardápio (pães, recheios e molhos).
* **Resposta de Sucesso (200 OK):**
  ```json
  [
    { "categoria": "pao", "nome": "Frances", "preco": 1.5 },
    { "categoria": "pao", "nome": "Integral", "preco": 2 },
    { "categoria": "pao", "nome": "Ciabatta", "preco": 2.5 },
    { "categoria": "recheio", "nome": "Frango", "preco": 5 },
    { "categoria": "recheio", "nome": "Carne", "preco": 6.5 },
    { "categoria": "recheio", "nome": "Vegetariano", "preco": 4 },
    { "categoria": "molho", "nome": "Maionese", "preco": 0.5 },
    { "categoria": "molho", "nome": "Mostarda", "preco": 0.5 },
    { "categoria": "molho", "nome": "Especial", "preco": 1.5 }
  ]
  ```

---

### 3. Filtrar Cardápio por Categoria
* **Rota:** `GET /cardapio/:categoria`
* **Descrição:** Retorna os itens filtrados de acordo com a categoria informada no parâmetro (`pao`, `recheio` ou `molho`).
* **Parâmetro de URL:** `:categoria` (ex: `pao`, `recheio`, `molho`)
* **Exemplo de Requisição:** `GET /cardapio/pao`
* **Resposta de Sucesso (200 OK):**
  ```json
  [
    { "categoria": "pao", "nome": "Frances", "preco": 1.5 },
    { "categoria": "pao", "nome": "Integral", "preco": 2 },
    { "categoria": "pao", "nome": "Ciabatta", "preco": 2.5 }
  ]
  ```

---

### 4. Calcular e Processar Pedido
* **Rota:** `POST /pedido`
* **Descrição:** Recebe as escolhas de pão, recheio e molho, calcula o preço total do lanche e devolve a confirmação com o valor formatado.
* **Cabeçalho Requerido:** `Content-Type: application/json`
* **Corpo da Requisição (Body):**
  ```json
  {
    "pao": "Frances",
    "recheio": "Carne",
    "molho": "Especial"
  }
  ```
* **Resposta de Sucesso (200 OK):**
  ```json
  {
    "itens": {
      "pao": "Frances",
      "recheio": "Carne",
      "molho": "Especial"
    },
    "total": 9.5
  }
  ```
* **Resposta de Erro (Falta de campos obrigatórios):**
  ```json
  {
    "erro": "Envie pao, recheio e molho"
  }
  ```

---

## 🛠️ Como Executar o Backend Localmente

### Pré-requisitos
* **Node.js** (versão 14 ou superior recomendada)
* **npm** (gerenciador de pacotes do Node)

### Passo a Passo

1. Abra o terminal e entre na pasta do backend:
   ```bash
   cd backend
   ```

2. Instale as dependências listadas no `package.json`:
   ```bash
   npm install
   ```

3. Crie ou ajuste o arquivo `.env` conforme a sua necessidade de porta/URL do frontend.

4. Inicie o servidor:
   ```bash
   npm start
   # Ou diretamente:
   node server.js
   ```

5. O servidor iniciará e exibirá no terminal:
   ```text
   Servidor Rodando em http://localhost:3000
   ```

---

## 🧪 Exemplos de Teste via cURL

Você pode testar os endpoints diretamente pelo seu terminal:

* **Checar se está online:**
  ```bash
  curl http://localhost:3000/
  ```

* **Buscar cardápio completo:**
  ```bash
  curl http://localhost:3000/cardapio
  ```

* **Buscar apenas os molhos:**
  ```bash
  curl http://localhost:3000/cardapio/molho
  ```

* **Simular um pedido via POST:**
  ```bash
  curl -X POST http://localhost:3000/pedido \
    -H "Content-Type: application/json" \
    -d '{"pao": "Ciabatta", "recheio": "Frango", "molho": "Maionese"}'
  ```
README-backend.md
Displaying README-backend.md.