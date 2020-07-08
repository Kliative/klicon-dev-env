import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'feather-snow',
  templateUrl: './feather-snow.component.html',
  styleUrls: ['./feather-snow.component.scss']
})
export class FeatherSnowComponent implements OnInit {
 @Input() iconColor:strimg;
  rainStroke: string;
  cloudStroke: string;
  @Input() animationAction: string;

  @Input() strokeWidth: number;
  aniOnload = false;
  aniHover = false;

  ngOnInit(): void {

    this.cloudStroke = this.strokeWidth.toString();
    this.rainStroke = (this.strokeWidth / 2).toString();

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
