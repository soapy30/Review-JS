const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// for loop
// for (let i=0; i<subreddits.length; i++) {
//     console.log(`visit reddit.com/r/${subreddits[i]}`);
// }

// for of loop
for (let sub of subreddits) {
    console.log(`visit reddit.com/forof/${sub}`);
}

// nested
const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

// nested for loop - way1
// for (let i=0; i<seatingChart.length; i++) {
//     console.log(`i is ${i}`)
//     for (let j=0; j<seatingChart[i].length; j++) {
//         console.log(seatingChart[i][j]);
//     }
// }

// nested for loop - way2
for (let i=0; i<seatingChart.length; i++){
    const row=seatingChart[i];
    for (let j=0; j<row.length; j++) {
        console.log(row[j]);
    }
}

console.log("-------------------------")

// nested for of loop
for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}


// for of 는 문자열도 반복 가능
// for (let char of "HELLO WORLD"){
//     console.log(char);
// }