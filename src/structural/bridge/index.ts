import CaptionDisplay from './CaptionDisplay';
import CharactersCounter from './CharactersCounter';
import Draft from './Draft';
import SimpleDisplay from './SimpleDisplay';

/**
 * Bridge 패턴은 기능 계층과 구현 계층을 분리한다.
 * 새로운 기능을 추가할 때는 기능 계층을 확장하고 새로운 구현을 추가할 때는 구현 계층을 확장함으로써 복잡도를 효과적으로 낮출 수 있다.
 * 기능 계층과 구현 계층은 서로 위임을 통해서 통신한다.
 * 클래스들간의 관계는 단순하게 만들어 주는 것이 좋은데 Bridge 패턴은 기능 계층과 구현 계층을 분리함으로써 클래스들 간의 관계를 단순하게 유지시켜 준다.
 */

const title = '좋은 아침';
const author = '김사랑';
const content = [
  '오늘은 좋은 날이다.',
  '창 밖을 바라보고 싶다.',
  '인간을 깨워야 겠다.',
];

// const draft = new Draft(title, author, content);
const draft = new CharactersCounter(title, author, content);

// const display = new SimpleDisplay();
const display = new CaptionDisplay();
draft.print(display);

console.log(`총 문자 수: ${draft.getCharactersCount()}`);
