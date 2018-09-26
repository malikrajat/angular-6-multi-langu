import { MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';

export class MissingTranslatesComponent implements MissingTranslationHandler {
  handle( params: MissingTranslationHandlerParams) {
    return 'NOT FOUND FOR ' + params.key;
  }

}
