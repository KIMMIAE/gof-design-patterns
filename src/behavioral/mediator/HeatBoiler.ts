import Mediator from './Mediator';
import Participant from './Participant';

export default class HeatBoiler extends Participant {
  private bOff = true;

  constructor(mediator: Mediator) {
    super(mediator);
  }

  on(): void {
    if (!this.bOff) {
      return;
    }

    this.bOff = false;
    this.mediator.participantsChanged(this);
  }

  off(): void {
    if (this.bOff) {
      return;
    }

    this.bOff = true;
    this.mediator.participantsChanged(this);
  }

  isRunning(): boolean {
    return !this.bOff;
  }

  displayState(dom: HTMLElement): void {
    dom.innerHTML = this.bOff ? 'HeatBoiler is off' : 'HeatBoiler is on';

    if (this.bOff) {
      dom.classList.remove('highlight');
    } else {
      dom.classList.add('highlight');
    }
  }
}
