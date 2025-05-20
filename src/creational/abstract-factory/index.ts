import ThreeDUIFactory from './3DUIFactory';
import FlatUIFactory from './FlatUIFactory';
import UIFactory from './UIFactory';

/**
 * Abstract Factory 패턴은 만들어야 하는 컴포넌트들을 먼저 개념적으로 정해두고 특정한 조건이 주어지면 해당 조건에 맞는 구체적인 컴포넌트로 생성하는 패턴이다.
 * 미리 정해두는 개념적인 컴포넌트들을 그룹(Group)으로 정하고 해당 조건에 맞는 구체적인 컴포넌트들을 생성하고 조립해 하나의 시스템을 완성시키는 패턴이다.
 */

let factory: UIFactory;

const flatMode = true;
// const flatMode = false;

if (flatMode) {
  factory = new FlatUIFactory();
} else {
  factory = new ThreeDUIFactory();
}

const domButton = document.querySelector('.button') as HTMLElement;
const domCheckbox = document.querySelector('.checkbox') as HTMLElement;
const domTextEdit = document.querySelector('.textedit') as HTMLElement;

factory.createButton(domButton, 'BUTTON');
factory.createCheckBox(domCheckbox, 'CheckBox', true);
factory.createTextEdit(domTextEdit, 'DesignPattern');
