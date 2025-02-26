import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./structure/header/header.component";
import {FooterComponent} from "./structure/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent

  ]
})
export class AppComponent {
  title = 'Matchtracker';
}
