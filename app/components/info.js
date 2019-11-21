import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class InfoComponent extends Component {
  @service info;
}
