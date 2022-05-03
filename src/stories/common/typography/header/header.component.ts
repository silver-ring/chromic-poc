import {Component, Input} from "@angular/core";

@Component({
  selector: 'dv-typography-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {

  @Input()
  text?: string;

}
