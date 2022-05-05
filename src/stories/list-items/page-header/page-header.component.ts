import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'dv-page-header',
  templateUrl: 'page-header.component.html',
  styleUrls: ['page-header.component.scss']
})
export class PageHeaderComponent {

  @Input()
  placeholder?: string;

  @Output()
  clickControlRules = new EventEmitter<void>()

  @Output()
  clickActionRules = new EventEmitter<void>()

  onClickControlRules() {
    this.clickControlRules.emit();
  }
  onClickActionRules() {
    this.clickActionRules.emit();
  }

}
