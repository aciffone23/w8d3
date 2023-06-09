// function Clock() {
//     let time = new Date();
//     this.hours = time.getHours();
//     this.minutes = time.getMinutes();
//     this.seconds = time.getSeconds();
//     this.printTime()
//     setInterval(this._tick.bind(this), 1000);

// }

// // setInterval = function (callback, time) {
// //     looping this amount of time
// //     callback() //this._tick()
// // }
// // window.function() //func style which means we lose context
// // Object.function() //method style which means we keep context 
// // new Function() //constructor style 

// Clock.prototype.printTime = function () {
//     console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
// }

// Clock.prototype._tick = function () {
//     if (this.seconds === 60) {
//         this.seconds = 1;
//         this.minutes += 1;
//     } else {
//         this.seconds += 1; 
//     }

//     if (this.minutes === 59) {
//         this.minutes = 0;
//         this.hours += 1;
//     } 

//     if (this.hours === 24) {
//         this.hours = 0;
//     } 
//     debugger
//     this.printTime();
// }

// const { rawListeners } = require("process");
// // const clock = new Clock();

// const readline = require("readline");
// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallback) {
//     if (numsLeft > 0) {
//         reader.question('Input a number  ' , answer => {
//             addNumbers(sum += parseInt(answer), --numsLeft, completionCallback);
//         })
//     }
//     if (numsLeft === 0) {
//         completionCallback(sum)
//         reader.close()
//     }
// }

// function completionCallback(sum) {
//     return sum
// }

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// Function.prototype.myBind = function(context) {
//     let fn = this
//     return function () {
//         return fn.apply(context)
//     }
        
// }



// class Lamp {
//     constructor() {
//       this.name = "a lamp";
//     }
//   }
  
//   const turnOn = function() {
//     console.log("Turning on " + this.name);
//   }
  
//   const lamp = new Lamp();
  
//   turnOn(); // should not work the way we want it to
  
//   const boundTurnOn = turnOn.bind(lamp);
//   const myBoundTurnOn = turnOn.myBind(lamp);
  
//   boundTurnOn(); // should say "Turning on a lamp"
//   myBoundTurnOn(); // should say "Turning on a lamp"

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Is ${el1} > ${el2}  ` , answer => {
    if (answer.toLowerCase() === "yes") {
        callback(true)
    } else {
        if (answer.toLowerCase() === "no") {
        callback(false)
        } else if (answer.toLowerCase() !== "yes" || answer.toLowerCase() !== "no") {
            console.log("please write yes or no.")
            askIfGreaterThan(el1, el2, callback)
        }
    }})
}



// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([3, 2, 1], function(arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });



