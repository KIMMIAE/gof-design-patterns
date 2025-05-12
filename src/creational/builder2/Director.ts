import Builder from './Builder';

export default class Director {
  constructor(private _builder: Builder) {}

  build() {
    return `${this._builder.head()}${this._builder.body()}${this._builder.foot()}`;
  }
}
