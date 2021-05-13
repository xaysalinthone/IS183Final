import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

    private apiUrl: string;

    constructor(
        private http: Http
    ) {
        this.apiUrl = environment.apiUrl;
    }

    async getUsers(): Promise<Array<Object>> {
        const resp = await this.http.get(`${this.apiUrl}/user`)
            .toPromise();
        return resp.json();
    }

    getUserById(userId): Promise<Object> {
        return this.http.get(`${this.apiUrl}/user/id/${userId}`)
            .toPromise()
            .then((resp) => {
                return resp.json();
            });
    }

    addUser(user): Promise<Object> {
        return this.http.post(`${this.apiUrl}/user`, user)
            .toPromise()
            .then((resp) => {
                return resp.json();
            });
    }

    deleteUser(id): Promise<Object> {
        return this.http.delete(`${this.apiUrl}/user/id/${id}`)
            .toPromise()
            .then((resp) => {
                return resp.json();
            });
    }

    updateUser(id, user): Promise<Object> {
        return this.http.put(`${this.apiUrl}/user/id/${id}`, user)
            .toPromise()
            .then((resp) => {
                return resp.json();
            });
    }

}
