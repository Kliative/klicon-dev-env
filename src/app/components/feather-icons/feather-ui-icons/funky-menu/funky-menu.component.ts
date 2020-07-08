import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'garicon-funky-menu',
  templateUrl: './funky-menu.component.html',
  styleUrls: ['./funky-menu.component.scss']
})
export class FunkyMenuComponent implements OnInit {
 @Input() iconColor:strimg;

  rotateStroke: string;

  @Input() animationAction: string;
  @Input() strokeWidth: number;
  @Input() clockWise: boolean;

  aniOnload = false;
  aniHover = false;
  rotateDirection: string;
  ngOnInit(): void {

    this.rotateStroke = this.strokeWidth.toString();

    if (!this.clockWise) {
      this.rotateDirection = 'clockWise';
    } else {
      this.rotateDirection = 'counterClockWise';
    }


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
