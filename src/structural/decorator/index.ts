import SideDecorator from './SideDecorator';
import Strings from './Strings';
import LineNumberDecorator from './LineNumberDecorator';
import BoxDecorator from './BoxDecorator';

/**
 * Decorator 패턴은 어떤 객체에 기능(장식)을 적용할 때 그 객체와 적용될 기능을 동일시할 수 있다.
 * 데이터와 기능을 동일시할 수 있으므로 다양한 기능을 중첩해서 적용할 수 있으며 적용되는 기능의 순서에 따라 다른 결과를 얻을 수 있다.
 */

const strs = new Strings();
strs.add('Hello');
strs.add('World');
strs.add('My name is Kim Sa Rang');
strs.add('I am a Cat.');
strs.add('Can you open the window and play with me');

const domPre = document.querySelector('pre');
// strs.print(domPre);

const d1 = new SideDecorator(strs, '"');
// d1.print(domPre);

const d2 = new LineNumberDecorator(d1);
// d2.print(domPre);

const d3 = new BoxDecorator(d2);
d3.print(domPre);
