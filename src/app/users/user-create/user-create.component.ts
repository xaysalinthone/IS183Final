import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit {

  user:Object;

  constructor(
    private userService:UserService,
    private router:Router
    ) { }

  ngOnInit() {
    this.user = {};
  }

  createUser(user:Object) {
    this.userService.addUser(user).then((resp) => {
      this.router.navigate(['/users']);
    });
  }

}
