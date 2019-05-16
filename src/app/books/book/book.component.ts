import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: Object;

  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    const resp = await this.bookService.getBookById(this.activatedRoute.snapshot.params['id']);
    this.book = resp || [];
  }

  async updateBook(book: any) {
    const bookID = book.id;
    const resp = await this.bookService.updateBook(bookID, book);
    if (resp) {
      this.router.navigate(['books']);
    }
  }

}
