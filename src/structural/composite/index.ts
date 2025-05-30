import Folder from './Folder';
import File from './File';

/**
 * Composite 패턴은 집합체와 집합체를 구성하는 항목인 단일체를 같은 개념으로 처리한다.
 * 다양한 형태의 단일체와 조합한 집합체를 또 다른 단일체로 정의할 수 있고 이를 단일체나 집합체라는 구분없이 같은 개념으로 처리할 수 있다.
 */

const root = new Folder('root');
root.add(new File('a.txt', 1000));
root.add(new File('b.txt', 2000));

const sub1 = new Folder('sub1');
root.add(sub1);
sub1.add(new File('sa.txt', 100));
sub1.add(new File('sb.txt', 4000));

const subSub = new Folder('sub3');
sub1.add(subSub);
subSub.add(new File('subsub1.txt', 2250));
subSub.add(new File('subsub2.txt', 5340));

const sub2 = new Folder('sub2');
root.add(sub2);
sub2.add(new File('sA.txt', 250));
sub2.add(new File('sB.txt', 340));

const dom = document.querySelector('#list');
root.list(dom);
