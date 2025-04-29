export default class King {
  private constructor() {}

  private static instance: King | undefined;

  static getInstance(): King {
    if (King.instance === undefined) {
      this.instance = new King();
    }
    return this.instance;
  }

  sayHello() {
    console.log('I am the King');
  }
}
