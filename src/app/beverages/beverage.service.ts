import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class BeverageService {

    private apiUrl: string;

    constructor(
        private http: Http
    ) {
        this.apiUrl = environment.apiUrl;
    }

    async getBeverages(): Promise<Array<Object>> {
        const resp = await this.http.get(`${this.apiUrl}/beverage`).toPromise();
        const beverages = resp.json();
        return beverages;
    }

    async getBeverageById(beverageId): Promise<Object> {
        return;
    }

    async addBeverage(beverage): Promise<Object> {
        return;
    }

    async deleteBeverage(id): Promise<Object> {
        return;
    }

    async updateBeverage(id, beverage): Promise<Object> {
        return;
    }

}
