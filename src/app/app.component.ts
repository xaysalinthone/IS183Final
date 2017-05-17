import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent implements OnInit {

  links: Array<Object>;
  title: string;

  showLink: boolean;
  constructor(private appService: AppService) {
  }
  ngOnInit() {
  }
  toggleLink() {
    this.showLink = this.appService.toggle(this.showLink);
    console.log('this.showLink is ...', this.showLink);
  }
}
