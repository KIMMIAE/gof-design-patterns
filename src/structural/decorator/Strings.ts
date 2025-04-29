import Item from './Item';

export default class Strings extends Item {
  getLinesCount(): number {
    return this.data.length;
  }
  getLength(i: number): number {
    return this.data[i].length;
  }
  getMaxLength(): number {
    // return Math.max(...this.data.map(str => str.length));
    let maxLength = 0;
    this.data.forEach((item) => {
      if (item.length > maxLength) {
        maxLength = item.length;
      }
    });
    return maxLength;
  }
  getString(i: number): string {
    return this.data[i];
  }
  private data = new Array<string>();
  constructor() {
    super();
  }

  add(str: string): void {
    this.data.push(str);
  }
}
