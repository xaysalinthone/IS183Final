import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  books:Array<Object>;

  constructor(
    private bookService: BookService,
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.books = [];
    this.getBooks();
    console.log('books', this.books);
  }

  getBooks() {
     this.bookService.getBooks().then((resp) => {
      this.books = resp;
     });  
  }

  goToCreate() {
    console.log('go to create....;');
    this.router.navigate(['book-create']);
  }

  deleteBook(id:string) {
    console.log(`deleting book with id of : ${id}`);
    this.bookService.deleteBook(id).then((resp) => {
      if(resp) {
        this.books = this.books.filter((book) => {
          return book['id'] != id;
        });
      }
    });
  }

}
