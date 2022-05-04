import {Component, Input} from "@angular/core";

@Component({
  selector: 'dv-page-header',
  templateUrl: 'page-header.component.html',
  styleUrls: ['page-header.component.scss']
})
export class PageHeaderComponent {

  @Input()
  placeholder?: string;

}
