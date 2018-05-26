import {AgendaComponent} from '../components/agenda/agenda.component';
import {CreateEventComponent} from '../components/create-event/create-event.component';
import {HelpComponent} from '../components/help/help.component';
import {LoginComponent} from '../components/login/login.component';
import {RegistrationComponent} from '../components/registration/registration.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';


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
  imports: [
    CommonModule,
    /*
     * on declare nos routes
     */
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule {}
