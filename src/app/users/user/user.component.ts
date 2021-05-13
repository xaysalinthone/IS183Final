import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: Object;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.userService.getUserById(this.activatedRoute.snapshot.params['id'])
      .then((resp) => {
        this.user = resp;
      });
  }

  updateUser(user: any) {
    const userID = user.id;
    delete user.id;
    this.userService.updateUser(userID, user).then((resp) => {
      if (resp) {
        this.router.navigate(['users']);
      }
    });
  }

}
