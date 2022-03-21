import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxCumulioDashboardModule } from '@cumul.io/ngx-cumulio-dashboard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCumulioDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
