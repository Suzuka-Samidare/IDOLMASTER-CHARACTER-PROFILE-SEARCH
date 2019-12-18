import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Profile } from '../../../../models/profile';

@Component({
  selector: 'app-profile-detail-million',
  templateUrl: './profile-detail-million.component.html',
  styleUrls: ['./profile-detail-million.component.css']
})
export class ProfileDetailMillionComponent implements OnInit {
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
