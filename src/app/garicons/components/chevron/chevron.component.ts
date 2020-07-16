import { Component, OnInit, Input } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'gcon-chevron',
  templateUrl: './chevron.component.html',
  styleUrls: ['./chevron.component.scss']
})
export class ChevronComponent extends BaseComponent implements OnInit {
  correctViewBox: string;

  @Input() chevronDirection: string;
  @Input() doubleChevron: boolean;

  ngOnInit(): void {
    if (!this.chevronDirection) {
      this.chevronDirection = 'right';
    }
    if (this.doubleChevron) {
      this.correctViewBox = '0 0  13 16';
    } else {
      this.correctViewBox = '0 0 20 16';
    }
  }

}
