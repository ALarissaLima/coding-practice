const fs = require('fs').promises;
const { log } = require('console');
const path = require('path');

async function readSimpsonsData() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../data/simpsons.json'));
    const simpsons = JSON.parse(data);
    const oi = simpsons.map(({ id, name }) => `${id} - ${name}`)
    return oi;
  } catch (e) {
    console.error(`Erro na leitura do arquivo: ${error}`);
  }
}

module.exports = {
  readData: readSimpsonsData
};

async function main() {
  const simpsons = await readSimpsonsData()
  console.log(simpsons);
}

main()