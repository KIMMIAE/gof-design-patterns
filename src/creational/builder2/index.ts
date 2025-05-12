import Data from './Data';
import Director from './Director';
import PlainTextBuilder from './PlainTextBuilder';
import JSONBuilder from './JSONBuilder';
import XMLBuilder from './XMLBuilder';

/**
 * Builder 패턴은 복잡한 설정으로 구성된 객체를 좀 더 효과적으로 생성하기 위한 패턴으로
 * Builder 패턴의 목적은 2가지로 (1) 객체 생성시 생성자의 인자가 너무 많을 경우에 좀 더 효과적으로 생성하기 위해 사용되거나 (2) 여러 단계에 걸쳐 객체가 생성될 때 각 단계를 다양한 목적에 따라 구현하기 위해 사용된다.
 * 이 강좌에서는 "여러 단계에 걸쳐 객체가 생성될 때 각 단계를 다양한 목적에 따라 구현" 되는 Builder 패턴에 대해 살펴보았다.
 */

const data = new Data('John', 30);

// const builder = new PlainTextBuilder(data);
// const builder = new JSONBuilder(data);
const builder = new XMLBuilder(data);

const director = new Director(builder);

const result = director.build();

console.log(result);
