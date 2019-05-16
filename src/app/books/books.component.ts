import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  books: Array<Object>;

  constructor(
    private bookService: BookService,
    private router: Router
  ) {

  }

  async ngOnInit() {
    this.books = [];
    await this.getBooks();
  }

  async getBooks() {
    this.books = await this.bookService.getBooks();
  }

  goToCreate() {
    this.router.navigate(['book-create']);
  }

  async deleteBook(id: string) {
    const resp = await this.bookService.deleteBook(id);
    if (resp) {
      this.books = this.books.filter((book) => {
        return book['id'] !== id;
      });
    }
  }

}
