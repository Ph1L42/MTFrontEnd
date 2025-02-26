import {Component, inject} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {TeamsService} from "../../components/team/teams.service";
import {TeamComponent} from "../../components/team/team.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [
    HeaderComponent,
    Button,
    CardModule,
    TableModule,
    TeamComponent
  ],
  standalone: true
})
export class MainComponent {
  protected team = inject(TeamsService).getTeams();
}
