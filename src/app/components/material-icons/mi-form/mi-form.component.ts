import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'mi-form',
  templateUrl: './mi-form.component.html',
  styleUrls: ['./mi-form.component.scss']
})
export class MiFormComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_apps_48px.svg'));
    iconRegistry.addSvgIcon(
      'arrow-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_arrow_upward_48px.svg'));
  }

  ngOnInit() {
  }

}
