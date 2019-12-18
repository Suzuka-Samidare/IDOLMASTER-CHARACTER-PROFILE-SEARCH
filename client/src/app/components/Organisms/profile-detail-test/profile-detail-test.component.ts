import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Profile } from '../../../../models/profile';

@Component({
  selector: 'app-profile-detail-test',
  templateUrl: './profile-detail-test.component.html',
  styleUrls: ['./profile-detail-test.component.css']
})
export class ProfileDetailTestComponent implements OnInit {
  @Input() profile: Profile;

  public innerWidth: number;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  // windowの大きさがリサイズされた時に、メソッド処理される
  @HostListener('window:resize', ['$event']) onResize(event) {
    this.innerWidth = window.innerWidth;
  }

}
