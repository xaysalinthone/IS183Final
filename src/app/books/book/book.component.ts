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
    // console.log(this.activatedRoute.snapshot.params['id'])
    this.bookService.getBookById(this.activatedRoute.snapshot.params['id'])
      .then((resp) => {
        // console.log('resp book', resp);
        this.book = resp;
      });
  }

  updateBook(book: any) {
    // console.log('book', book);
    const bookID = book.id;
    delete book.id;
    this.bookService.updateBook(bookID, book).then((resp) => {
      // console.log('resp', resp);
      if (resp) {
        this.router.navigate(['books']);
      }
    });
  }

}
