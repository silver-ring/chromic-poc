import {Component, Input} from "@angular/core";

@Component({
  selector: 'cp-filter-textbox',
  templateUrl: 'filter-textbox.component.html',
  styleUrls: ['filter-textbox.component.scss']
})
export class FilterTextboxComponent {

  @Input()
  placeholder?: string;

}
