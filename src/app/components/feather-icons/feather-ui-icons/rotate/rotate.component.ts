import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'garicon-rotate',
  templateUrl: './rotate.component.html',
  styleUrls: ['./rotate.component.scss']
})
export class RotateComponent implements OnInit {
  iconColor = 'black';

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
