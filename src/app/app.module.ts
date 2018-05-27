import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'angular-calendar';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {AgendaComponent} from './components/agenda/agenda.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MenuComponent} from './components/menu/menu.component';
import {CreateEventComponent} from './components/create-event/create-event.component';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './components/registration/registration.component';
import {HelpComponent} from './components/help/help.component';
import {RoutingModule} from './modules/routing.module';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AgendaComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CreateEventComponent,
    RegistrationComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RoutingModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
