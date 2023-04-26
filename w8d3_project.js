function Clock() {
    let time = new Date();
    this.hours = time.getHours();
    this.minutes = time.getMinutes();
    this.seconds = time.getSeconds();
    this.printTime()
    setInterval(this._tick.bind(this), 1000);

}

// setInterval = function (callback, time) {
//     looping this amount of time
//     callback() //this._tick()
// }
// window.function() //func style which means we lose context
// Object.function() //method style which means we keep context 
// new Function() //constructor style 

Clock.prototype.printTime = function () {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
}

Clock.prototype._tick = function () {
    if (this.seconds === 60) {
        this.seconds = 1;
        this.minutes += 1;
    } else {
        this.seconds += 1; 
    }

    if (this.minutes === 59) {
        this.minutes = 0;
        this.hours += 1;
    } 

    if (this.hours === 24) {
        this.hours = 0;
    } 
    debugger
    this.printTime();
}

const { rawListeners } = require("process");
// const clock = new Clock();

const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question('Input a number  ' , answer => {
            addNumbers(sum += parseInt(answer), --numsLeft, completionCallback);
        })
    }
    if (numsLeft === 0) {
        completionCallback(sum)
        reader.close()
    }
}

function completionCallback(sum) {
    return sum
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));