import Component from '@glimmer/component';

export default class Card extends Component {
  get title() {
    return this.args.title || this.defaultTitle;
  }

  get content() {
    return this.args.info.content;
  }
}
