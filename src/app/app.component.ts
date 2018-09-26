import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute} from '@angular/router';
import {SeoService} from './seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  title = 'app';
  constructor(private translate: TranslateService, private activatedRoute: ActivatedRoute, private seo:SeoService) {
    translate.setDefaultLang('en');
    // const browserlang = translate.getBrowserLang();
    translate.use('en');
    // translate.use(browserlang.match(/en|fr|cn|hi/) ? browserlang : 'en');
  }

  switchLang(language) {
    this.translate.use(language);
  }
  ngOnInit () {
    this.seo.updateTitle('Home | language');
    this.seo.updateDescription('Language', 'Rajat', 'ng5, seo');

    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        const  locale = param['locale'];
        if (locale !== undefined) {
          this.translate.use(locale);
        }
      }
    );
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}
