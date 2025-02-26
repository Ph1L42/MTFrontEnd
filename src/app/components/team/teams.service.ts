import {inject, Injectable, Signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {toSignal} from "@angular/core/rxjs-interop";
import {Team} from "../../team.model";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  protected httpClient = inject(HttpClient);

  getTeams(): Signal<Team[]> {
    return toSignal(this.httpClient.get<Team[]>('../assets/bundesliga.json'), {initialValue: []});
  }
}
