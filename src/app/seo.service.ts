import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private title: Title, private meta: Meta) { }


  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateDescription(desc: string, auth: string, keyWord: string) {
    this.meta.addTags([
      { name: 'description', content: desc },
      {name: 'author', content: auth },
      { name: 'keywords', content: keyWord }
      ]
    );
  }

}
