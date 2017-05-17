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
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id'])
    this.bookService.getBookById(this.activatedRoute.snapshot.params['id'])
      .then((resp) => {
        console.log('resp book', resp);
        this.book = resp;
     });
  }

  updateBook(id, book:Object) {
    console.log('book', book);
    
    this.bookService.updateBook(id, book).then((resp) => {
      console.log('resp', resp);
      if(resp) {
        this.router.navigate(['books']);
      }
    });
  }

}
