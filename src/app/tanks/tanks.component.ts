import { Component, OnInit } from '@angular/core';
import { TankService } from './tank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.css']
})

export class TanksComponent implements OnInit {

  tanks:Array<Object>;

  constructor(
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.tanks = [];
  }

  goToCreate() {
    this.router.navigate(['tank-create']);
  }

}
