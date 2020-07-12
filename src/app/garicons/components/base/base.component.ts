import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'garicon-base',
  template: ``,
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnChanges {
  @Input() iconColor: string;


  @Input() dimension: number;
  @Input() animationAction: string;
  @Input() strokeWidth: number;


  lineStroke: string;
  widthHieghtDimensions: string;

  aniOnload = false;
  aniHover = false;

  ngOnChanges(): void {

    this.lineStroke = this.initialiseLineStroke(this.strokeWidth);

    this.widthHieghtDimensions = this.initialiseIconDimensions(this.dimension);

    this.setAnimationActionYype(this.animationAction);


  }

  private initialiseLineStroke(strokeWidth: number): string {
    return strokeWidth ? `${strokeWidth}` : '2';
  }

  private initialiseIconDimensions(dimension: number): string {
    return dimension ? `${dimension}px` : `50px`;
  }
  private setAnimationActionYype(animationAction: string): void {
    switch (this.animationAction) {
      case 'onload':
        this.aniOnload = true;
        break;
      case 'hover':
        this.aniHover = true;
        break;
      default:
        this.aniOnload = true;
        break;
    }
  }

}

