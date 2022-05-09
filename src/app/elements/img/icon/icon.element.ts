import {Component, Input} from "@angular/core";

@Component({
  selector: 'el-icon',
  templateUrl: 'icon.element.html',
  styleUrls: ['icon.element.scss']
})
export class IconElement {

  @Input()
  source?: string;

  @Input()
  alt?: string;
}
