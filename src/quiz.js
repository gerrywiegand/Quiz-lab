
const {questions} = require("./data/questions")
const { startCountdown, stopCountdown, TOTAL_MINUTES } = require("./data/timer");
const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function ask(prompt) {
    return new Promise(resolve => rl.question(prompt, resolve))
}

async function runQuiz() {
    console.log("Welcome to my quiz!")
    console.log("-------------------")
        for (const q of questions) {
        console.log(`\nQ${q.id}: ${q.question}`)
        const input = await ask("Your answer: ");
        if(isCorrect(input, q.answer)){
            console.log("Correct!")
            correct.push(q)
        } else {
            console.log(`Wrong. Correct answer: ${q.answer}`)
            wrong.push(q)
        }

            }
       console.log("\n========== RESULTS ==========");
        console.log(`Score: ${correct.length}/${questions.length}`);

            if (correct.length) {
            console.log("\nCorrect answers:");
            correct.forEach(q => console.log(` - Q${q.id}: ${q.question}`));
    }
            if (wrong.length) {
            console.log("\nWrong answers:");
            wrong.forEach(q => console.log(` - Q${q.id}: ${q.question}`));
}
const score = correct.reduce((acc, _) => acc + 1, 0)
console.log(`You scored ${score} out of 10!`)
    if(score >= 10){
        console.log("Perfect Score! Great job!")
    }
    else if(score>= 6){
        console.log("Good Job!")
    }
    else if(score<=5){
        console.log("You'll do better next time!!")
    }
rl.close()
}

let correct = []
let wrong = []

function normalize(s) {
  return String(s).trim().toUpperCase();
}

function isCorrect(input, expected){
    return normalize(input) === normalize(expected);
}





module.exports = { runQuiz };