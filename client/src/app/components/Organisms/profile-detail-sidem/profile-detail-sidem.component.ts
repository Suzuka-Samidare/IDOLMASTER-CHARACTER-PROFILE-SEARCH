import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Profile } from '../../../../models/profile';

@Component({
  selector: 'app-profile-detail-sidem',
  templateUrl: './profile-detail-sidem.component.html',
  styleUrls: ['./profile-detail-sidem.component.css']
})
export class ProfileDetailSidemComponent implements OnInit {
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
