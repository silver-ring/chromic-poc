import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'el-action-button',
  templateUrl: 'action-button.element.html',
  styleUrls: ['action-button.element.scss']
})
export class ActionButtonElement {

  @Input()
  label?: string;

  @Output()
  click = new EventEmitter<void>()

  onClick() {
    this.click.emit()
  }

}
