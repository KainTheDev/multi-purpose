const { default: fetch } = require("node-fetch");

/**
 * Get questions for scrambled words game.
 * @param {object} config Configuration parameter.
 * @param {number} config.words Number of questions that are going to be generated.
 */
async function getScrambledWordQuestions(config = { words: 10 }) {
    if (typeof config.words !== 'number') throw console.trace("Parameter 'words' must be a number");

    const response = await fetch(`https://random-word-api.vercel.app/api?words=${config.words}`);
    if (!response.ok) {
        throw console.trace(`Failed to fetch words. Status: ${response.status}`);
    }

    const words = await response.json();

    // Scramble the words
    const scrambledWords = words.map(word => {
        const scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
        return { word, scrambled };
    });

    return scrambledWords;
}

module.exports = getScrambledWordQuestions;
