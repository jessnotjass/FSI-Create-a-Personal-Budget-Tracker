let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
for (let i = weeklyExpenseQuestions.length - 1; i >= 0; i--) {
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    console.log(`${weeklyExpenseQuestions[i]}: ${answer}`)
    weeklyExpenses = weeklyExpenses + answer
}

for (let i = weeklyExpenseQuestions.length; i >= 0; i--) {
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i - 1]))
    console.log(`${monthlyExpenseQuestions[i]}: ${answer}`)
    monthlyExpenses = monthlyExpenses + answer
}

let i = 0
while (i < annualExpenseQuestions.length) {
    let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    console.log(`${annualExpenseQuestions[i]}: ${answer}`)
    annualExpenses = annualExpenses + answer
    i++
    console.log(i)
}

// for (let i = 0; i < annualExpenseQuestions.length; i++) {
//     let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
//     console.log(`${annualExpenseQuestions[i]}: ${answer}`)
//     annualExpenses = annualExpenses + answer
// }

console.log(`Weekly Expenses ${weeklyExpenses}`)
console.log(`Monthly Expenses ${monthlyExpenses}`)
console.log(`Annual Expenses ${annualExpenses}`)