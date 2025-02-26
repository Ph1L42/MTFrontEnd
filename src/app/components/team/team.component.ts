import {Component, input} from '@angular/core';
import {Team} from "../../team.model";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  standalone: true
})
export class TeamComponent {
  teams = input.required<Team>()
}
