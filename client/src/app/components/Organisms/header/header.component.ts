import { Component, OnInit, Input } from '@angular/core';
import { IdolService } from '../../../idol.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() colorCode: string;

  constructor(
    private idolService: IdolService,
  ) { }

  ngOnInit() {
    console.log(this.colorCode);
  }
}
