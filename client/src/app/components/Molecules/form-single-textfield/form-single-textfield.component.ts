import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-single-textfield',
  templateUrl: './form-single-textfield.component.html',
  styleUrls: ['./form-single-textfield.component.css']
})
export class FormSingleTextfieldComponent implements OnInit {
  public searchWord: string;

  @Input() protected placeholder: string;

  @Output() clickEmit = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  clickAction () {
    this.clickEmit.emit(this.searchWord);
  }
}
