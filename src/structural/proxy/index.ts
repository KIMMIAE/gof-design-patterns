import ProxyImage from './ProxyImage';
import RealImage from './RealImage';

/**
 * Proxy 패턴의 종류에는 가상 Proxy, 원격 Proxy, 보호 Proxy등이 있다.
 * 가상 Proxy는 필요한 시점까지 객체의 생성을 연기하고 마치 생성된 것처럼 동작하다가 필요한 시점에 실제 객체를 생성해서 사용한다.
 * Proxy 패턴은 실제 기능 실행을 대리인(Proxy)을 통해 실행하도록 하는 것이 근본적인 목적이다.
 */

const items = [
  [
    '설산야경',
    'https://cdn.bhdw.net/im/snow-mountain-night-wallpaper-81305_w635.webp',
  ],
  [
    '외로운늑대',
    'https://cdn.bhdw.net/im/fantasy-world-wallpaper-29897_w635.webp',
  ],
  [
    '강변황혼',
    'https://cdn.bhdw.net/im/sunset-minimalist-wallpaper-81072_w635.webp',
  ],
  [
    '일출',
    'https://cdn.bhdw.net/im/sunset-scenery-minimalist-wallpaper-81379_w635.webp',
  ],
  [
    '지구탈출',
    'https://cdn.bhdw.net/im/mountain-scenery-art-wallpaper-81095_w635.webp',
  ],
  [
    '비둘기',
    'https://wallpapers.com/images/high/flying-homing-pigeon-low-angle-shot-bliq95v02wjt2d7b.webp',
  ],
  [
    '아기 고양이',
    'https://wallpapers.com/images/high/kitten-pictures-gm0hvkdl9hbm21xj.webp',
  ],
  [
    '고양이',
    'https://wallpapers.com/images/hd/elegant-feline-in-soft-natural-light-00nbm86akvtczty6.webp',
  ],
];

const domList = document.querySelector('.list');
items.forEach((item) => {
  const title = item[0];
  const url = item[1];
  // const img = new RealImage(title, url, domList);
  const img = new ProxyImage(title, url, domList);
  img.append();
});
