import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { task } from 'ember-concurrency-decorators';
import { timeout } from 'ember-concurrency';
import Card from './card';

export default class InfoInfoCardComponent extends Card {
  defaultTitle = "Info";

  @service("info") infoService;

  @action
  scheduleRemoval(){
    this.remove.perform();
  }

  @task({restartable: true})
  *remove(){
    yield timeout(4000);
    this.infoService.removeCard( this.args.info );
  }
}
