import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'aa-f-rain',
  templateUrl: './aa-f-rain.component.html',
  styleUrls: ['./aa-f-rain.component.scss'],
  animations: [
    trigger('rainCloud', [
      // ...
      state('cloudShake', style({})),
      transition('* => cloudShake', [
        animate("2s", keyframes([
          style({ transform: "translate(0px, 0px)", offset: 0. }),
          style({ transform: "translate(0px, 1px)", offset: 0.25 }),
          style({ transform: "translate(0px, -1px)", offset: 0.5 }),
          style({ transform: "translate(0px, 1px)", offset: 0.75 }),
          style({ transform: "translate(0px, 0px)", offset: 1 }),

        ]))
      ]),

    ]),
  ]

})
export class AaFRainComponent implements OnInit {

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

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }


}
