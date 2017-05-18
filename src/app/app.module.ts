import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// common components
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { DocsComponent } from './docs/docs.component';
import { HomeComponent } from './home/home.component';

// books
import { BookService } from './books/book.service';
import { BookComponent } from './books/book/book.component';
import { BooksComponent } from './books/books.component';
import { BookCreateComponent } from './books/book-create/book-create.component';

// tanks
import { TankService } from './tanks/tank.service';
import { TankComponent } from './tanks/tank/tank.component';
import { TanksComponent } from './tanks/tanks.component';
import { TankCreateComponent } from './tanks/tank-create/tank-create.component';

// users

// Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'docs',   component: DocsComponent },
  // books
  { path: 'books', component: BooksComponent },
  { path: 'book/:id',   component: BookComponent },
  { path: 'book-create',   component: BookCreateComponent },
  // tanks
  { path: 'tanks', component: TanksComponent },
  { path: 'tank/:id',   component: TankComponent },
  { path: 'tank-create',   component: TankCreateComponent },
  // users
 
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainFooterComponent,
    DocsComponent,
    HomeComponent,
    // books
    BooksComponent,
    BookCreateComponent,
    BookComponent,
    // tanks
    TanksComponent,
    TankCreateComponent,
    TankComponent,
    // users
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BookService,
    TankService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
