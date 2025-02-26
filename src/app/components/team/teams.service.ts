import {inject, Injectable, Signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {toSignal} from "@angular/core/rxjs-interop";
import {Team} from "../../team.model";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  protected httpClient = inject(HttpClient);

/*  loadTeams() {
    this.http.get<any[]>('assets/bundesliga.json').subscribe(data => {
      this.teams.set(data);
    });
  }*/


  getTeams(): Signal<Team[]> {
    return toSignal(this.httpClient.get<Team[]>('https://localhost:8080/assets/bundesliga.json'), {initialValue: []});
  }
}
