let [
        weeklyExpenses,
        monthlyExpenses,
        annualExpenses
    ] = Array(3).fill(0)

let i = weeklyExpenseQuestions.length - 1
while (i >= 0) {
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    console.log(`${weeklyExpenseQuestions[i]}: ${answer}`)
    weeklyExpenses = weeklyExpenses + answer
    i--
}
// for (let i = weeklyExpenseQuestions.length - 1; i >= 0; i--) {
//     let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
//     console.log(`${weeklyExpenseQuestions[i]}: ${answer}`)
//     weeklyExpenses = weeklyExpenses + answer
// }

let j = monthlyExpenseQuestions.length
while (j > 0) {
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[j]))
    console.log(`${monthlyExpenseQuestions[j]}: ${answer}`)
    monthlyExpenses = monthlyExpenses + answer
    j--
}
// for (let i = monthlyExpenseQuestions.length; i > 0; i--) {
//     let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
//     console.log(`${monthlyExpenseQuestions[i]}: ${answer}`)
//     monthlyExpenses = monthlyExpenses + answer
// }

let k = 0
while (k < annualExpenseQuestions.length) {
    let answer = parseFloat(window.prompt(annualExpenseQuestions[k]))
    console.log(`${annualExpenseQuestions[k]}: ${answer}`)
    annualExpenses = annualExpenses + answer
    k++
}

// for (let i = 0; i < annualExpenseQuestions.length; i++) {
//     let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
//     console.log(`${annualExpenseQuestions[i]}: ${answer}`)
//     annualExpenses = annualExpenses + answer
// }

console.log(`Weekly Expenses ${weeklyExpenses}`)
console.log(`Monthly Expenses ${monthlyExpenses}`)
console.log(`Annual Expenses ${annualExpenses}`)