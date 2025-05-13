import Car from './Car';
import CarBuilder from './CarBuilder';
/**
 * Builder 패턴은 복잡한 설정으로 구성된 객체를 좀 더 효과적으로 생성하기 위한 패턴으로
 * Builder 패턴의 목적은 2가지로 (1) 객체 생성시 생성자의 인자가 너무 많을 경우에 좀 더 효과적으로 생성하기 위해 사용되거나 (2) 여러 단계에 걸쳐 객체가 생성될 때 각 단계를 다양한 목적에 따라 구현하기 위해 사용된다.
 * 이 실습에서는 "생성할 때 생성자의 인자가 너무 많을 경우에 좀 더 효과적으로 생성하기 위해 사용" 되는 Builder 패턴에 대해 살펴보았다.
 */

const car1 = new Car('V7', true, 'black', true, false);
car1.print();

const car2 = new CarBuilder()
  .setAEB(false)
  .setAirbag(false)
  .setCameraSensor(true)
  .setColor('white')
  .setEngine('V9')
  .build();
car2.print();
