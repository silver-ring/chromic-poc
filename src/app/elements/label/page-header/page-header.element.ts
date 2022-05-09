import {Component, Input} from "@angular/core";

@Component({
  selector: 'el-page-header',
  templateUrl: 'page-header.element.html',
  styleUrls: ['page-header.element.scss']
})
export class PageHeaderElement {

  @Input()
  text?: string;

}
