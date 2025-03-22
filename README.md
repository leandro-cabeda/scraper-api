# API Scraper - Notebooks Lenovo

Esta API faz a extração dos dados dos notebooks da marca **Lenovo** a partir do site de testes da WebScraper:

[https://webscraper.io/test-sites/e-commerce/static/computers/laptops](https://webscraper.io/test-sites/e-commerce/static/computers/laptops)

Os produtos são retornados em ordem de preço, do **mais barato para o mais caro**, com todas as informações disponíveis.

## Tecnologias utilizadas

- **Node.js**
- **Express**
- **Axios** (para requisições HTTP)
- **Cheerio** (para parsear o HTML)
- **CORS** (para permitir o consumo por outros serviços)

## Como rodar o projeto

1. Clone o repositório:

- git clone https://github.com/seu-usuario/scraper-api.git

2. Entre na pasta e executa os comandos
cd lenovo-scraper-api
npm install
npm start

3. Acesso url da api local
GET http://localhost:3000/lenovo-laptops

4. Quais dados são coletados?
- Para cada notebook Lenovo encontrado, a API retorna:

- **Título**
- **Preço**
- **Descrição**
- **Quantidade de reviews**
- **Rating**
- **Link do produto**
- **Imagem**


## Funcionalidade principal

- A API acessa **todas as 20 páginas** do site.
- Coleta todos os notebooks da marca **Lenovo**.
- Retorna os dados em **JSON**.
- Ordena os produtos do **mais barato para o mais caro**.
- Pode ser consumida por qualquer outro serviço (RESTful).

