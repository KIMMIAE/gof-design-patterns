import Unit from './Unit';
import Visitor from './Visitor';

export default class Item implements Unit {
  constructor(private value: number) {}

  getValue(): number {
    return this.value;
  }

  accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}
