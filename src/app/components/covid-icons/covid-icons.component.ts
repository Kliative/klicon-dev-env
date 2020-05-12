import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-covid-icons',
  templateUrl: './covid-icons.component.html',
  styleUrls: ['./covid-icons.component.scss']
})
export class CovidIconsComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'covid-hand',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/covid-hand.svg'));
  }
  ngOnInit() {
  }

}
