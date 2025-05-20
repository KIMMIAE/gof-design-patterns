import StandUpState from './StandUpState';
import State from './State';

export default class Player {
  private speed: number = 0;
  getSpeed() {
    return this.speed;
  }
  setSpeed(speed: number): void {
    this.speed = speed;
  }

  private state: State;
  setState(state: State): void {
    this.state = state;
  }
  getState(): State {
    return this.state;
  }

  constructor(private domTalk: HTMLElement) {
    this.state = new StandUpState(this);
  }

  talk(msg: string) {
    this.domTalk.innerHTML = msg;
  }
}
