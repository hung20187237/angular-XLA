import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BkavSocialListeningAppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(BkavSocialListeningAppModule)
  .catch(err => console.error(err));
