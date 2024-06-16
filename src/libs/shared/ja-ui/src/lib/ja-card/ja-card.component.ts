import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'ja-card',
  templateUrl: './ja-card.component.html',
})
export class JaCardComponent {

  // List of input properties and their default values
  @Input() header: string = '';
  @Input() subHeader: string = '';
  @Input() customInlineStyles: { [param: string]: any} | null | undefined = { width: '400px' };
  @Input() customClass: string | any = '';
  @Input() id: string = 'card-1';
  @Input() isHidden: boolean = false;

  @Input() cardHeaderTemplate: TemplateRef<any> | null = null;
  @Input() cardBodyTemplate: TemplateRef<any> | null = null;
  @Input() cardFooterTemplate: TemplateRef<any> | null = null;
  @Input() useCustomTemplate: boolean = false;
}
