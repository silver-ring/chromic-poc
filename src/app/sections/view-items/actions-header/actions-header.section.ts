import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'sc-actions-header',
  templateUrl: 'actions-header.section.html',
  styleUrls: ['actions-header.section.scss']
})
export class ActionsHeaderSection {

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
