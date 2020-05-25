import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-material-icons',
  templateUrl: './material-icons.component.html',
  styleUrls: ['./material-icons.component.scss']
})
export class MaterialIconsComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() { }

  ngOnInit() {
  }

}
