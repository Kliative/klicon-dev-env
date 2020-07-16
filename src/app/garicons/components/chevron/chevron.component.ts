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

    this.chevronDirection = this.initialiseChevronDirection(this.chevronDirection);

    this.correctViewBox = this.initialiseChevronViewBox(this.doubleChevron);
  }

  private initialiseChevronDirection(chevronDirection: string): string {
    return chevronDirection ? chevronDirection : 'right';
  }

  private initialiseChevronViewBox(doubleChevron: boolean): string {
    return doubleChevron ? '0 0  13 16' : '0 0 20 16';
  }

}
