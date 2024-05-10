import inquirer from "inquirer";
async function startTimer() {
    console.log(`Welcome to the Count down timer`);
    const timeInput = await inquirer.prompt({
        type: "input",
        name: "duration",
        message: "Enter the duration in Second"
    });
    const duration = parseInt(timeInput.duration);
    let secondsLeft = duration;
    const timer = setInterval(() => {
        if (secondsLeft > 0) {
            console.clear();
            console.log(`Time remaining ${secondsLeft}`);
            secondsLeft--;
        }
        else {
            clearInterval(timer);
            console.clear();
            console.log(`Timer completed`);
        }
    }, 1000);
}
startTimer();
