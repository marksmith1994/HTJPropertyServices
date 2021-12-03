import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-loading-mask',
  templateUrl: './loading-mask.component.html',
  styleUrls: ['./loading-mask.component.scss']
})
export class LoadingMaskComponent {

  @Input() loading: boolean = true;
  @Input() error: boolean = false;
  @Input() fill: boolean = false;

  @ContentChild(TemplateRef, { static: true }) content: any;

}
