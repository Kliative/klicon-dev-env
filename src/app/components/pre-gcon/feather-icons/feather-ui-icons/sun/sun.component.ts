import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'garicon-sun',
  templateUrl: './sun.component.html',
  styleUrls: ['./sun.component.scss']
})
export class SunComponent implements OnInit {
 @Input() iconColor:string;

  lineStroke: string;

  @Input() animationAction: string;
  @Input() strokeWidth: number;

  aniOnload = false;
  aniHover = false;

  ngOnInit(): void {
    this.lineStroke = `${this.strokeWidth}`;

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
