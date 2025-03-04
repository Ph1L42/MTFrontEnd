import {Component, input} from '@angular/core';
import {TeamModel} from "./team.model";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  standalone: true
})
export class TeamComponent {
  teams = input.required<TeamModel>()
}
