const multiply = (x, y) => {
  return x * y;
};

const square = (z) => {
  return multiply(z, z);
};

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

// async
console.log("Sending Request to Server!");

setTimeout(()=>{
    console.log("Here's yout DATA From Server!!");
},3000);

console.log("---END---");