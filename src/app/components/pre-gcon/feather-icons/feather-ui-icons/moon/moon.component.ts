import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'garicon-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.scss']
})
export class MoonComponent implements OnInit {

  @Input() iconColor: string;

  lineStroke: string;

  @Input() animationAction: string;
  @Input() strokeWidth: number;

  aniOnload = false;
  aniHover = false;

  ngOnInit(): void {
    this.lineStroke = `${this.strokeWidth}`;
    
   

    console.warn(this.iconColor);
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