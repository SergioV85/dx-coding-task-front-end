import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedServicesModule } from './shared/services/shared-services.module';
import { RequestAmountModule } from './request-amount/request-amount.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedServicesModule, RequestAmountModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
