import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

// Module 1 and 2
// import { ServerComponent } from './module-1-and-2/server/server.component';
// import { ServersComponent } from './module-1-and-2/servers/servers.component';
// import { WarningAlertComponent } from './module-1-and-2/warning-alert/warning-alert.component';
// import { SuccessAlertComponent } from './module-1-and-2/success-alert/success-alert.component';
// import { Assignment3Component } from './assignment3/assignment3.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
