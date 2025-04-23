# GoF 디자인 패턴 타입스크립트 실습

- 설계를 올바르고 효과적으로 하기 위해서 디자인 패턴을 적용하는 게 좋다.

## 디자인 패턴이란?

- 소프트웨어 설계 방법
- 개별 클래스의 기능(역할, 책임)을 명확히 정의하고 여러 개 의 클래스들 간의 관계를 효과적으로 잘 맺는 방법을 정리해 놓은 것

## 왜 클래스들이 올바른 관계를 맺어야 하는가?

- 클래스는 최소한의 단위 기능을 가져야 한다.
- 큰 기능은 최소 단위 기능을 갖는 클래스들 간의 관계를 통해 개발된다
- 꼭 필요한 것들만으로 구성된 최적화 된 소프트웨어 개발이 가능하다.
- 문제 발생 시 원인 규명이 빠르다.
- 최소한의 코드 수정으로 유지보수가 가능해 진다.
- 기존 기능에 영향을 주지 않고 새로운 기능 추가가 가능해진다.

## GoF의 디자인 패턴

- 가장 유용하며 대표적인 디자인 패턴
- 4명의 선배 개발자(Gang Of Four)가 체계적으로 정리해 놓은 설계 방법
- 총 23개의 패턴으로 구성되며 생성 패턴(5개), 구조 패턴(7개), 행위 패턴(11개)로 분류
- 생구행(생성, 구조, 행위)
  - 생성: `Builder`, `Prototype`, `Factory Method`, `Abstract Factory`, `Singleton`
  - 구조: `Bridge`, `Decorator`, `Facade`, `Flyweight`, `Proxy`, `Composite`, `Adapter`
  - 행위: `Mediator`, `Interpreter`, `Iterator`, `Template Method`, `Observer`, `State`, `Visitor`, `Command`, `Strategy`, `Memento`, `Chain of Responsibility`

## 학습 목표

- ‘각 패턴이 무엇을 위해 왜 존재하는가?’를 이해한다. 효과적으로 사용하는 방법을 익힌다.

## 실습 환경

- Typescript, VSCode, Node.js

## 🚀 사용법 및 실행 방법 (How to Use and Run)

## 📁 폴더 구조
