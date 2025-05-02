import Item from './Item';

export default class Bow implements Item {
  use(): string {
    return '활로 멀리서 쏘았다. 약오르지?!';
  }
}
