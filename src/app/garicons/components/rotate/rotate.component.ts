import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-rotate',
  templateUrl: './rotate.component.html',
  styleUrls: ['./rotate.component.scss']
})
export class RotateComponent extends BaseComponent implements OnInit {

  @Input() rotateClockWise: boolean;

  ngOnInit(): void {
    this.rotateClockWise = this.initialiseRotationDirection(this.rotateClockWise);
  }

  private initialiseRotationDirection(rotateClockWise: boolean): boolean {
    return rotateClockWise === null || rotateClockWise === undefined ? true : false;
  }

}
