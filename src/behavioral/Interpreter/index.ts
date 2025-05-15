import BeginExpression from './BeginExpression';
import Context from './Context';

/**
 * Interpreter 패턴은 "규칙을 가지는 문자열"(스크립트)를 해석하는 패턴이다.
 */

/*
const script = 'BEGIN FRONT LOOP 2 BACK RIGHT END BACK END';

const context = new Context(script);

while (true) {
  const keyword = context.getCurrentKeyword();
  if (keyword === null) {
    break;
  }

  console.log(keyword);

  context.readNextKeyword();
}
*/

const script =
  'BEGIN FRONT LOOP 3 LOOP 2 RIGHT FRONT END LOOP 3 LEFT END BACK RIGHT END BACK END';
console.log(script);

const context = new Context(script);
const beginExpression = new BeginExpression();

if (beginExpression.parse(context)) {
  console.log(beginExpression.getDescription());
  beginExpression.run();
} else {
  console.log('ERROR');
}
