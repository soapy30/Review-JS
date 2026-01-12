function add (x,y) {
    console.log(x+y);
}

let result = add(2,4);
console.log(result); //undefined

console.log('---------------------------------');

// 위의 방식으로 사용하고 싶다면, 결과값을 return
function addNumber (a, b) {
    // console.log(typeof a === "number");
    if(typeof a !== 'number' || typeof b !== 'number') {
        // a or b 하나라도 number가 아니라면 false 반환, 종료
        return false;
    }
    return a + b;
}

let result2 = addNumber(5,9);
console.log(result2);


console.log('-------------**********-------------')
// DEFINE YOUR FUNCTION BELOW:
function lastElement (arr) {
        if (arr.length === 0) {
            return null;
        }
        return arr[arr.length-1];
}

const testResult = lastElement([1,2,5,7,9]); // 9
console.log(testResult);