import {bootstrapApplication} from '@angular/platform-browser';

import {AppComponent} from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {MainComponent} from "./app/structure/main/main.component";

const routes: Routes = [
    {path: '', component: MainComponent}
];

bootstrapApplication(AppComponent, {providers: [provideRouter(routes)]}).catch((err) => console.error(err));
