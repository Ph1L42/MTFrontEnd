import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [
    HeaderComponent,
    Button,
    CardModule,
    TableModule
  ],
  standalone: true
})
export class MainComponent {

}
