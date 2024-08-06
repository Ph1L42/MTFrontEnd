import {Component} from '@angular/core';
import {ToolbarModule} from "primeng/toolbar";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  imports: [
    ToolbarModule
  ],
  standalone: true
})
export class FooterComponent {

}
