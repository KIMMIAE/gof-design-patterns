import Article from './Article';
import EditableDisplayArticle from './EditableDisplayArticle';
import SimpleDisplayArticle from './SimpleDisplayArticle';
/**
 * Template 패턴은 어떤 기능을 구성하는 각 실행 순서(단계)를 미리 정하고 각 실행 단계에 대한 구체적인 코드를 재정의할 수 있는 유연성을 제공합니다.
 */
const article = new Article(
  'GIS 분야의 업무',
  [
    '공간 DB 구축 및 가공',
    '위치기반 서비스 개발',
    '지도 기반 업무 시스템 설계 및 개발',
    '공간 정보 3차원 시각화',
    '영상 판독을 위한 딥러닝 학습 및 서비스 개발',
  ],
  'GIS DEVLOPLER'
);

const display = new SimpleDisplayArticle(article);
document.querySelector('.content').innerHTML = display.displayHtml();

document.querySelector('.edit-mode').addEventListener('change', (event) => {
  let display;
  if ((<HTMLInputElement>event.target).checked) {
    display = new EditableDisplayArticle(article);
  } else {
    display = new SimpleDisplayArticle(article);
  }
  document.querySelector('.content').innerHTML = display.displayHtml();
});
