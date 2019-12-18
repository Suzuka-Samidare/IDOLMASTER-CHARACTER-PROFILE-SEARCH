import { Component, OnInit } from '@angular/core';
import { IdolService } from '../idol.service';

import { Profile } from '../../models/profile';

@Component({
  selector: 'app-main-contents',
  templateUrl: './main-contents.component.html',
  styleUrls: ['./main-contents.component.css']
})
export class MainContentsComponent implements OnInit {
  public profile: Profile;
  public colorCode: string;

  public illustrationUrl: string;

  constructor(
    private idolService: IdolService,
  ) { }

  ngOnInit() {
    this.illustrationUrl = '../../assets/angular.png';
  }

  async fetchIdol(searchIdol: String) {
    let profile;
    let illustrationUrl;
    await this.idolService.fetchIdolProfile(searchIdol)
      .then((res: Profile) => {
        profile = res;
      })
      .catch((err: void) => {
        alert('プロフィール取得のエラーだぞ...');
      });
    await this.idolService.fetchIdolImage(searchIdol)
      .then((res) => {
        illustrationUrl = res.data.result.src;
      })
      .catch((err: void) => {
        alert('画像が入手出来なかったぞ...');
      });

    this.profile = profile;
    console.log(profile.color);
    if (profile.color !== null) {
      this.colorCode = `#${profile.color}`;
    } else {
      this.colorCode = '#323232';
    }
    this.illustrationUrl = illustrationUrl;
  }

}
