import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserService {

    // this is where the variables go

    apiUrl: string;

    constructor(
        private http: Http
    ) {
        // do init stuff
        this.apiUrl = 'http://34.209.151.254:3000/api/v1'
    }
    // this is where the function goes..
    getUsers(): Promise<Array<Object>> {
        return this.http.get(`${this.apiUrl}/user`).toPromise().then((resp) => {
            let users = resp.json();
            console.log('user', users);
            return users;
        });
    }

    getUserById(userId): Promise<Object> {
        return this.http.get(`${this.apiUrl}/user/id/${userId}`).toPromise().then((resp) => {
            let user = resp.json();
            console.log('book', user);
            return user;
        });
    }

    addUser(user): Promise<Object> {
        return this.http.post(`${this.apiUrl}/user`, user).toPromise().then((resp) => {
            let user = resp.json();
            console.log('user', user);
            return user;
        });
    }

    deleteUser(id): Promise<Object> {
        console.log(`from user.service delete method......`);
        return this.http.delete(`${this.apiUrl}/user/id/${id}`).toPromise().then((resp) => {
            let status = resp.json();
            console.log('user', status);
            return status;
        });
    }

    updateUser(id, user): Promise<Object> {
        return this.http.put(`${this.apiUrl}/user/id/${id}`, user).toPromise().then((resp) => {
            let user = resp.json();
            console.log('user', user);
            return user;
        });
    }
    

}
