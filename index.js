const customSearch = require("./utils/customSearch");
const randomNumber = require("./utils/randomNumber");
const randomTOD = require("./utils/randomTOD");
const shibeOnline = require("./utils/shibeOnline");
const textDatabase = require("./utils/textDatabase")
const getScrambledWordQuestions = require("./utils/getScrambledWordQuestions");
const randomEightBallAnswer = require("./utils/randomEightBallAnswer");
const randomWUR = require("./utils/randomWUR");
const randomRate = require("./utils/randomRate");

const multiPurpose = {
  customSearch,
  randomNumber,
  randomTOD,
  shibeOnline,
  getScrambledWordQuestions,
  randomEightBallAnswer,
  randomWUR,
  randomRate,
  textDatabase
}

module.exports = multiPurpose