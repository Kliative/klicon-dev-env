import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'feather-rain',
  templateUrl: './feather-rain.component.html',
  styleUrls: ['./feather-rain.component.scss']
})
export class FeatherRainComponent implements OnInit {

 @Input() iconColor:strimg;
  rainStroke: string;
  cloudStroke: string;
  @Input() animationAction: string;

  @Input() strokeWidth: number;
  @Input() duration: string;
  @Input() boxSize: number;
  @Input() color: string;

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
