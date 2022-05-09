import {Component, Input} from "@angular/core";

@Component({
  selector: 'el-textbox',
  templateUrl: 'textbox.element.html',
  styleUrls: ['textbox.element.scss']
})
export class TextboxElement {

  @Input()
  placeholder?: string;

  @Input()
  styles?: string;
}
