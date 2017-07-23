import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'section-title',
  templateUrl: './section-title.component.jade',
  styleUrls: ['./section-title.component.sass']
})
export class SectionTitleComponent implements OnInit {
  @Input() title = null;
  constructor() { }

  ngOnInit() {
  }

}
