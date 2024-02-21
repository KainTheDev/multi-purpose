const fetch = require('node-fetch');
const he = require('he');

/**
 * For categories list please go here: https://opentdb.com/api_category.php
 * @param {number} questionsAmount 
 * @param {string} category 
 * @param {'easy' | 'medium' | 'hard'} difficulty 
 * @param {'boolean' | 'multiple'} type 
 * @returns 
 */
async function getTriviaQuestions(questionsAmount, category, difficulty, type) {
    // Fetching categories to validate user input
    const categoryResponse = await fetch('https://opentdb.com/api_category.php');
    const categoryData = await categoryResponse.json();

    const categories = categoryData.trivia_categories.map(category => category.name.toLowerCase());

    // Check if the provided difficulty is valid
    const validDifficulty = ['easy', 'medium', 'hard']
    if (!validDifficulty.includes(difficulty)) throw Error('Invalid difficulty. Available difficulties are:\n  ' + validDifficulty.join('\n  '));

    // Check if the provided type is valid
    const validType = ['multiple', 'boolean']
    if(!validType.includes(type)) throw Error('Invalid type. Available type are:\n  ' + validType.join('\n  '))

    // Checking if the provided category is valid
    if (category && !categories.includes(category.toLowerCase())) {
        throw new Error('Invalid category. Available categories are:\n  ' + categories.join('\n   '));
    }

    // Constructing URL with provided parameters
    let apiUrl = `https://opentdb.com/api.php?amount=${questionsAmount}`;
    if (category) apiUrl += `&category=${categoryData.trivia_categories.find(({ name }) => name.toLowerCase() === category).id}`;
    if (difficulty) apiUrl += `&difficulty=${difficulty}`;
    if (type) apiUrl += `&type=${type}`;

    // Fetching trivia questions
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Decoding question, correct answer, incorrect answers, and category
    const decodedResults = data.results.map(result => {
        return {
            ...result,
            question: he.decode(result.question),
            correct_answer: he.decode(result.correct_answer),
            incorrect_answers: result.incorrect_answers.map(answer => he.decode(answer)),
            category: he.decode(result.category)
        };
    });

    return decodedResults;
}

module.exports = getTriviaQuestions