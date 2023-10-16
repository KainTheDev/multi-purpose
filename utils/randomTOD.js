const fs = require('fs');
const path = require('path');
/**
 * 
 * @param {Number} maxValues configure how much truths or dares will be fetched
 * @param {Boolean} onlyTruth returns only truths option
 * @param {Boolean} onlyDare returns only dares option
 * @returns 
 */
async function randomTOD(maxValues = 1, onlyTruth = false, onlyDare = false) {
  try {
    let allTruthsAndDares = [];

    if (!onlyDare) {
      for (maxValues)
    }

    if (!onlyTruth) {
      const dareData = fs.readFileSync(dareFilePath, 'utf-8');
      const dares = dareData.split('\n').map(line => line.trim()).filter(line => line !== '');
      allTruthsAndDares = allTruthsAndDares.concat(dares);
    }

    if (maxValues > allTruthsAndDares.length) {
      console.trace(`Max values (${maxValues}) exceed the number of available truths and dares (${allTruthsAndDares.length}).`), process.exit(0);
    }

    const shuffledTruthsAndDares = shuffleArray(allTruthsAndDares);
    const selectedTruthsAndDares = shuffledTruthsAndDares.slice(0, maxValues);
    return selectedTruthsAndDares;
  } catch (error) {
    console.trace('Error reading the files: ' + error.message), process.exit(0);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
module.exports = randomTOD;
