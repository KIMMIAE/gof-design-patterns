import Player from './Player';
import StandUpState from './StandUpState';
import State from './State';

export default class SitDownState extends State {
  standUp(): void {
    this.player.setState(new StandUpState(this.player));
    this.player.talk('일어나서 걷자!');
  }
  sitDown(): void {
    this.player.talk('이미 앉아있는데?');
  }
  walk(): void {
    this.player.setState(new StandUpState(this.player));
    this.player.talk('앉아서 어떻게 걸어? 일단 일어나자.');
  }
  run(): void {
    this.player.setState(new StandUpState(this.player));
    this.player.talk('앉아서 어떻게 뛰어? 일단 일어나자.');
  }
  getDescription(): string {
    return '앉아있는 상태';
  }

  constructor(player: Player) {
    super(player);
  }
}
