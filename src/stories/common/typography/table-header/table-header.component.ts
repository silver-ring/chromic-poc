import {Component, Input} from "@angular/core";

@Component({
  selector: 'dv-typography-table-header',
  templateUrl: 'table-header.component.html',
  styleUrls: ['table-header.component.scss']
})
export class TableHeaderComponent {

  @Input()
  text?: string;

}
