/**
 * @enum {{ gayRate: 100, peepeeRate: 35, simpRate: 100, humourRate: ['Dark', 'L', 'W', 'Emo', 'Depressed', 'Disabled', 'Forbidden', '9/11', 'Schoolshooter', 'WTF', 'Stupid', 'Best', 'Horny', 'Legendary'], IQRate: 300, hornyRate: 100, fatRate: 1400, tallRate: 8.11, feminineRate: 100, masculineRate: 100 }}
 */
const randomRateConfig = {
    gayRate: 100,
    peepeeRate: 35,
    simpRate: 100,
    humourRate: ['Dark', 'L', 'Emo', 'Depressed', 'Disabled', 'Forbidden', 'Stupid', 'Horny', '9/11', 'Schoolshooter', 'WTF', 'Creative', 'Best', 'W', 'Legendary'],
    IQRate: 300,
    hornyRate: 100,
    fatRate: 1400,
    tallRate: 8.11,
    feminineRate: 100,
    masculineRate: 100
}
/**
 * 
 * @param {"gay" | "peepee" | "simp" | "humour" | "IQ" | "horny" | "fat" | "tall" | "feminine" | "masculine"} type
 * @param {randomRateConfig} config
 * @return {{type: string, result: {string: string, number: number, comparedNumber: number}}}
 */
function randomRate(type, config = randomRateConfig) {
    switch (type) {
        case "gay":
        case "peepee":
        case "simp":
        case "humour":
        case "IQ":
        case "horny":
        case "fat":
        case "tall":
        case "feminine":
        case "masculine":
    }

}
module.exports = randomRate