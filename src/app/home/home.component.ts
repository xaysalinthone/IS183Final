import { Component, OnInit } from '@angular/core';
import { BookService } from '../books/book.service';
import { TankService } from '../tanks/tank.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Array<object>;
  users: Array<object>;
  tanks: Array<object>;

  constructor(
    private bookService: BookService,
    private tankService: TankService,
  ) { }

  ngOnInit() {
    this.getBooks();
    this.getTanks();
  }

  getBooks() {
    this.bookService.getBooks().then((resp) => {
      this.books = resp;
    });
  }
  getTanks() {
    this.tankService.getTanks().then((resp) => {
      this.tanks = resp;
    });
  }

}
