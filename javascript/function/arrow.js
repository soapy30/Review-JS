const person = {
    first: 'Viggo',
    last: 'Morten',
    fullName: function () {
        return `${this.first} ${this.last}` // Viggo Morten (this는 person을 지칭)
    },
    shoutName: function() {
        setTimeout(()=>{
            console.log(this);
            console.log(this.fullName());
        }, 3000)
    }
}

// const person2 = {
//   first: "Viggo",
//   last: "Morten",
//   fullName: () => {
//     console.log(this);
//     return `${this.first} ${this.last}`; // 'undefined undefined'
//   },
// };
