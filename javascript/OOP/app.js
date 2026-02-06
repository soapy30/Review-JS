String.prototype.yell = function () {
  return `OMG!!! ${this.toUpperCase()}!!!! AHAHAHAHGGG!!!`;
};
Array.prototype.first = function () {
  return this[0];
};
/* 금지 예시: POP override */
// Array.prototype.pop = function() {
//     return `SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!`
// }

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

/* COLORS */
/* 
RGB "rgb(244,54,23)"
RGBA "rgba(244,54,23,0.8)"
HEX "#76FF32"
HSL "hsl(180, 60%, 30%)"
*/
// -------------------------------------------------
/* 1. 팩토리 함수 : 빈 객체 생성 후 채워 반환 */

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   //method 1
//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
//   };
//   // method 2
//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   // Factory
//   return color;
// }

// const firstColor = makeColor(35, 255, 150);
// console.log("firstColor.rgb is - ", firstColor.rgb()); //rgb(35,255,150)
// console.log("firstColor to hex is - ", firstColor.hex()); // #23ff96

/* 단점: const { r, g, b } = this; --> 메서드 생성시마다 반복되어야 함 */

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

/* 2. 생성자함수 - 팩토리함수보다 나은 방식 : new Keyword */

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// // Color 외부에 작성 가능
// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r},${g},${b})`;
// };

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// Color.prototype.rgba = function (a=1.0) {
//     const {r, g, b } = this;
//     return `rgba(${r},${g},${b},${a})`;
// }

// const color1 = new Color(40, 255, 60);
// const color2 = new Color(0, 0, 0);

// 'rgb(40,255,60)'
// 'rgba(40,255,60,0.6)'

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

/* 3. Class 사용 */

// 클래스 정의
class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  greet() {
    return `Hi, this color FROM ${this.name}!!`;
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r},${g},${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()},${a})`;
  }
  hex() {
    const {r,g,b} = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

// 클래스 사용
const red = new Color(255, 67, 89, "tomato");
const orange = new Color(251, 121, 34, "carrot");
const yellow = new Color(252, 248, 18, "lemon");
