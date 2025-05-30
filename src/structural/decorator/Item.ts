export default abstract class Item {
  abstract getLinesCount(): number;
  abstract getLength(i: number): number;
  abstract getMaxLength(): number;
  abstract getString(i: number): string;

  print(dom: HTMLElement): void {
    const result = [];
    const cntLines = this.getLinesCount();
    for (let i = 0; i < cntLines; i++) {
      const str = this.getString(i);
      result.push(str);
    }
    dom.innerHTML = result.join('\n');
  }
}
