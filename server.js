const express = require('express');
const cors = require('cors');
const { scrapeLenovoLaptops } = require('./scraper');

const app = express();
app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
  res.send('API de scraping de laptops Lenovo');
});

app.get('/lenovo-laptops', async (req, res) => {
  try {
    const laptops = await scrapeLenovoLaptops();
    res.json(laptops);

  } catch (error) {
    res.status(500).json({ message: 'Falha ao obter os laptops Lenovo do site webscraper.io', 
        error: error.message + ", " + error.stack || '' });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server está rodando na porta ${PORT}`);
});
