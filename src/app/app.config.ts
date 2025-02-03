import {ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection} from '@angular/core';

import {provideHttpClient} from '@angular/common/http';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {TimeZoneService} from './services/time-zone.service';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideAppInitializer(() => {
      const timeZoneService = inject(TimeZoneService);
      return timeZoneService.init();
    })
  ]
};
