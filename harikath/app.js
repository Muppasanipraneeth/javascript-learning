// function sum(num1,num2,fnTocall){
//     let ans= num1+num2;
//     return fnTocall(ans);
// }
// let num1=11;
// let num2=20;
// function displayans(ans){
//     console.log(" the sum of the answer is",ans);

// }
// sum(num1,num2,displayans);// call backs
// // console.log(displayans(sum(num1,num2)));
// // setTimeout(sum(num1,num2,displayans),10*1000);
// setInterval(sum(num1,num2,displayans),1*1000);
// Define your functions
// function sum(num1, num2) {
//     return num1 + num2;
// }

// function displayans(ans) {
//     console.log("Sum of numbers is", ans);
// }

// // Call setInterval with an anonymous function that calls the function with arguments
// setInterval(function() {
//     // Call sum and displayans within the anonymous function
//     let num1 = 5; // Example number 1
//     let num2 = 10; // Example number 2
//     let ans = sum(num1, num2);
//     displayans(ans);
// }, 1000); // Calls the anonymous function every 1000 milliseconds (1 second)
// let counter = 0;

// function incrementCounter() {
//     counter++;
//     console.log("Counter:", counter);
// }

// // Increment the counter every second
// setInterval(incrementCounter, 1000);
// let counter = 0;
// let maxCount = 10; // Change this to the desired number of increments

// function incrementCounter() {
//     counter++;
//     console.log("Counter:", counter);

//     // Check if the counter has reached the maximum count
//     if (counter >= maxCount) {
//         clearInterval(intervalId); // Stop the setInterval loop
//     }
// }

// // Increment the counter every second until it reaches maxCount
// let intervalId = setInterval(incrementCounter, 1000);
function updateClock() {
    // Get the current time
    let now = new Date();

    // Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format the time components to ensure they have two digits
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Display the time in the terminal
    console.log(`${hours}:${minutes}:${seconds}`);
}

// Update the clock every second
setInterval(updateClock, 1000);