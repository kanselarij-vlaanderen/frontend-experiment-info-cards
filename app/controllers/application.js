import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default class ApplicationController extends Controller {

  @service info;

  @action
  addInfoMessage() {
    this.info.addCard({
      component: "info/info-card",
      description: "Some info message"
    });
  }

  @action
  addWarningMessage() {
    this.info.addCard({
      component: "info/warning-card",
      description: "We did a thing but aren't sure it's what you want"
    });
  }

  @action
  addErrorMessage() {
    this.info.addCard({
      component: "info/error-card",
      description: "We made a booboo, sorry"
    });
  }
}
