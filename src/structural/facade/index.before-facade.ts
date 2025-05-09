import DBMS from './DBMS';
import Cache from './Cache';
import Message from './Message';

const dbms = new DBMS();
const cache = new Cache();

const domInput = document.querySelector('input');
const domButton = document.querySelector('button');
const domResult = document.querySelector('.result');

domButton.addEventListener('click', () => {
  const name = domInput.value;

  const row = cache.get(name);

  if (!row) {
    domInput.value = '(조회 중...)';
    domButton.disabled = true;

    dbms.query(name, (row) => {
      domInput.value = name;
      domButton.disabled = false;
      if (row) {
        cache.put(row);
      }

      const message = new Message(row);
      message.print(domResult);
    });
  } else {
    const message = new Message(row);
    message.print(domResult);
  }
});
