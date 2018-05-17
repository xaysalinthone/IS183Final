import { Component, OnInit } from '@angular/core';
import { BeverageService } from './beverage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})

export class BeveragesComponent implements OnInit {

  beverages: Array<Object> = [];

  constructor() {
  }

  ngOnInit() {
    this.getBeverages();
  }

  getBeverages() {
   
  }

  goToCreate() {
   
  }

  deleteBeverage(id: string) {
    
  }

}
