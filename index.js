const customSearch = require("./utils/customSearch");
const randomNumber = require("./utils/randomNumber");
const randomTOD = require("./utils/randomTOD");
const shibeOnline = require("./utils/shibeOnline");
const textDatabase = require("./utils/textDatabase")
const getScrambledWordQuestions = require("./utils/getScrambledWordQuestions");
const randomEightBallAnswer = require("./utils/randomEightBallAnswer");
const randomWUR = require("./utils/randomWUR");
const randomRate = require("./utils/randomRate");
const getTriviaQuestions = require('./utils/getTriviaQuestions')

const multiPurpose = {
  customSearch,
  randomNumber,
  randomTOD,
  shibeOnline,
  getScrambledWordQuestions,
  getTriviaQuestions,
  randomEightBallAnswer,
  randomWUR,
  randomRate,
  textDatabase
}

module.exports = multiPurpose