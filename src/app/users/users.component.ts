import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users:Array<Object>;

  constructor(
    private userService: UserService,
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.users = [];
    this.getUsers();
    console.log('users', this.users);
  }

  getUsers() {
     this.userService.getUsers().then((resp) => {
      this.users = resp;
     });  
  }

  goToCreate() {
    console.log('go to create....;');
    this.router.navigate(['user-create']);
  }

  deleteUser(id:string) {
    console.log(`deleting user with id of : ${id}`);
    this.userService.deleteUser(id).then((resp) => {
      if(resp) {
        this.users = this.users.filter((user) => {
          return user['id'] != id;
        });
      }
    });
  }

}
