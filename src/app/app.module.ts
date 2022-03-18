import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestLifeCycleComponent } from './test-life-cycle/test-life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    TestLifeCycleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
