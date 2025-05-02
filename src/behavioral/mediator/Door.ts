import Mediator from './Mediator';
import Participant from './Participant';

export default class Door extends Participant {
  private bClosed = true;

  constructor(mediator: Mediator) {
    super(mediator);
  }

  open(): void {
    if (!this.bClosed) {
      return;
    }

    this.bClosed = false;
    this.mediator.participantsChanged(this);
  }

  close(): void {
    if (this.bClosed) {
      return;
    }

    this.bClosed = true;
    this.mediator.participantsChanged(this);
  }

  isClosed(): boolean {
    return this.bClosed;
  }

  displayState(dom: HTMLElement): void {
    dom.innerHTML = this.bClosed ? 'Door is closed' : 'Door is open';

    if (this.bClosed) {
      dom.classList.remove('highlight');
    } else {
      dom.classList.add('highlight');
    }
  }
}
