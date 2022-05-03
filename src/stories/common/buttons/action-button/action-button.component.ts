import {Component, Input} from "@angular/core";

@Component({
  selector: 'dv-action-button',
  templateUrl: 'action-button.component.html',
  styleUrls: ['action-button.component.scss']
})
export class ActionButtonComponent {

  @Input()
  label?: string;

}
