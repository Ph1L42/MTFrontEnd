import {bootstrapApplication} from '@angular/platform-browser';

import {AppComponent} from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {MainComponent} from "./app/structure/main/main.component";
import {provideHttpClient} from "@angular/common/http";
import {TeamsComponent} from "./app/components/teams/teams.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'teams', component: TeamsComponent}
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
