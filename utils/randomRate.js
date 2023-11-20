/**
 * @enum {{ gayRate: number, peepeeRate: number, simpRate: number, humourRate: string[], IQRate: number, hornyRate: number, fatRate: number, tallRate: number, gender_rate: number }}
 */
const randomRateConfig = {
    gay_rate: 100,
    peepee_rate: 35,
    simp_rate: 100,
    humour_rate: ['Dark', 'L', 'Emo', 'Depressed', 'Disabled', 'Forbidden', 'Stupid', 'Horny', '9/11', 'Schoolshooter', 'WTF', 'Creative', 'Best', 'W', 'Legendary'],
    IQ_rate: 300,
    horny_rate: 100,
    fat_rate: 1400,
    tall_rate: 8.11,
    gender_rate: 100
}
/**
 * 
 * @param {"gay" | "peepee" | "simp" | "humour" | "IQ" | "horny" | "fat" | "tall" | "gender"} type
 * @param {randomRateConfig} config
 * @return {{type: string, result: {string: string, number: number, differenceString: string, differenceNumber: number}}}
 */
async function randomRate(type, config = randomRateConfig) {
    const randomizeNumber = (number) => Math.floor(Math.random() * number)
    switch (type) {
        case "gay":
            randomValue = randomizeNumber(randomRateConfig[`${type}_rate`])
            return {
                type: `${type}_rate`,
                result: {
                    string: `${randomValue}%`,
                    number: randomValue,
                    differenceString: `${randomRateConfig[`${type}_rate`] - randomValue}%`,
                    differenceNumber: randomRateConfig[`${type}_rate`] - randomValue
                }
            }
        case "peepee":
            randomValue = randomizeNumber(randomRateConfig[`${type}_rate`])
            return {
                type: `${type}_rate`,
                result: {
                    string: `${randomValue} in.`,
                    number: randomValue,
                    differenceString: `${randomRateConfig[`${type}_rate`] - randomValue} in.`,
                    differenceNumber: randomRateConfig[`${type}_rate`] - randomValue
                }
            }
        case "simp":
            randomValue = randomizeNumber(randomRateConfig[`${type}_rate`])
            return {
                type: `${type}_rate`,
                result: {
                    string: `${randomValue}%`,
                    number: randomValue,
                    differenceString: `${randomRateConfig[`${type}_rate`] - randomValue}%`,
                    differenceNumber: randomRateConfig[`${type}_rate`] - randomValue
                }
            }
        case "humour":
            number = randomizeNumber(randomRateConfig[`${type}_rate`].length)
            return {
                type: `${type}_rate`,
                result: {
                    string: `${randomRateConfig[`${type}_rate`][number]} humour`,
                    number: number,
                    differenceNumber: randomRateConfig[`${type}_rate`].length - number
                }
            }
        case "IQ":
        case "horny":
            randomValue = randomizeNumber(randomRateConfig[`${type}_rate`])
            return {
                type: `${type}_rate`,
                result: {
                    string: `${randomValue}%`,
                    number: randomValue,
                    differenceString: `${randomRateConfig[`${type}_rate`] - randomValue}%`,
                    differenceNumber: randomRateConfig[`${type}_rate`] - randomValue
                }
            }
        case "fat":
        case "tall":
        case "gender":
        default:
            throw console.trace('Invalid type!');
    }

}
randomRate('humour').then(console.log)
module.exports = randomRate