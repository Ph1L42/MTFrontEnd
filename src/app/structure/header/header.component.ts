import { Component } from '@angular/core';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [
    ToolbarModule,
    ButtonModule,
    RouterLink
  ],
  standalone: true
})
export class HeaderComponent {

}
