import Player from './Player';
import SitDownState from './SitDownState';
import State from './State';
import WalkState from './WalkState';
import RunState from './RunState';

export default class StandUpState extends State {
  standUp(): void {
    this.player.talk('언제쯤 움직여?');
  }
  sitDown(): void {
    this.player.setState(new SitDownState(this.player));
    this.player.talk('앉으니까 편하고 좋다.');
  }
  walk(): void {
    this.player.setSpeed(8);
    this.player.setState(new WalkState(this.player));
    this.player.talk('걷는 중~');
  }
  run(): void {
    this.player.setSpeed(10);
    this.player.setState(new RunState(this.player));
    this.player.talk('뛰는 중!');
  }
  getDescription(): string {
    return '서있는 상태';
  }

  constructor(player: Player) {
    super(player);
  }
}
