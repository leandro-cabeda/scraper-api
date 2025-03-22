const axios = require("axios");
const cheerio = require("cheerio");

const BASE_URL =
  "https://webscraper.io/test-sites/e-commerce/static/computers/laptops";
const TOTAL_PAGES = 20; // São 20 páginas, então deixar fixo o valor 20

async function scrapeLenovoLaptops() {
  const laptops = [];

  try {
    // Itera sobre cada página de laptops no site webscraper.io
    for (let page = 1; page <= TOTAL_PAGES; page++) {

      // Monta a URL da página atual
      const url = `${BASE_URL}?page=${page}`;
      console.log(`Analisando página ${page}...`);

      const { data } = await axios.get(url);
      // Carrega o HTML da página em um objeto Cheerio
      const $ = cheerio.load(data);

      // Itera sobre cada laptop na página e extrai as informações relevantes
      $(".col-md-4.col-xl-4.col-lg-4").each((_, el) => {

        const title = $(el).find(".title").attr("title");

        if (title && title.toLowerCase().includes("lenovo")) {
          
          const price = parseFloat(
            $(el).find(".price").text().replace("$", "")
          );

          const description = $(el).find(".description").text().trim();

          const reviews = parseInt(
            $(el).find(".ratings .review-count").text().split(" ")[0]
          );

          const rating = $(el).find('.ratings p[data-rating]').attr('data-rating') || 'N/A';

          const link =
            "https://webscraper.io" + $(el).find(".title").attr("href");
          const image = "https://webscraper.io" + $(el).find("img").attr("src");

          laptops.push({
            title,
            price,
            description,
            reviews,
            rating,
            link,
            image,
          });
        }
      });
    }

    // Ordena os laptops por preço do mais barato ao mais caro
    laptops.sort((a, b) => a.price - b.price);

    console.log(`Total Lenovo encontrados: ${laptops.length}`);

    return laptops;

  } catch (err) {
    console.error(
      "Erro durante o processo de scraping:",
      err.message + "\n" + err.stack || ""
    );
    throw err;
  }
}

module.exports = { scrapeLenovoLaptops };
