import {Component, Input} from "@angular/core";

@Component({
  selector: 'el-table-header',
  templateUrl: 'table-header.element.html',
  styleUrls: ['table-header.element.scss']
})
export class TableHeaderElement {

  @Input()
  text?: string;

}
