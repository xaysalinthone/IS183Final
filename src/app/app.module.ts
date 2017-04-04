import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';

// service
import { BookService } from './books/book.service';
import { BookCreateComponent } from './books/book-create/book-create.component';
import { BookComponent } from './books/book/book.component';

// Routes
const appRoutes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'book/:id',   component: BookComponent },
  { path: 'create',   component: BookCreateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookCreateComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
