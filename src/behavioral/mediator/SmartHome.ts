import Door from './Door';
import Mediator from './Mediator';
import Participant from './Participant';
import Window from './Window';
import HeatBoiler from './HeatBoiler';
import CoolAircon from './CoolAircon';

export default class SmartHome implements Mediator {
  door = new Door(this);
  window = new Window(this);
  heatBoiler = new HeatBoiler(this);
  coolAircon = new CoolAircon(this);

  participantsChanged(participant: Participant): void {
    if (participant === this.door && !this.door.isClosed()) {
      this.heatBoiler.off();
      this.coolAircon.off();
    }

    if (participant === this.window && !this.window.isClosed()) {
      this.heatBoiler.off();
      this.coolAircon.off();
    }

    if (participant === this.coolAircon && this.coolAircon.isRunning()) {
      this.heatBoiler.off();
      this.window.close();
      this.door.close();
    }

    if (participant === this.heatBoiler && this.heatBoiler.isRunning()) {
      this.coolAircon.off();
      this.window.close();
      this.door.close();
    }
  }

  display() {
    const domDoor = document.querySelector('.door') as HTMLElement;
    const domWindow = document.querySelector('.window') as HTMLElement;
    const domHeatBoiler = document.querySelector('.heatBoiler') as HTMLElement;
    const domCoolAircon = document.querySelector('.coolAircon') as HTMLElement;

    this.door.displayState(domDoor);
    this.window.displayState(domWindow);
    this.heatBoiler.displayState(domHeatBoiler);
    this.coolAircon.displayState(domCoolAircon);
  }

  install() {
    const domDoor = document.querySelector('.door') as HTMLElement;
    const domWindow = document.querySelector('.window') as HTMLElement;
    const domHeatBoiler = document.querySelector('.heatBoiler') as HTMLElement;
    const domCoolAircon = document.querySelector('.coolAircon') as HTMLElement;

    domDoor.addEventListener('click', () => {
      this.door.isClosed() ? this.door.open() : this.door.close();
      this.display();
    });

    domWindow.addEventListener('click', () => {
      this.window.isClosed() ? this.window.open() : this.window.close();
      this.display();
    });

    domHeatBoiler.addEventListener('click', () => {
      this.heatBoiler.isRunning()
        ? this.heatBoiler.off()
        : this.heatBoiler.on();
      this.display();
    });

    domCoolAircon.addEventListener('click', () => {
      this.coolAircon.isRunning()
        ? this.coolAircon.off()
        : this.coolAircon.on();
      this.display();
    });

    this.display();
  }
}
