import { Component, OnInit } from '@angular/core';
import {TankService} from '../tank.service';
import {Router} from '@angular/router';

@Component({
  selector: 'tank-create',
  templateUrl: './tank-create.component.html',
  styleUrls: ['./tank-create.component.css']
})

export class TankCreateComponent implements OnInit {

  tank:Object;

  constructor() { }

  ngOnInit() {
   
  }

}
