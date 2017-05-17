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
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { DocsComponent } from './docs/docs.component';
import { HomeComponent } from './home/home.component';

// Routes
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'book/:id',   component: BookComponent },
  { path: 'book-create',   component: BookCreateComponent },
  { path: 'docs',   component: DocsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookCreateComponent,
    BookComponent,
    MainNavComponent,
    MainFooterComponent,
    DocsComponent,
    HomeComponent
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
