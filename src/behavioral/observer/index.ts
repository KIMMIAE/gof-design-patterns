import EvenBettingPlayer from './EvenBettingPlayer';
import FairDiceGame from './FairDiceGame';
import NBettingPlayer from './NBettingPlayer';
import OddBettingPlayer from './OddBettingPlayer';

/**
 * Observer 패턴은 어떤 상태의 변화에 대한 처리를 위해 사용된다.
 * 상태 변화가 발생하면 상태 변화에 관심을 가지고 있는 객체들(Observer)에게 상태 변화를 알리며 필요하다면 변경된 상태값도 전달한다.
 */

const diceGame = new FairDiceGame();

const players = [
  new OddBettingPlayer('홀수 플레이어'),
  new EvenBettingPlayer('짝수 플레이어'),
  new NBettingPlayer('직감 플레이어', [2, 3, 5]),
];

players.forEach((player) => diceGame.addPlayer(player));

function updateBoard() {
  const domPlayers = document.querySelector('.players');
  domPlayers.innerHTML = '';

  players.forEach((player) => {
    const domPlayer = document.createElement('div');
    domPlayer.innerHTML = player.name;

    if (player.winning) {
      domPlayer.classList.add('win');
    }

    domPlayers.append(domPlayer);
  });
}

updateBoard();

document.querySelector('button').addEventListener('click', () => {
  const diceNumber = diceGame.play();

  const domeDice = document.querySelector('.dice') as HTMLElement;
  domeDice.innerHTML = diceNumber.toString();

  updateBoard();
});
