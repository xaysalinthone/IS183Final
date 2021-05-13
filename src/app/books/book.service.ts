import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

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
                return resp.json();
            });
    }

    getBookById(bookId): Promise<Object> {
        return this.http.get(`${this.apiUrl}/book/id/${bookId}`)
            .toPromise()
            .then((resp) => {
                return resp.json();
            });
    }

    addBook(book): Promise<Object> {
        return this.http.post(`${this.apiUrl}/book`, book)
            .toPromise()
            .then((resp) => {
                return resp.json();
            });
    }

    deleteBook(id): Promise<Object> {
        return this.http.delete(`${this.apiUrl}/book/id/${id}`)
            .toPromise()
            .then((resp) => {
                return resp.json();
            });
    }

    updateBook(id, book): Promise<Object> {
        return this.http.put(`${this.apiUrl}/book/id/${id}`, book)
            .toPromise()
            .then((resp) => {
                return resp.json();
            });
    }

}
