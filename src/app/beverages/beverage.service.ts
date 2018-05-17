import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs';

@Injectable()
export class BeverageService {

    private apiUrl: string;

    constructor(
        private http: Http
    ) {
        this.apiUrl = environment.apiUrl;
    }

    getBeverages(): Promise<Array<Object>> {
        return this.http.get(`${this.apiUrl}/beverage`)
            .toPromise()
            .then((resp) => {
                let beverages = resp.json();
                return beverages;
            });
    }

    getBeverageById(beverageId): Promise<Object> {
        return this.http.get(`${this.apiUrl}/beverage/id/${beverageId}`)
            .toPromise()
            .then((resp) => {
                let beverage = resp.json();
                return beverage;
            });
    }

    addBeverage(beverage): Promise<Object> {
        return this.http.post(`${this.apiUrl}/beverage`, beverage)
            .toPromise()
            .then((resp) => {
                let beverage = resp.json();
                return beverage;
            });
    }

    deleteBeverage(id): Promise<Object> {
        return this.http.delete(`${this.apiUrl}/beverage/id/${id}`)
            .toPromise()
            .then((resp) => {
                let status = resp.json();
                return status;
            });
    }

    updateBeverage(id, beverage): Promise<Object> {
        return this.http.put(`${this.apiUrl}/beverage/id/${id}`, beverage)
            .toPromise()
            .then((resp) => {
                let beverage = resp.json();
                return beverage;
            });
    }

}
