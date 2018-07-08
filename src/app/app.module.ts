// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

// ------------------------------------------------------------------------------
// Import Modules
// ------------------------------------------------------------------------------
import { CoreModule } from './core/core.module';
import { StaticModule } from './static/static.module';
import { SharedModule } from './shared/shared.module';
import { WelcomeModule } from './features/welcome/welcome.module';
import { ContactModule } from './features/contact/contact.module';

// ------------------------------------------------------------------------------
// Import Routings
// ------------------------------------------------------------------------------
import { AppRoutingModule }     from './app-routing.module';

// ------------------------------------------------------------------------------
// Import Components
// ------------------------------------------------------------------------------
import { AppComponent } from './app.component';

// ------------------------------------------------------------------------------
// Import SSR components
// ------------------------------------------------------------------------------
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// ------------------------------------------------------------------------------
// Import environments
// ------------------------------------------------------------------------------
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'marleyapp' }),
    FormsModule,
    AppRoutingModule,
    StaticModule,
    SharedModule,
    CoreModule,
    WelcomeModule,
    ContactModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
      if (!environment.production) {
        const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
        console.log(`Running ${platform} with appId=${appId}`);
      }
  }
}
