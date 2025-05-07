import DomainHandler from './DomainHandler';
import PortHandler from './PortHandler';
import ProtocolHandler from './ProtocolHandler';

/**
 * Chain of Responsibility 패턴은 기능 단위로 클래스를 분리하고 이 클래스의 객체를 연결해서 각 기능을 지정된 순서로 실핼할 수 있는 패턴이다.
 * 기능을 클래스 별로 분리하여 구현하도록 유도하므로 객체지향설계 원칙 중 단일 책임 원칙 및 개방폐쇄원칙 등을 자연스럽게 따르게 된다.
 */

const protocolHandler = new ProtocolHandler();
const domainHandler = new DomainHandler();
const portHandler = new PortHandler();

protocolHandler.setNext(domainHandler).setNext(portHandler);

const domInput = document.querySelector('#url') as HTMLInputElement;
const domBtn = document.querySelector('#btn') as HTMLButtonElement;

domBtn.addEventListener('click', () => {
  const url = domInput.value;
  protocolHandler.run(url);
});
