export default class Car {
  constructor(
    private engine: string, // 엔진 이름
    private airbag: boolean, // 에어백 유무
    private color: string, // 차량 색상
    private cameraSensor: boolean, // 카메라 센서 유무
    private AEB: boolean // 자동급제동장치 유무
  ) {}

  print(): void {
    console.table(this);
  }
}
