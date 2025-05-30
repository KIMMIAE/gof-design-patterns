import Row from './Row';

export default class Message {
  constructor(private row: Row) {}

  print(dom: Element): void {
    const domLayout = document.createElement('div');

    domLayout.classList.add('layout');

    if (this.row) {
      domLayout.innerHTML = `
        <div class="name">${this.row.name}</div>
        <div class="birthday">${this.row.birthday}</div>
        <div class="email">${this.row.email}</div>
      `;
    } else {
      domLayout.innerHTML = 'No data';
    }

    dom.appendChild(domLayout);
  }
}
