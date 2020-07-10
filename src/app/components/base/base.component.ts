import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'garicon-base',
  template: ``,
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  @Input() iconColor: string;

  
  @Input() dimension: number;
  @Input() animationAction: string;
  @Input() strokeWidth: number;


  lineStroke: string;
  widthHieghtDimensions: string;

  aniOnload = false;
  aniHover = false;
  
  ngOnInit(): void {

    this.lineStroke = this.strokeWidth ? `${this.strokeWidth}`: '2';
    this.widthHieghtDimensions = this.dimension ? `${this.dimension}px` : `50px`;
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
