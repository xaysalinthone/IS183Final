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

    async getBooks(): Promise<Array<Object>> {
        const resp = await this.http.get(`${this.apiUrl}/book`).toPromise();
        const books = resp.json();
        return books || [];
    }

    async getBookById(bookID): Promise<Object> {
        const resp = await this.http.get(`${this.apiUrl}/book/id/${bookID}`).toPromise();
        const book = resp.json();
        return book || [];
    }

    async addBook(book): Promise<Object> {
        const resp = await this.http.post(`${this.apiUrl}/book`, book).toPromise();
        const newBook = resp.json();
        return newBook || null;
    }

    async deleteBook(bookID): Promise<Object> {
        const resp = await this.http.delete(`${this.apiUrl}/book/id/${bookID}`).toPromise();
        const status = resp.json();
        return status;
    }

    async updateBook(bookID, book): Promise<Object> {
        const resp = await this.http.put(`${this.apiUrl}/book/id/${bookID}`, book).toPromise();
        const updatedBook = resp.json();
        return updatedBook;
    }

}
