class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!!`;
  }
}

class Cat extends Pet {
    constructor(name, age, livesLeft=9) {
        // super keyword: super클래스를 바로 참조
        super(name,age);
        this.livesLeft = livesLeft;
    }
  meow() {
    return `MEOW~!!`;
  }
}

class Dog extends Pet {
  bark() {
    return `WOOOF!!`;
  }
  // eat을 우선 자식에서 찾고 없으면 부모 검색
  eat() {
    return `${this.name} scarfs his food..!!`;
  }
}

const hamster = new Pet("ding", 2);
const cat1 = new Cat("pangpang", 5);
const dog1 = new Dog("ggandol", 8);
