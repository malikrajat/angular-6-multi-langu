// import 'zone.js/dist/zone.js';
import {renderModuleFactory } from '@angular/platform-server';
import {writeFileSync} from 'fs';

const { AppServerModuleNgFactory} = require('./dist/main.bundle');

renderModuleFactory(AppServerModuleNgFactory, {
  document: '<app-root></app-root>',
  url: '/'
})
.then(html => {
  console.log('prerender done, saving file');
  writeFileSync('./prerender.html', html);
})
  .catch(error => {
    console.log('Error meet', error);
  })
