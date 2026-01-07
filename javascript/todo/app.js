let userInput = prompt("What would you like to do?");
const todos = ["play with my cat", "Clean the room"];

while (userInput !== "quit" && userInput !== "q") {
    if(userInput === "new") {
        const add = prompt("Enter new Todo");
        todos.push(add);
        console.log(`${add} is Added`);
        console.log(`debug: ${userInput}`);
    } else if (userInput === "list") {
        console.log("**********");
        for(let i=0; i<todos.length; i++) {
            console.log(`todo - ${i}: ${todos[i]}`);
        }
        console.log("**********");
         console.log(`debug: ${userInput}`);
    } else if (userInput === "delete") {
        const msg = parseInt(prompt("OK. Input the index number to delete"));
        if(!Number.isNaN(msg)) {
            const deleted = todos.splice(msg, 1);
            console.log(`OK. Deleted ${deleted}`); //제거된 결과 return하는 성질 이용
            console.log(`debug: ${userInput}`);
        } else {
            console.log("Unknown index. Input index Number");
        }
    } else {
        console.log("Unknown command. Please use new, list, delete, or quit.");
    }
    // 무한루프 안 걸리려면 여기서 userInput을 갱신
    userInput = prompt("What would you like to do?");
}
console.log("Quitted!");