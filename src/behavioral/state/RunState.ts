import Player from './Player';
import StandUpState from './StandUpState';
import State from './State';
import WalkState from './WalkState';

export default class RunState extends State {
  standUp(): void {
    this.player.talk('뛰다가 갑자기 서면 무릎 연골 나가요..!');
    this.player.setSpeed(0);
    this.player.setState(new StandUpState(this.player));
  }
  sitDown(): void {
    this.player.talk('뛰다가 앉으면 크게 다칠 수 있어요!');
    this.player.setSpeed(0);
    this.player.setState(new StandUpState(this.player));
  }
  walk(): void {
    this.player.talk('속도를 줄일게요~');
    this.player.setSpeed(8);
    this.player.setState(new WalkState(this.player));
  }
  run(): void {
    this.player.talk('더 빨리 뛰라는 거죠?');
    this.player.setSpeed(this.player.getSpeed() + 2);
  }
  getDescription(): string {
    return '뛰는 상태';
  }
  constructor(player: Player) {
    super(player);
  }
}
