import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Card from './card';

export default class InfoErrorCardComponent extends Card {
  defaultTitle = "Error";
  @service("info") infoService;

  @action
  close(){
    this.infoService.removeCard( this.args.info );
  }
}
