import King from './King';

/**
 * Singleton 패턴은 특정 클래스의 인스턴스가 오직 한 개만 존재한다는 것을 보장한다.
 * Singleton 패턴이 적용된 클래스의 인스턴스는 미리 생성해 놓거나 사용될 때 생성하는 것이 가능하다.
 */

const king = King.getInstance();
king.sayHello();

const king2 = King.getInstance();
if (king === king2) {
  console.log('king === king2');
} else {
  console.log('king !== king2');
}
