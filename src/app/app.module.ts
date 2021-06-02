import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent }    from './app.component';

import { ServerComponent }       from './component/server/server.component';
import { ServersComponent }      from './component/servers/servers.component';
import { AlertSuccessComponent } from './component/alert/alert-success/alert-success.component';
import { AlertWarningComponent } from './component/alert/alert-warning/alert-warning.component';
import { TestComponent }         from './component/test/test.component';
import { AssignmentComponent }   from './component/assignment/assignment.component';

@NgModule({
  
  declarations: [
    TestComponent,
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertSuccessComponent,
    AlertWarningComponent,
    AssignmentComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
