/**
 * @enum {{ gay_rate: number, peepee_rate: number, simp_rate: number, humour_rate: string[], IQ_rate: number, horny_rate: number, fat_rate: number, tall_rate: number, gender_rate: number, looks_rate: number, grade_rate: [...{letter: string, min: number, max: number}]}}
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
    gender_rate: 100,
    looks_rate: 10,
    grade_rate: [
        { letter: "A+", min: 97, max: 100 },
        { letter: "A", min: 93, max: 96 },
        { letter: "A-", min: 90, max: 92 },
        { letter: "B+", min: 87, max: 89 },
        { letter: "B", min: 83, max: 86 },
        { letter: "B-", min: 79, max: 82 },
        { letter: "C+", min: 77, max: 79 },
        { letter: "C", min: 73, max: 76 },
        { letter: "C-", min: 70, max: 72 },
        { letter: "D+", min: 67, max: 69 },
        { letter: "D", min: 65, max: 66 },
        { letter: "D-", min: 25, max: 64 },
        { letter: "F", min: 0, max: 24 }
    ]
}
/**
 * 
 * @param {"gay" | "peepee" | "simp" | "humour" | "IQ" | "horny" | "fat" | "tall" | "gender" | "looks" | "grade" | "mixed"} type
 * @param {randomRateConfig} config
 * @return {{type: string, result: {string: string, number: number, differenceString: string, differenceNumber: number, maxString: string, maxNumber: number}}}
 */
async function randomRate(type, config = randomRateConfig) {
    const randomizeNumber = (number) => Math.floor(Math.random() * number)
    const randomRange = (min, max) => Math.floor(Math.random() * (max - min) + min)
    switch (type) {
        case "gay":
            randomValue = randomizeNumber(config[`${type}_rate`])
            return {
                type: `${type}_rate`,
                result: {
                    string: `${randomValue}%`,
                    number: randomValue,
                    differenceString: `${config[`${type}_rate`] - randomValue}%`,
                    differenceNumber: config[`${type}_rate`] - randomValue,
                    maxString: `${config[`${type}_rate`]}%`,
                    maxNumber: config[`${type}_rate`]
                }
            }
        case "peepee":
            randomValue = randomizeNumber(config[`${type}_rate`])
            return {
                type: `${type}_rate`,
                result: {
                    string: `${randomValue} in.`,
                    number: randomValue,
                    differenceString: `${config[`${type}_rate`] - randomValue} in.`,
                    differenceNumber: config[`${type}_rate`] - randomValue,
                    maxString: `${config[`${type}_rate`]} in.`,
                    maxNumber: config[`${type}_rate`]
                }
            }
        case "simp":
            randomValue = randomizeNumber(config[`${type}_rate`])
            return {
                type: `${type}_rate`,
                result: {
                    string: `${randomValue}%`,
                    number: randomValue,
                    differenceString: `${config[`${type}_rate`] - randomValue}%`,
                    differenceNumber: config[`${type}_rate`] - randomValue,
                    maxString: `${config[`${type}_rate`]}%`,
                    maxNumber: config[`${type}_rate`]
                }
            }
        case "humour":
            number = randomizeNumber(config[`${type}_rate`].length)
            return {
                type: `${type}_rate`,
                result: {
                    string: `${config[`${type}_rate`][number]} humour`,
                    number: number,
                    differenceNumber: config[`${type}_rate`].length - 1 - number,
                    differenceString: `${config[`${type}_rate`].length - 1 - number} away from the best`,
                    maxString: `${config[`${type}_rate`][config[`${type}_rate`].length - 1]} humour`,
                    maxNumber: config[`${type}_rate`].length
                }
            }
        case "IQ":
            randomValue = randomizeNumber(config[`${type}_rate`])
            return {
                type: `${type}_rate`,
                result: {
                    string: `${randomValue} IQ`,
                    number: randomValue,
                    differenceString: `${config[`${type}_rate`] - randomValue} IQ`,
                    differenceNumber: config[`${type}_rate`] - randomValue,
                    maxString: `${config[`${type}_rate`]} IQ`,
                    maxNumber: config[`${type}_rate`]
                }
            }
        case "horny":
            randomValue = randomizeNumber(config[`${type}_rate`])
            return {
                type: `${type}_rate`,
                result: {
                    string: `${randomValue}%`,
                    number: randomValue,
                    differenceString: `${config[`${type}_rate`] - randomValue}%`,
                    differenceNumber: config[`${type}_rate`] - randomValue,
                    maxString: `${config[`${type}_rate`]}%`,
                    maxNumber: config[`${type}_rate`]
                }
            }
        case "fat":
            randomValue = randomizeNumber(config[`${type}_rate`])
            return {
                type: `${type}_rate`,
                result: {
                    string: `${randomValue} lb (${Math.floor(randomValue / 2.2046)} kg)`,
                    number: randomValue,
                    differenceString: `${config[`${type}_rate`] - randomValue} lb (${Math.floor((config[`${type}_rate`] - randomValue) / 2.2046)} kg)`,
                    differenceNumber: config[`${type}_rate`] - randomValue,
                    maxString: `${config[`${type}_rate`]} lb (${Math.floor(config[`${type}_rate`] / 2.2046)} kg)`,
                    maxNumber: config[`${type}_rate`]
                }
            }
        case "tall":
            randomValue = randomRange(1.79, config[`${type}_rate`])
            return {
                type: `${type}_rate`,
                result: {
                    string: `${randomValue} ft (${Math.floor(randomValue * 30.48)} cm)`,
                    number: randomValue,
                    differenceString: `${Math.floor(config[`${type}_rate`] - randomValue)} ft (${Math.floor((config[`${type}_rate`] - randomValue) * 30.48)} cm)`,
                    differenceNumber: Math.floor(config[`${type}_rate`] - randomValue),
                    maxString: `${config[`${type}_rate`]} ft (${Math.floor(config[`${type}_rate`] * 30.48)} cm)`,
                    maxNumber: config[`${type}_rate`]
                }
            }
        case "gender":
            const masculinePercentage = Math.floor(Math.random() * config[`${type}_rate`]);
            const femininePercentage = Math.floor(Math.random() * config[`${type}_rate`]);
            const differencePercentage = Math.abs(masculinePercentage - femininePercentage);

            return {
                type: `${type}_rate`,
                result: {
                    string: `Total percentage: ${masculinePercentage + femininePercentage}%, result: ${masculinePercentage > femininePercentage ? 'masculine' : 'feminine'} (${masculinePercentage > femininePercentage ? masculinePercentage : femininePercentage}%)`,
                    number: masculinePercentage + femininePercentage,
                    differenceString: `${masculinePercentage}% masculine, ${femininePercentage}% feminine, distant by ${differencePercentage}%`,
                    differenceNumber: differencePercentage,
                    maxString: `${config[`${type}_rate`]}%`,
                    maxNumber: config[`${type}_rate`],
                },
            };
        case "looks":
            randomValue = randomizeNumber(config[`${type}_rate`])
            return {
                type: `${type}_rate`,
                result: {
                    string: `${randomValue}/${config[`${type}_rate`]}`,
                    number: randomValue,
                    differenceString: `${config[`${type}_rate`] - randomValue} points`,
                    differenceNumber: config[`${type}_rate`] - randomValue,
                    maxString: `${config[`${type}_rate`]} points`,
                    maxNumber: config[`${type}_rate`]
                }
            }
        case "grade":
            const maxScore = config[`${type}_rate`][0].max
            randomValue = randomizeNumber(maxScore)
            let result;
            for (const grade of config[`${type}_rate`]) {
                if (grade.min <= randomValue && grade.max >= randomValue) {
                    result = grade
                }
            }
            return {
                type: `${type}_rate`,
                result: {
                    string: `Grade ${result.letter} (${randomValue}/${maxScore})`,
                    number: randomValue,
                    differenceString: `${maxScore - randomValue} away from highest score`,
                    differenceNumber: maxScore - randomValue,
                    maxString: `${maxScore} points`,
                    maxNumber: maxScore
                }
            }
        default:
            throw console.trace('Invalid type!');
    }
}
module.exports = randomRate