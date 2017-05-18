import { Component, OnInit } from '@angular/core';
import { TankService } from '../tank.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.css']
})
export class TankComponent implements OnInit {

  tank: Object;

  constructor(
    private tankService: TankService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id'])
    this.tankService.getTankById(this.activatedRoute.snapshot.params['id'])
      .then((resp) => {
        console.log('resp tank', resp);
        this.tank = resp;
      });
  }

  updateTank(id, tank: Object) {
    console.log('tank', tank);
    this.tankService.updateTank(id, tank).then((resp) => {
      console.log('resp', resp);
      if (resp) {
        this.router.navigate(['tanks']);
      }
    });
  }

}
