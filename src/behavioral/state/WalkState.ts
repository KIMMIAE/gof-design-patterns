import Player from './Player';
import RunState from './RunState';
import SitDownState from './SitDownState';
import StandUpState from './StandUpState';
import State from './State';

export default class WalkState extends State {
  standUp(): void {
    this.player.setSpeed(0);
    this.player.talk('멈춰..');
    this.player.setState(new StandUpState(this.player));
  }
  sitDown(): void {
    this.player.setSpeed(0);
    this.player.talk('걷다가 앉으면 넘어질 수 있어요...');
    this.player.setState(new SitDownState(this.player));
  }
  walk(): void {
    this.player.talk('난 걷는 게 좋아~');
  }
  run(): void {
    this.player.setSpeed(20);
    this.player.talk('걷다가 뛰면 빨라질 수 있지!');
    this.player.setState(new RunState(this.player));
  }
  getDescription(): string {
    return '걷는 상태';
  }
  constructor(player: Player) {
    super(player);
  }
}
