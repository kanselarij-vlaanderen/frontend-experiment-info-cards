import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import move from 'ember-animated/motions/move';
import { fadeOut, fadeIn } from 'ember-animated/motions/opacity';

export default class InfoComponent extends Component {
  @service info;

  *transition({keptSprites, removedSprites, insertedSprites}) {
    for( const sprite of keptSprites )
      move(sprite);

    for( const sprite of removedSprites ) {
      sprite.applyStyles({"z-index": -1});
      fadeOut(sprite);
    }

    for( const sprite of insertedSprites ) {
      fadeIn( sprite );
      sprite.applyStyles({"z-index": 1});
    }
  }
}
