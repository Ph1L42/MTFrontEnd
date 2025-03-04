import {Component, inject} from '@angular/core';
import {Button} from "primeng/button";
import {PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {TeamsService} from "../team/teams.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  standalone: true,
  imports: [
    Button,
    PrimeTemplate,
    TableModule
  ],
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  protected team = inject(TeamsService).getTeams();
}
