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
        return;
    }

    addBeverage(beverage): Promise<Object> {
        return;
    }

    deleteBeverage(id): Promise<Object> {
        return;
    }

    updateBeverage(id, beverage): Promise<Object> {
        return;
    }

}
