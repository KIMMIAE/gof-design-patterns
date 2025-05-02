import Participant from './Participant';

export default interface Mediator {
  participantsChanged(participant: Participant): void;
}
