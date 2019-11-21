import { tracked } from '@glimmer/tracking';
import Service from '@ember/service';

export default class InfoService extends Service {
  @tracked cards = [];

  defaultCards = [
    {component: "info/info-card", description: "Some info message"},
    {component: "info/info-card", description: "Some info message"},
    {component: "info/warning-card", description: "Some info message"},
    {component: "info/info-card", description: "Some info message"},
    {component: "info/error-card", description: "Some info message"}
  ];

  constructor(){
    super(...arguments);

    for( const card of this.defaultCards )
      this.addCard(card);
  }

  nextId = 0;

  getNextId(){
    return this.nextId++;
  }

  addCard( card ) {
    console.log(`Adding card ${card}`);
    card.infoServiceId = this.getNextId();
    this.cards = [ ...this.cards, card ];
  }

  removeCard( { infoServiceId } ) {
    this.cards = this.cards.filter(
      (card) => card.infoServiceId != infoServiceId
    );
  }
}
