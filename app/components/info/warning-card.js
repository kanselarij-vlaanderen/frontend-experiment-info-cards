import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Card from "./card";

export default class InfoWarningCardComponent extends Card {
  defaultTitle = "Warning";

  @service("info") infoService;

  @action
  undo() {
    console.log( "maybe calling undo action" );
    if( this.args.info.undo )
      this.args.info.undo();
    this.infoService.removeCard( this.args.info );
  }
}
