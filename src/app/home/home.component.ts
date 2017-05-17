import { Component, OnInit } from '@angular/core';
import {BookService} from '../books/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  books:Array<object>;

  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.getBooks();
  }

   getBooks() {
     this.bookService.getBooks().then((resp) => {
      this.books = resp;
     });  
  }

}
