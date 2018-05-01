import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'docs-buttons',
  templateUrl: './docs-buttons.component.html',
  styleUrls: ['./docs-buttons.component.css']
})
export class DocsButtonsComponent implements OnInit {

  @Output()
  private onButtonPressed: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  
  private press(event) {
    this.onButtonPressed.emit(event);
  }
}
