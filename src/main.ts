import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


bootstrapApplication(AppComponent, {
  providers: [
    provideCharts(withDefaultRegisterables()),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(BrowserAnimationsModule),
    provideIonicAngular(),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
