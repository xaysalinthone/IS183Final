import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs';

@Injectable()
export class BookService {

    private apiUrl: string;

    constructor(
        private http: Http
    ) {
        this.apiUrl = environment.apiUrl;
    }

    getBooks(): Promise<Array<Object>> {
        return this.http.get(`${this.apiUrl}/book`)
            .toPromise()
            .then((resp) => {
                let books = resp.json();
                return books;
            });
    }

    getBookById(bookId): Promise<Object> {
        return this.http.get(`${this.apiUrl}/book/id/${bookId}`)
            .toPromise()
            .then((resp) => {
                let book = resp.json();
                return book;
            });
    }

    addBook(book): Promise<Object> {
        return this.http.post(`${this.apiUrl}/book`, book)
            .toPromise()
            .then((resp) => {
                let book = resp.json();
                return book;
            });
    }

    deleteBook(id): Promise<Object> {
        return this.http.delete(`${this.apiUrl}/book/id/${id}`)
            .toPromise()
            .then((resp) => {
                let status = resp.json();
                return status;
            });
    }

    updateBook(id, book): Promise<Object> {
        return this.http.put(`${this.apiUrl}/book/id/${id}`, book)
            .toPromise()
            .then((resp) => {
                let book = resp.json();
                return book;
            });
    }

}
