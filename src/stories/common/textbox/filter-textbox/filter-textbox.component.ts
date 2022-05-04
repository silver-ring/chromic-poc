import {Component, Input} from "@angular/core";

@Component({
  selector: 'dv-filter-textbox',
  templateUrl: 'filter-textbox.component.html',
  styleUrls: ['filter-textbox.component.scss']
})
export class FilterTextboxComponent {

  @Input()
  placeholder?: string;

}
