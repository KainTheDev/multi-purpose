const customSearch = require("./utils/customSearch");
const randomName = require("./utils/randomName");
const randomNumber = require("./utils/randomNumber");
const randomTOD = require("./utils/randomTOD");
const shibeOnline = require("./utils/shibeOnline");
const Database = require("./utils/Database");
const textDatabase = require("./utils/textDatabase")
const getTriviaQuestions = require("./utils/getTriviaQuestions");
const randomEightBallAnswer = require("./utils/randomEightBallAnswer");
const randomWUR = require("./utils/randomWUR");

const multiPurpose = {
  customSearch,
  randomName,
  randomNumber,
  randomTOD,
  shibeOnline,
  Database,
  getTriviaQuestions,
  randomEightBallAnswer,
  randomWUR
}
module.exports = multiPurpose