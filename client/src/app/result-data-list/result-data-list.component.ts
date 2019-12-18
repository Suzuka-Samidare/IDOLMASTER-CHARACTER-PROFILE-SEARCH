import { Component, OnInit, Input } from '@angular/core';

import { Profile } from '../../models/profile';

@Component({
  selector: 'app-result-data-list',
  templateUrl: './result-data-list.component.html',
  styleUrls: ['./result-data-list.component.css']
})
export class ResultDataListComponent implements OnInit {
  private _title: string;

  @Input() profile: Profile;

  // idol illustration
  @Input() illustrationUrl: string;

  constructor() { }

  ngOnInit() {
  }
}
