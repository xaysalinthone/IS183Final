import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesignModule } from './material-design/material-design.module';

// common components
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { DocsComponent } from './docs/docs.component';
import { DocsButtonsComponent } from './docs/docs-buttons/docs-buttons.component';

import { HomeComponent } from './home/home.component';

// books components
import { BookService } from './books/book.service';
import { BookComponent } from './books/book/book.component';
import { BooksComponent } from './books/books.component';
import { BookCreateComponent } from './books/book-create/book-create.component';

// beverages components
import { BeverageService } from './beverages/beverage.service';
import { BeverageComponent } from './beverages/beverage/beverage.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { BeverageCreateComponent } from './beverages/beverage-create/beverage-create.component';

// users components
// ...

// Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'docs', component: DocsComponent },
  // books
  { path: 'books', component: BooksComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'book-create', component: BookCreateComponent },
  // beverages
  { path: 'beverages', component: BeveragesComponent },
  { path: 'beverage/:id', component: BeverageComponent },
  { path: 'beverage-create', component: BeverageCreateComponent },
  // users
  // ...
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainFooterComponent,
    DocsComponent,
    DocsButtonsComponent,
    HomeComponent,
    // books
    BooksComponent,
    BookCreateComponent,
    BookComponent,
    // beverages
    BeveragesComponent,
    BeverageCreateComponent,
    BeverageComponent
    // users
    // ...
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BookService,
    BeverageService
    // ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
