import {inject, Injectable, Signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {toSignal} from "@angular/core/rxjs-interop";
import {TeamModel} from "./team.model";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  protected httpClient = inject(HttpClient);

  getTeams(): Signal<TeamModel[]> {
    return toSignal(this.httpClient.get<TeamModel[]>('../assets/bundesliga.json'), {initialValue: []});
  }
}
