import Animal from './Animal';

export default class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  sound() {
    console.log(`${this.name}가 야옹~`);
  }
}
