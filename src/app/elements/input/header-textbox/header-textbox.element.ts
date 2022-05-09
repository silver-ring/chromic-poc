import {Component, Input} from "@angular/core";

@Component({
  selector: 'el-header-textbox',
  templateUrl: 'header-textbox.element.html',
  styleUrls: ['header-textbox.element.scss'],
})
export class HeaderTextboxElement {

  @Input()
  styles?: string;
}
