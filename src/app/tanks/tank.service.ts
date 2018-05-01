import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs';

@Injectable()
export class TankService {

    private apiUrl: string;

    constructor(
        private http: Http
    ) {
        this.apiUrl = environment.apiUrl;
    }

    getTanks(): Promise<Array<Object>> {
        return;
    }

    getTankById(tankId): Promise<Object> {
        return;
    }

    addTank(tank): Promise<Object> {
        return;
    }

    deleteTank(id): Promise<Object> {
        return;
    }

    updateTank(id, tank): Promise<Object> {
        return;
    }

}
