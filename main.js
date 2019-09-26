/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 *
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
 */
const dates = [
	['01.01.2000', '01.01.2016'],
	['01.01.2016', '01.08.2016'],
	['01.11.2015', '01.02.2017'],
	['17.12.2016', '16.01.2017'],
	['01.01.2016', '01.01.2016'],
	['28.02.2015', '13.04.2018'],
	['28.01.2015', '28.02.2015'],
	['17.03.2022', '17.03.2023'],
	['17.02.2024', '17.02.2025']
]

// Receive string of dates one after each other
function outputDate(dates) {
	const second = 1000
	const minute = second * 60
	const hour = minute * 60
	const day = hour * 24
	const week = day * 7
	const month = week * 4
	const year = month * 12
	const oneYear = 365
	const oneMonth = 30

	const convertDate = toDate => {
		let datePart = toDate.split('.')
		return new Date(datePart[2], datePart[1] - 1, datePart[0])
	}
	const calcDate = dates.reduce((prevDate, currentDate) => {
		let dateDiff =
			convertDate(currentDate).getTime() - convertDate(prevDate).getTime()
		const days = Math.ceil(dateDiff / day)
		const years =
			Math.floor(days / oneYear) === 1
				? `${Math.floor(days / oneYear)} year, `
				: Math.floor(days / oneYear) > 1
				? `${Math.floor(days / oneYear)} years, `
				: ''
		const months =
			(Math.floor((days % oneYear) / oneMonth) === 1 && years !== '') ||
			days === 31
				? `${Math.floor((days % oneYear) / oneMonth)} month, `
				: Math.floor((days % oneYear) / oneMonth) > 1
				? `${Math.floor((days % oneYear) / oneMonth)} months, `
				: ''
		return `${years}${months}total ${days} days`
	})
	return calcDate
}
