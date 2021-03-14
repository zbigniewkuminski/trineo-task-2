import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SlidingPopupComponent } from './components/sliding-popup/sliding-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivityRecordComponent } from './components/activity-record/activity-record.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidingPopupComponent,
    ActivityRecordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
