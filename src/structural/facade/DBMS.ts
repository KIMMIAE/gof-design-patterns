import Row from './Row';

export default class DBMS {
  private db = new Map<string, Row>();

  constructor() {
    this.db.set('1', new Row('John', '1990-01-01', 'john@example.com'));
    this.db.set('2', new Row('Jane', '1990-01-02', 'jane@example.com'));
    this.db.set('3', new Row('Jim', '1990-01-03', 'jim@example.com'));
  }

  query(name: string, callback: (row: Row) => void): void {
    setTimeout(() => {
      callback(this.db.get(name));
    }, 1500);
  }
}
