import Player from './Player';

/**
 * State 패턴은 상태를 클래스화하여 객체로 만들 수 있는 패턴이다.
 * 어떤 상태에서 다른 상태로 변경할 때 각 상태 변화 따른 조건 처리를 매우 효과적으로 코딩할 수 있다.
 * 새로운 상태 추가 시에도 상태 변화 로직이 복잡해지지 않고 한가지 상태만 집중해서 처리할 수 있다.
 */

const domTalk = document.querySelector('.talk') as HTMLDivElement;
const domStand = document.querySelector('.stand') as HTMLDivElement;
const domSit = document.querySelector('.sit') as HTMLDivElement;
const domWalk = document.querySelector('.walk') as HTMLDivElement;
const domRun = document.querySelector('.run') as HTMLDivElement;

const player = new Player(domTalk);

function putDescription() {
  const domDescription = document.querySelector(
    '.description'
  ) as HTMLDivElement;
  domDescription.innerHTML = `${player
    .getState()
    .getDescription()} / 속도: ${player.getSpeed()}km/h`;
}

putDescription();

domStand.addEventListener('click', () => {
  player.getState().standUp();
  putDescription();
});

domSit.addEventListener('click', () => {
  player.getState().sitDown();
  putDescription();
});

domWalk.addEventListener('click', () => {
  player.getState().walk();
  putDescription();
});

domRun.addEventListener('click', () => {
  player.getState().run();
  putDescription();
});
