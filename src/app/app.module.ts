import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {AgendaComponent} from './components/agenda/agenda.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MenuComponent} from './components/menu/menu.component';
import {CreateEventComponent} from './components/create-event/create-event.component';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './components/registration/registration.component';
import { HelpComponent } from './components/help/help.component';

/*
 * on cree les differentes routes
 */
const routes: Routes = [
  {path: 'agenda', component: AgendaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create', component: AgendaComponent},
  {path: 'create', component: CreateEventComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'help', component: HelpComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

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
    /*
     * on declare nos routes
     */
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
